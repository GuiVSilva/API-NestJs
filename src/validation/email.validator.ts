import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from 'src/repository/usuario.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UsuarioRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const existEmail = await this.userRepository.checkEmail(value);
    return !existEmail;
  }
}

export const emailUnique = (optionsValidation: ValidationOptions) => {
  return (object: Object, propriedade: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propriedade,
      options: optionsValidation,
      constraints: [],
      validator: EmailValidator,
    });
  };
};

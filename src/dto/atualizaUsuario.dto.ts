import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { emailUnique } from 'src/validation/email.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'o e-mail informado é invalido' })
  @emailUnique({ message: 'Já existe um usuário com esse email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'a senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { emailUnique } from 'src/validation/email.validator';

export class UsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;

  @IsEmail(undefined, { message: 'o e-mail informado é invalido' })
  @emailUnique({ message: 'Já existe um usuário com esse email' })
  email: string;

  @MinLength(6, { message: 'a senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}

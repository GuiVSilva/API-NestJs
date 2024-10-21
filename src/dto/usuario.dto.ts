import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;

  @IsEmail(undefined, { message: 'o e-mail informado é invalido' })
  email: string;

  @MinLength(6, { message: 'a senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}

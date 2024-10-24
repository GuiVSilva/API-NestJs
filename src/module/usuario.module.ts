import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { EmailValidator } from 'src/validation/email.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailValidator],
})
export class UsuarioModule {}

import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioRepository } from 'src/repository/usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository]
})
export class UsuerioModule {}

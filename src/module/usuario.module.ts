import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { EmailValidator } from 'src/validation/email.validator';
import { UsuarioService } from 'src/service/usuario.service';
import { UsuarioEntity } from 'src/entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, EmailValidator],
})
export class UsuarioModule {}

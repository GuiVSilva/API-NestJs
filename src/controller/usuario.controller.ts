import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AtualizaUsuarioDTO } from 'src/dto/atualizaUsuario.dto';
import { ListaUsuarioDTO } from 'src/dto/listaUsuario.dto';
import { UsuarioDTO } from 'src/dto/usuario.dto';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { v4 as uuid } from 'uuid';
import { UsuarioService } from 'src/service/usuario.service';

@Controller('/users')
export class UsuarioController {
  constructor(
    private userRepository: UsuarioRepository,
    private userService: UsuarioService,
  ) {}

  @Post()
  async createUser(@Body() dataUser: UsuarioDTO) {
    const userEntity = new UsuarioEntity();

    userEntity.email = dataUser.email;
    userEntity.senha = dataUser.senha;
    userEntity.nome = dataUser.nome;
    userEntity.id = uuid();

    this.userService.create(userEntity);
    return { id: userEntity.id, message: 'user created!' };
  }

  @Get()
  async listUsers() {
    const list = await this.userService.listaUsuarios();
    return list;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() newDataUser: AtualizaUsuarioDTO,
  ) {
    const update = await this.userService.update(id, newDataUser);
    return {
      usuario: update,
      message: 'user updated!',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deleteUser = await this.userService.delete(id);
    return {
      deleteUser: deleteUser,
      message: 'user deleted!',
    };
  }
}

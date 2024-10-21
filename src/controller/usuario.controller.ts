import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioDTO } from 'src/dto/usuario.dto';
import { UsuarioRepository } from 'src/repository/usuario.repository';

@Controller('/users')
export class UsuarioController {
  //   private userRepository = new UsuarioRepository();

  constructor(private userRepository: UsuarioRepository) {}

  @Post()
  async createUser(@Body() dataUser: UsuarioDTO) {
    this.userRepository.save(dataUser);
    return { status: 'user created!' };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}

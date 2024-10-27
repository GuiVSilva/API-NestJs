import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtualizaUsuarioDTO } from 'src/dto/atualizaUsuario.dto';
import { ListaUsuarioDTO } from 'src/dto/listaUsuario.dto';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(user: UsuarioEntity) {
    await this.usuarioRepository.save(user);
  }

  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.find();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosLista;
  }

  async update(id: string, user: AtualizaUsuarioDTO) {
    await this.usuarioRepository.update(id, user);
  }

  async delete(id: string) {
    await this.usuarioRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from 'src/entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  private users: UsuarioEntity[] = [];

  async save(user: UsuarioEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async checkEmail(email: string) {
    const check = this.users.find((user) => user.email === email);

    return check !== undefined;
  }

  async update(id: string, newData: Partial<UsuarioEntity>) {
    const checkUsuer = this.users.find((user) => user.id === id);

    if (!checkUsuer) {
      throw new Error('User doens´t exist!');
    }

    Object.entries(newData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      checkUsuer[key] = value;
    });
    return checkUsuer;
  }

  async remove(id: string) {
    const deleteUser = this.users.find((user) => user.id === id);
    if (!deleteUser) {
      throw new Error('User doens´t exist!');
    }

    this.users = this.users.filter((user) => user.id !== id);

    return deleteUser;
  }
}

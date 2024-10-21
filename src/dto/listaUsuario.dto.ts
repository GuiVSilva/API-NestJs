export class ListaUsuarioDTO {
  readonly id: string;
  readonly nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}

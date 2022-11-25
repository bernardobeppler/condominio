export class Morador {
    id!: number;
    nome: string;
    situacao: string;
    bloco: string;
    apartamento: string;
    constructor(nome: string, situacao: string, bloco: string, apartamento: string) {
        this.nome = nome;
        this.situacao = situacao;
        this.bloco = bloco;
        this.apartamento = apartamento;
    }

    public static clone(morador: Morador) {
      let m: Morador = new Morador(morador.nome, morador.situacao, morador.bloco, morador.apartamento);
      m.nome = morador.nome;
      m.situacao = morador.situacao;
      m.bloco = morador.bloco;
      m.apartamento = morador.apartamento;
      return m;
    }

      /**
   * @param morador
   * @returns
   */


    public static toWS(morador: Morador) {
      let m: Morador = new Morador(morador.nome, morador.situacao, morador.bloco, morador.apartamento);
      m.nome = morador.nome;
      m.situacao = morador.situacao;
      m.bloco = morador.bloco;
      m.apartamento = morador.apartamento;
      return m;
    }
}

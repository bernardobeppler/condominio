export class Morador {
    id!: number;
    nome?: string;
    situacao?: string;
    bloco?: string;
    apartamento?: string;
    constructor(nome: string, situacao: string, bloco: string, apartamento: string) {
        this.nome = nome;
        this.situacao = situacao;
        this.bloco = bloco;
        this.apartamento = apartamento;
    }

    public static clone(morador: Morador): Morador {
        return new Morador(morador.nome!, morador.situacao!, morador.bloco!, morador.apartamento!);
    }


    public static toWS(morador: Morador) {
        return {
            nome: morador.nome,
            situacao: morador.situacao,
            bloco: morador.bloco,
            apartamento: morador.apartamento
        };
    }
}

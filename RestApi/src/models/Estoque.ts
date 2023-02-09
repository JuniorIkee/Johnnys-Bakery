import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstoqueMovimentacao } from "./EstoqueMovimentacao";
import { EstoqueProduto } from "./EstoqueProduto";

@Entity("estoque", { schema: "johnnys_bakery" })
export class Estoque {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "nome", nullable: true, length: 50 })
  Nome: string | null;

  @Column("bit", { name: "ativo", nullable: true })
  Ativo: boolean | null;

  @OneToMany(
    () => EstoqueMovimentacao,
    (EstoqueMovimentacao) => EstoqueMovimentacao.IdEstoque2
  )
  EstoqueMovimentacaos: EstoqueMovimentacao[];

  @OneToMany(
    () => EstoqueProduto,
    (EstoqueProduto) => EstoqueProduto.IdEstoque2
  )
  EstoqueProdutos: EstoqueProduto[];
}

import { BoolBitTransformer } from "classes/bool-bit-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstoqueMovimentacao } from "./EstoqueMovimentacao";
import { EstoqueProduto } from "./EstoqueProduto";
import { IngredienteFornecedor } from "./IngredienteFornecedor";

@Entity("fornecedor", { schema: "johnnys_bakery" })
export class Fornecedor {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "nome", nullable: true, length: 100 })
  Nome: string | null;

  @Column("varchar", { name: "endereco_completo", nullable: true, length: 255 })
  EnderecoCompleto: string | null;

  @Column("int", { name: "ordem", nullable: true })
  Ordem: number | null;

  @Column("bit", {name: "ativo", nullable: true, transformer: new BoolBitTransformer()})
  Ativo: boolean | null;

  @OneToMany(
    () => EstoqueMovimentacao,
    (EstoqueMovimentacao) => EstoqueMovimentacao.IdFornecedor2
  )
  EstoqueMovimentacaos: EstoqueMovimentacao[];

  @OneToMany(
    () => EstoqueProduto,
    (EstoqueProduto) => EstoqueProduto.IdFornecedor2
  )
  EstoqueProdutos: EstoqueProduto[];

  @OneToMany(
    () => IngredienteFornecedor,
    (IngredienteFornecedor) => IngredienteFornecedor.IdFornecedor2
  )
  IngredienteFornecedors: IngredienteFornecedor[];

  IdEnc:string;
}

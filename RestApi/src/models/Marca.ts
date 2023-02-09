import { BoolBitTransformer } from "classes/bool-bit-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstoqueMovimentacao } from "./EstoqueMovimentacao";
import { EstoqueProduto } from "./EstoqueProduto";
import { IngredienteMarca } from "./IngredienteMarca";

@Entity("marca", { schema: "johnnys_bakery" })
export class Marca {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "nome", nullable: true, length: 100 })
  Nome: string | null;

  @Column("int", { name: "ordem", nullable: true })
  Ordem: number | null;

  @Column("bit", {name: "ativo", nullable: true, transformer: new BoolBitTransformer()})
  Ativo: boolean | null;

  @OneToMany(
    () => EstoqueMovimentacao,
    (EstoqueMovimentacao) => EstoqueMovimentacao.IdMarca2
  )
  EstoqueMovimentacaos: EstoqueMovimentacao[];

  @OneToMany(() => EstoqueProduto, (EstoqueProduto) => EstoqueProduto.IdMarca2)
  EstoqueProdutos: EstoqueProduto[];

  @OneToMany(
    () => IngredienteMarca,
    (IngredienteMarca) => IngredienteMarca.IdMarca2
  )
  IngredienteMarcas: IngredienteMarca[];

  IdEnc:string;
}

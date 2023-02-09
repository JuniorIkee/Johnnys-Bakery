import { BoolBitTransformer } from "classes/bool-bit-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstoqueMovimentacao } from "./EstoqueMovimentacao";
import { EstoqueProduto } from "./EstoqueProduto";
import { IngredienteFornecedor } from "./IngredienteFornecedor";
import { IngredienteMarca } from "./IngredienteMarca";
import { ReceitaProduto } from "./ReceitaProduto";

@Entity("ingrediente", { schema: "johnnys_bakery" })
export class Ingrediente {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "nome", nullable: true, length: 100 })
  Nome: string | null;

  @Column("decimal", {
    name: "estoque_minimo",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  EstoqueMinimo: string | null;

  @Column("decimal", {
    name: "margem_lucro",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  MargemLucro: string | null;

  @Column("decimal", {
    name: "custo_recente",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  CustoRecente: string | null;

  @Column( "bit",{name: "ativo", nullable: true, transformer: new BoolBitTransformer()})
  Ativo: boolean | null;

  @OneToMany(
    () => EstoqueMovimentacao,
    (EstoqueMovimentacao) => EstoqueMovimentacao.IdIngrediente2
  )
  EstoqueMovimentacaos: EstoqueMovimentacao[];

  @OneToMany(
    () => EstoqueProduto,
    (EstoqueProduto) => EstoqueProduto.IdIngrediente2
  )
  EstoqueProdutos: EstoqueProduto[];

  @OneToMany(
    () => IngredienteFornecedor,
    (IngredienteFornecedor) => IngredienteFornecedor.IdIngrediente2
  )
  IngredienteFornecedors: IngredienteFornecedor[];

  @OneToMany(
    () => IngredienteMarca,
    (IngredienteMarca) => IngredienteMarca.IdIngrediente2
  )
  IngredienteMarcas: IngredienteMarca[];

  @OneToMany(
    () => ReceitaProduto,
    (ReceitaProduto) => ReceitaProduto.IdIngrediente2
  )
  ReceitaProdutos: ReceitaProduto[];

  IdEnc:string;
}

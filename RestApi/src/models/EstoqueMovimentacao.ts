import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ingrediente } from "./Ingrediente";
import { Marca } from "./Marca";
import { Fornecedor } from "./Fornecedor";
import { Estoque } from "./Estoque";

@Index("id_estoque", ["IdEstoque"], {})
@Index("id_fornecedor", ["IdFornecedor"], {})
@Index("id_ingrediente", ["IdIngrediente"], {})
@Index("id_marca", ["IdMarca"], {})
@Entity("estoque_movimentacao", { schema: "johnnys_bakery" })
export class EstoqueMovimentacao {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { name: "id_ingrediente", nullable: true })
  IdIngrediente: number | null;

  @Column("int", { name: "id_fornecedor", nullable: true })
  IdFornecedor: number | null;

  @Column("int", { name: "id_marca", nullable: true })
  IdMarca: number | null;

  @Column("int", { name: "id_estoque", nullable: true })
  IdEstoque: number | null;

  @Column("decimal", {
    name: "quantidade",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  Quantidade: string | null;

  @Column("decimal", { name: "preco", nullable: true, precision: 15, scale: 2 })
  Preco: string | null;

  @ManyToOne(
    () => Ingrediente,
    (Ingrediente) => Ingrediente.EstoqueMovimentacaos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "id_ingrediente", referencedColumnName: "Id" }])
  IdIngrediente2: Ingrediente;

  @ManyToOne(() => Marca, (Marca) => Marca.EstoqueMovimentacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_marca", referencedColumnName: "Id" }])
  IdMarca2: Marca;

  @ManyToOne(
    () => Fornecedor,
    (Fornecedor) => Fornecedor.EstoqueMovimentacaos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "id_fornecedor", referencedColumnName: "Id" }])
  IdFornecedor2: Fornecedor;

  @ManyToOne(() => Estoque, (Estoque) => Estoque.EstoqueMovimentacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estoque", referencedColumnName: "Id" }])
  IdEstoque2: Estoque;
}

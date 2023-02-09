import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Receita } from "./Receita";
import { Ingrediente } from "./Ingrediente";

@Index("id_ingrediente", ["IdIngrediente"], {})
@Index("id_receita", ["IdReceita"], {})
@Entity("receita_produto", { schema: "johnnys_bakery" })
export class ReceitaProduto {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { name: "id_receita", nullable: true })
  IdReceita: number | null;

  @Column("int", { name: "id_ingrediente", nullable: true })
  IdIngrediente: number | null;

  @Column("decimal", {
    name: "quantidade",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  Quantidade: string | null;

  @ManyToOne(() => Receita, (Receita) => Receita.ReceitaProdutos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_receita", referencedColumnName: "Id" }])
  IdReceita2: Receita;

  @ManyToOne(() => Ingrediente, (Ingrediente) => Ingrediente.ReceitaProdutos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ingrediente", referencedColumnName: "Id" }])
  IdIngrediente2: Ingrediente;
}

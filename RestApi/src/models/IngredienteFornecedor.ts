import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ingrediente } from "./Ingrediente";
import { Fornecedor } from "./Fornecedor";

@Index("id_fornecedor", ["IdFornecedor"], {})
@Index("id_ingrediente", ["IdIngrediente"], {})
@Entity("ingrediente_fornecedor", { schema: "johnnys_bakery" })
export class IngredienteFornecedor {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { name: "id_ingrediente" })
  IdIngrediente: number;

  @Column("int", { name: "id_fornecedor" })
  IdFornecedor: number;

  @ManyToOne(
    () => Ingrediente,
    (Ingrediente) => Ingrediente.IngredienteFornecedors,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "id_ingrediente", referencedColumnName: "Id" }])
  IdIngrediente2: Ingrediente;

  @ManyToOne(
    () => Fornecedor,
    (Fornecedor) => Fornecedor.IngredienteFornecedors,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "id_fornecedor", referencedColumnName: "Id" }])
  IdFornecedor2: Fornecedor;
}

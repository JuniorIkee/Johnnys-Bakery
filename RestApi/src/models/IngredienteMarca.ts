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

@Index("id_ingrediente", ["IdIngrediente"], {})
@Index("id_marca", ["IdMarca"], {})
@Entity("ingrediente_marca", { schema: "johnnys_bakery" })
export class IngredienteMarca {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { name: "id_ingrediente" })
  IdIngrediente: number;

  @Column("int", { name: "id_marca" })
  IdMarca: number;

  @ManyToOne(
    () => Ingrediente,
    (Ingrediente) => Ingrediente.IngredienteMarcas,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "id_ingrediente", referencedColumnName: "Id" }])
  IdIngrediente2: Ingrediente;

  @ManyToOne(() => Marca, (Marca) => Marca.IngredienteMarcas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_marca", referencedColumnName: "Id" }])
  IdMarca2: Marca;
}

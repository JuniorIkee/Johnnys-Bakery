import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("passo_receita", { schema: "johnnys_bakery" })
export class PassoReceita {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("varchar", { name: "descricao", nullable: true, length: 150 })
  Descricao: string | null;

  @Column("int", { name: "ordem", nullable: true })
  Ordem: number | null;
}

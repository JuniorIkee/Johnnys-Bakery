import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("unidade", { schema: "johnnys_bakery" })
export class Unidade {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("varchar", { name: "nome", nullable: true, length: 30 })
  Nome: string | null;

  @Column("varchar", { name: "sigla", nullable: true, length: 2 })
  Sigla: string | null;
}

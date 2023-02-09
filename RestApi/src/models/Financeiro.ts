import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("financeiro", { schema: "johnnys_bakery" })
export class Financeiro {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "descricao", nullable: true, length: 255 })
  Descricao: string | null;

  @Column("decimal", { name: "valor", nullable: true, precision: 15, scale: 2 })
  Valor: string | null;

  @Column("varchar", { name: "tipo", nullable: true, length: 1 })
  Tipo: string | null;

  @Column("datetime", {
    name: "data_criacao",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  DataCriacao: Date | null;

  @Column("datetime", { name: "data_alteracao", nullable: true })
  DataAlteracao: Date | null;
}

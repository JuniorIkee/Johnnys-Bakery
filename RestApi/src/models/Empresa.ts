import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("empresa", { schema: "johnnys_bakery" })
export class Empresa {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("varchar", { name: "nome", nullable: true, length: 80 })
  Nome: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  Email: string | null;

  @Column("varchar", { name: "senha", nullable: true, length: 75 })
  Senha: string | null;

  @Column("decimal", {
    name: "margem_lucro_padrao",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  MargemLucroPadrao: string | null;

  @Column("datetime", {
    name: "data_criacao",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  DataCriacao: Date | null;

  @Column("datetime", { name: "data_alteracao", nullable: true })
  DataAlteracao: Date | null;

  @Column("bit", { name: "ativo", nullable: true })
  Ativo: boolean | null;
}

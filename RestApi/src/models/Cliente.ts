import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cliente", { schema: "johnnys_bakery" })
export class Cliente {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "nome", nullable: true, length: 80 })
  Nome: string | null;

  @Column("varchar", { name: "endereco_completo", nullable: true, length: 255 })
  EnderecoCompleto: string | null;

  @Column("varchar", { name: "cpf_cnpj", nullable: true, length: 20 })
  CpfCnpj: string | null;

  @Column("datetime", {
    name: "data_criacao",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  DataCriacao: Date | null;

  @Column("datetime", { name: "data_alteracao", nullable: true })
  DataAlteracao: Date | null;
}

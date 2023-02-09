import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReceitaProduto } from "./ReceitaProduto";

@Entity("receita", { schema: "johnnys_bakery" })
export class Receita {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("int", { primary: true, name: "id_empresa" })
  IdEmpresa: number;

  @Column("varchar", { name: "nome", nullable: true, length: 100 })
  Nome: string | null;

  @Column("time", { name: "tempo_preparo", nullable: true })
  TempoPreparo: string | null;

  @Column("datetime", {
    name: "data_criacao",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  DataCriacao: Date | null;

  @Column("datetime", { name: "data_alteracao", nullable: true })
  DataAlteracao: Date | null;

  @Column("text", { name: "observacoes", nullable: true })
  Observacoes: string | null;

  @Column("bit", { name: "ativo", nullable: true })
  Ativo: boolean | null;

  @OneToMany(
    () => ReceitaProduto,
    (ReceitaProduto) => ReceitaProduto.IdReceita2
  )
  ReceitaProdutos: ReceitaProduto[];

  IdEnc:string;
}

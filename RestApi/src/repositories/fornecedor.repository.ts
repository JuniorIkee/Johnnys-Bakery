import dataSource from "../databases/app.datasource";
import { Fornecedor } from "../models/Fornecedor";
import { Like, Repository } from "typeorm";


class FornecedorRepository {
    fornecedorRepository: Repository<Fornecedor>;

    constructor(){
        this.fornecedorRepository = dataSource.getRepository(Fornecedor);        
    }

    public async Gravar(registro : Fornecedor) : Promise<Fornecedor>{
        const fornecedor = this.fornecedorRepository.create(registro);

        await this.fornecedorRepository.save(fornecedor);
        
        return fornecedor;
    }

    public async Atualizar(registro : Fornecedor) : Promise<Fornecedor>{
        await this.fornecedorRepository.save(registro);
        return registro;
    }

    public async Carregar(id:number) : Promise<Fornecedor | null>{
        const fornecedor = await this.fornecedorRepository.findOne({ 
          where: { 
            Id: id 
          }
        });

        return fornecedor;
    }

    public async Listar(nome: string): Promise<Fornecedor[]> {
      const retorno = await this.fornecedorRepository.find({
        where:{
          Nome:Like(`%${nome}%`)
        }
      });      

      return retorno;
    }

    public async Excluir(id:number) : Promise<void> {
      await this.fornecedorRepository.delete({ Id: id });
    }

    public async Pesquisa(nome:string) : Promise<any>{
        const fornecedor = await this.fornecedorRepository.find()

        return fornecedor;
    }
}

export default FornecedorRepository;
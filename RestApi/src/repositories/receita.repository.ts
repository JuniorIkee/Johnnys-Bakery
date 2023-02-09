import dataSource from "../databases/app.datasource";
import { Receita } from "../models/Receita";
import { Like, Repository } from "typeorm";


class ReceitaRepository {
    receitaRepository: Repository<Receita>;

    constructor(){
        this.receitaRepository = dataSource.getRepository(Receita);        
    }

    public async Gravar(registro : Receita) : Promise<Receita>{
        const receita = this.receitaRepository.create(registro);

        await this.receitaRepository.save(receita);

        return receita;
    }

    public async Atualizar(registro : Receita) : Promise<Receita>{
        await this.receitaRepository.save(registro);
        
        return registro;
    }

    public async Carregar(id:number) : Promise<Receita | null>{
        const receita = await this.receitaRepository.findOne({ 
          where: { 
            Id: id 
          }
        });

        return receita;
    }

    public async Listar(): Promise<Receita[]> {
      const retorno = await this.receitaRepository.find();      

      return retorno;
    }

    public async Excluir(id:number) : Promise<void> {
      await this.receitaRepository.delete({ Id: id });
    }

    public async Pesquisa(nome:string) : Promise<any>{
        const receita = await this.receitaRepository.find()

        return receita;
    }
}

export default ReceitaRepository;
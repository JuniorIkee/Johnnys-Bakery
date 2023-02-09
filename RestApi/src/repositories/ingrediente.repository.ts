import dataSource from "../databases/app.datasource";
import { Ingrediente } from "../models/Ingrediente";
import { Like, Repository } from "typeorm";


class IngredienteRepository {
    ingredienteRepository: Repository<Ingrediente>;

    constructor(){
        this.ingredienteRepository = dataSource.getRepository(Ingrediente);        
    }

    public async Gravar(registro : Ingrediente) : Promise<Ingrediente>{
        const ingrediente = this.ingredienteRepository.create(registro);

        await this.ingredienteRepository.save(ingrediente);

        return ingrediente;
    }

    public async Atualizar(registro : Ingrediente) : Promise<Ingrediente>{
        await this.ingredienteRepository.save(registro);
        
        return registro;
    }

    public async Carregar(id:number) : Promise<Ingrediente | null>{
        const ingrediente = await this.ingredienteRepository.findOne({ 
          where: { 
            Id: id 
          }
        });

        return ingrediente;
    }

    public async Listar(nome: string): Promise<Ingrediente[]> {
      const retorno = await this.ingredienteRepository.find({
        where:{
          Nome:Like(`%${nome}%`)
        }
      });      

      return retorno;
    }

    public async Excluir(id:number) : Promise<void> {
      await this.ingredienteRepository.delete({ Id: id });
    }

    public async Pesquisa(nome:string) : Promise<any>{
        const ingrediente = await this.ingredienteRepository.find()

        return ingrediente;
    }
}

export default IngredienteRepository;
import dataSource from "../databases/app.datasource";
import { Marca } from "../models/Marca";
import { Like, Repository } from "typeorm";


class MarcaRepository {
    marcaRepository: Repository<Marca>;

    constructor(){
        this.marcaRepository = dataSource.getRepository(Marca);        
    }

    public async Gravar(registro : Marca) : Promise<Marca>{
        const marca = this.marcaRepository.create(registro);
        await this.marcaRepository.save(marca);
        return marca;
    }

    public async Atualizar(registro : Marca) : Promise<Marca>{
        await this.marcaRepository.save(registro);
        return registro;
    }

    public async Carregar(id:number) : Promise<Marca | null>{
        const marca = await this.marcaRepository.findOne({ 
          where: { 
            Id: id 
          }
        });

        return marca;
    }

    public async Listar(nome: string): Promise<Marca[]> {
      const retorno = await this.marcaRepository.find({
        where:{
          Nome:Like(`%${nome}%`)
        }
      });      

      return retorno;
    }

    public async Excluir(id:number) : Promise<void> {
      await this.marcaRepository.delete({ Id: id });
    }

    public async Pesquisa(nome:string) : Promise<any>{
        const marca = await this.marcaRepository.find()

        return marca;
    }
}

export default MarcaRepository;
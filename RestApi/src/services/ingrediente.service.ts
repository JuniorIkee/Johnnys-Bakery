import { ListaCompras } from "../classes/lista-compras";
import AppError from "../errors/app.error";
import { Ingrediente } from "../models/Ingrediente";
import IngredienteRepository from '../repositories/ingrediente.repository';

class IngredienteService {

    ingredienteRepository: IngredienteRepository 

    constructor() {
        this.ingredienteRepository = new IngredienteRepository();
    }

    public async Gravar(registro : Ingrediente): Promise<string> {
        let ingrediente;
        
        registro.IdEmpresa = 1;

        if(!registro) throw new AppError("Registro vazio", 400);
        
        if(registro.IdEnc) {
            registro.Id = + (await ListaCompras.Decriptar(registro.IdEnc));

            ingrediente  = await this.ingredienteRepository.Atualizar(registro).catch(error => {
                console.log(error);
            });
        }
        else {
            ingrediente  = await this.ingredienteRepository.Gravar(registro).catch(error => {
                console.log(error);
            });
        }

        if(!ingrediente){
            throw new AppError("Erro ao gravar/atualizar Data Disponível", 400);
        }

        return await ListaCompras.Encriptar(ingrediente.Id.toString());
    }    

    public async Carregar(idEnc:string) : Promise<Ingrediente>{
        const id = await ListaCompras.Decriptar(idEnc);
        const ingrediente = await this.ingredienteRepository.Carregar(+id);

        if (!ingrediente) {
            throw new AppError("Nenhum registro foi encontrado",400);
        }        

        return ingrediente;
    }

    public async Listar(nome: string){
        try{
            const retorno = await this.ingredienteRepository.Listar(nome);
            
            retorno.forEach(async item => {
                item.IdEnc = await  ListaCompras.Encriptar(item.Id.toString());
            });

            return retorno;
        }
        catch(error){
            console.log(error);
        }
    }

    public async Excluir(idEnc: string): Promise<void> {
        const id = await ListaCompras.Decriptar(idEnc);

        await this.ingredienteRepository.Excluir(+id);
    }
}

export default IngredienteService;

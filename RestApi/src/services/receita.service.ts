import { ListaCompras } from "../classes/lista-compras";
import AppError from "../errors/app.error";
import { Receita } from "../models/Receita";
import ReceitaRepository from '../repositories/receita.repository';

class ReceitaService {

    receitaRepository: ReceitaRepository 

    constructor() {
        this.receitaRepository = new ReceitaRepository();
    }

    public async Gravar(registro : Receita): Promise<string> {
        let receita;
        
        if(!registro) throw new AppError("Registro vazio", 400);

        if(registro.IdEnc) {
            receita  = await this.receitaRepository.Atualizar(registro);
        }
        else {
            receita  = await this.receitaRepository.Gravar(registro);
        }

        if(!receita){
            throw new AppError("Erro ao gravar/atualizar Data Disponível", 400);
        }

        return await ListaCompras.Encriptar(receita.Id.toString());
    }    

    public async Carregar(idEnc:string) : Promise<Receita>{
        const id = await ListaCompras.Decriptar(idEnc);
        const receita = await this.receitaRepository.Carregar(+id);

        if (!receita) {
            throw new AppError("Nenhum registro foi encontrado",400);
        }        

        return receita;
    }

    public async Listar(){
        try{
            const retorno = await this.receitaRepository.Listar();
            return retorno;
        }
        catch(error){
            console.log(error);
        }
    }

    public async Excluir(idEnc: string): Promise<void> {
        const id = await ListaCompras.Decriptar(idEnc);

        await this.receitaRepository.Excluir(+id);
    }
}

export default ReceitaService;

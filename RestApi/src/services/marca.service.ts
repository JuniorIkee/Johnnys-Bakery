import { ListaCompras } from "../classes/lista-compras";
import AppError from "../errors/app.error";
import { Marca } from "../models/Marca";
import MarcaRepository from '../repositories/marca.repository';

class MarcaService {

    marcaRepository: MarcaRepository 

    constructor() {
        this.marcaRepository = new MarcaRepository();
    }

    public async Gravar(registro : Marca): Promise<string> {
        let marca;
        
        registro.IdEmpresa = 1;

        if(!registro) throw new AppError("Registro vazio", 400);
        
        if(registro.IdEnc) {
            registro.Id = + (await ListaCompras.Decriptar(registro.IdEnc));

            marca  = await this.marcaRepository.Atualizar(registro).catch(error => {
                console.log(error);
            });
        }
        else {
            marca  = await this.marcaRepository.Gravar(registro).catch(error => {
                console.log(error);
            });
        }

        if(!marca){
            throw new AppError("Erro ao gravar/atualizar Data Disponível", 400);
        }

        return await ListaCompras.Encriptar(marca.Id.toString());
    }    

    public async Carregar(idEnc:string) : Promise<Marca>{
        const id = await ListaCompras.Decriptar(idEnc);
        const marca = await this.marcaRepository.Carregar(+id);

        if (!marca) {
            throw new AppError("Nenhum registro foi encontrado",400);
        }        

        return marca;
    }

    public async Listar(nome: string){
        try{
            const retorno = await this.marcaRepository.Listar(nome);
            
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

        await this.marcaRepository.Excluir(+id);
    }
}

export default MarcaService;

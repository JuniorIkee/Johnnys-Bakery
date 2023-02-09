import { ListaCompras } from "../classes/lista-compras";
import AppError from "../errors/app.error";
import { Fornecedor } from "../models/Fornecedor";
import FornecedorRepository from '../repositories/fornecedor.repository';

class FornecedorService {

    fornecedorRepository: FornecedorRepository 

    constructor() {
        this.fornecedorRepository = new FornecedorRepository();
    }

    public async Gravar(registro : Fornecedor): Promise<string> {
        let fornecedor;
        
        registro.IdEmpresa = 1;

        if(!registro) throw new AppError("Registro vazio", 400);
        
        if(registro.IdEnc) {
            registro.Id = + (await ListaCompras.Decriptar(registro.IdEnc));

            fornecedor  = await this.fornecedorRepository.Atualizar(registro).catch(error => {
                console.log(error);
            });
        }
        else {
            fornecedor  = await this.fornecedorRepository.Gravar(registro).catch(error => {
                console.log(error);
            });
        }

        if(!fornecedor){
            throw new AppError("Erro ao gravar/atualizar Data Disponível", 400);
        }

        return await ListaCompras.Encriptar(fornecedor.Id.toString());
    }    

    public async Carregar(idEnc:string) : Promise<Fornecedor>{
        const id = await ListaCompras.Decriptar(idEnc);
        const fornecedor = await this.fornecedorRepository.Carregar(+id);

        if (!fornecedor) {
            throw new AppError("Nenhum registro foi encontrado",400);
        }        

        return fornecedor;
    }

    public async Listar(nome: string){
        try{
            const retorno = await this.fornecedorRepository.Listar(nome);
            
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

        await this.fornecedorRepository.Excluir(+id);
    }
}

export default FornecedorService;

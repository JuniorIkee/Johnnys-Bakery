import * as crypto from 'crypto';

export class ListaCompras {

    public static CRYPTO_ALGORITMO = 'aes-192-cbc';

    public static CRYPTO_SENHA = '3zTvzr3p67VC61jmV54rIYu1545x4TlY';


    public static async gerarHash(valor: string): Promise<any> {
        return crypto.createHash('md5').update(valor).digest('hex');
    }
    
    public static async Encriptar(id: string): Promise<string> {
        const key = crypto.scryptSync(this.CRYPTO_SENHA, 'salt', 24);

        const iv = Buffer.alloc(16, 0);

        const cifra = crypto.createCipheriv(this.CRYPTO_ALGORITMO, key, iv);

        const cifr = cifra.update(id, 'utf8', 'hex') + cifra.final('hex');

        return cifr;
    }

    public static async Decriptar(idEnc: string): Promise<string> {
        const key = crypto.scryptSync(this.CRYPTO_SENHA, 'salt', 24);

        const iv = Buffer.alloc(16, 0);

        const cifra = crypto.createDecipheriv(this.CRYPTO_ALGORITMO, key, iv);

        const decr = cifra.update(idEnc, 'hex', 'utf8') + cifra.final('utf8');

        return decr;
    }

    public static async DataTableFormatar(
        data: any,
        pagina: number,
        tamanhoPagina: number,
        qtdTotal: number,
        columnName: string,
        direcaoOrder: string,
      ): Promise<Record<string, any>> {
        let strJSON = null;
        const retorno = [];
        let ini = 0;
        let fim = 0;
    
        strJSON = `{`;
        strJSON += `"page": "${pagina}",`;
        strJSON += `"perpage": "${tamanhoPagina}",`;
        strJSON += `"recordsFiltered": "${qtdTotal}",`;
        strJSON += `"recordsTotal": "${qtdTotal}",`;
    
        strJSON += direcaoOrder ? `"sort": "${direcaoOrder}",` : `"sort": "",`;
        strJSON += columnName ? `"field": "${columnName}",` : `"field": "",`;
    
        if (pagina > 0) {
          pagina = pagina / tamanhoPagina + 1;
        } else {
          pagina = 1;
        }
    
        if (pagina > 1) {
          fim = pagina * tamanhoPagina;
          ini = fim - tamanhoPagina + 1;
        } else {
          ini = 1;
          fim = tamanhoPagina;
        }
    
        for (let i = ini; i <= fim; i++) {
          if (data[i - 1]) {
            retorno.push(data[i - 1]);
          }
        }
    
        await retorno.forEach(async (item: any) => {
          if (item.Id) {
            item.IdEnc = await this.Encriptar(item.Id.toString());
          }
    
          if (item.Senha) {
            delete item.Senha;
          }
        });
    
        strJSON += `"data":${JSON.stringify(retorno)}`;
        strJSON += '}';
    
        return JSON.parse(strJSON);
      }
}
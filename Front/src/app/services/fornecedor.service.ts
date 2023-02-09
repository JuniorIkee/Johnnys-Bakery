import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { AxiosService } from './axios.service';
import Fornecedor from "../models/fornecedor";

@Injectable({
  providedIn: "root",
})
export class FornecedorService {
  axiosServ: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axiosServ = this.axiosService.Criar();
  }

  Listar(filtro: string): Promise<AxiosResponse> {
    return this.axiosServ.get("fornecedor/listar/" + filtro);
  }

  Gravar(registro:Fornecedor): Promise<AxiosResponse> {
    return this.axiosServ.post("fornecedor/gravar", registro);
  }

  Carregar(idEnc:string): Promise<AxiosResponse<Fornecedor>> {
    return this.axiosServ.get("fornecedor/carregar/" + idEnc);
  }

  Excluir(idEnc:string): Promise<AxiosResponse> {
    return this.axiosServ.delete("fornecedor/excluir/" + idEnc);
  }
}

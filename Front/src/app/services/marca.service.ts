import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { AxiosService } from './axios.service';
import Marca from "../models/marca";

@Injectable({
  providedIn: "root",
})
export class MarcaService {
  axiosServ: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axiosServ = this.axiosService.Criar();
  }

  Listar(filtro: string): Promise<AxiosResponse> {
    return this.axiosServ.get("marca/listar/" + filtro);
  }

  Gravar(registro:Marca): Promise<AxiosResponse> {
    return this.axiosServ.post("marca/gravar", registro);
  }

  Carregar(idEnc:string): Promise<AxiosResponse<Marca>> {
    return this.axiosServ.get("marca/carregar/" + idEnc);
  }

  Excluir(idEnc:string): Promise<AxiosResponse> {
    return this.axiosServ.delete("marca/excluir/" + idEnc);
  }
}

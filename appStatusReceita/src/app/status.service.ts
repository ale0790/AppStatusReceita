import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StatusService {
  statusUrl = "http://localhost:8080/estados/status";
  statusEstadoUrl = "http://localhost:8080/estados/status?estado=";
  statusEstadoDataUrl = "http://localhost:8080/estados/data?dataConsulta=";
  estadoIndisponivelUrl = "http://localhost:8080/estados/indisponibilidade";
  estadoListUrl = "http://localhost:8080/estados";

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.statusUrl}`);
  }

  listarSituacaoEstado(parametro: string) {
    return this.http.get<any[]>(`${this.statusEstadoUrl + parametro}`);
  }

  listarEstadoData(parametro: any) {
    return this.http.get<any[]>(`${this.statusEstadoDataUrl + parametro}`);
  }

  listarEstadoIndisponibilidade() {
    return this.http.get<any[]>(`${this.estadoIndisponivelUrl}`);
  }

  listarEstados() {
    return this.http.get<any[]>(`${this.estadoListUrl}`);
  }


  
}

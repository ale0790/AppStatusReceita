import { StatusService } from './../status.service';
import { Component, OnInit } from "@angular/core";


interface Estado {
  name: string,
  code: string
}

@Component({
  selector: "app-status-estado",
  templateUrl: "./status-estado.component.html",
  styleUrls: ["./status-estado.component.sass"],
})
export class StatusEstadoComponent implements OnInit {
  estados!: Estado[];
  selectedEstado: string = '';
  resultadoEstado: any;

  constructor(private statuService: StatusService) {
   
  }

  onChangeEstado(event: any) {
    this.listarEstado(event.value);
  }

  ngOnInit(): void {
   this.carregaEstadosDropDown();
  }

  carregaEstadosDropDown(){
    this.statuService.listarEstados().subscribe(dados => this.estados = dados);
  }

  listarEstado(parametro : any){
    this.statuService.listarSituacaoEstado(parametro).subscribe(dados => this.resultadoEstado = dados);
  }
}

import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-estado-indisponibilidade',
  templateUrl: './estado-indisponibilidade.component.html',
  styleUrls: ['./estado-indisponibilidade.component.sass']
})
export class EstadoIndisponibilidadeComponent implements OnInit {

  resultadoIndisponibilidade: any;

  constructor(private statuService: StatusService) {
    this.listarEstadoMaiorIndisponibilidade();
  }

  ngOnInit(): void {
  }

  listarEstadoMaiorIndisponibilidade() {
    this.statuService
      .listarEstadoIndisponibilidade()
      .subscribe((dados) => (this.resultadoIndisponibilidade = dados));
  }

}

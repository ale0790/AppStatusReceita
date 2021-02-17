import { StatusService } from "./../status.service";
import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common'

@Component({
  selector: "app-status-estado-data",
  templateUrl: "./status-estado-data.component.html",
  styleUrls: ["./status-estado-data.component.sass"],
})
export class StatusEstadoDataComponent implements OnInit {
  selectedDate!: Date;
  statusEstadoData: Array<any> = [];
  dataConvertida!: string;
  constructor(private statuService: StatusService, public datepipe: DatePipe) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    this.listarEstadoData(event);
  }

  listarEstadoData(parametro: any) {
    this.statuService
      .listarEstadoData(this.datepipe.transform(parametro, 'dd-MM-yyyy'))
      .subscribe((dados) => (this.statusEstadoData = dados));
  }
}

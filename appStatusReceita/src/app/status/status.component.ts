import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {


  status: Array<any> = [];

  constructor(private statuService: StatusService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.statuService.listar().subscribe(dados => this.status = dados);
  }

}

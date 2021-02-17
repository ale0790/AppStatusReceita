import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';
    for(let v of values){
      result += this.getPalavraComPrimeiraLetraMaiscula(v)+ ' ';
    }
    return result;
  }

  getPalavraComPrimeiraLetraMaiscula(value: string){ 
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }

}

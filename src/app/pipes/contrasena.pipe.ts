import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(contra:string, value:boolean = false): string {


    if(value){

      return contra;
    }
    else{
      let salida:string = "";
      for(let i=0; i<contra.length; i++){
        salida+="*";
      }
      return salida;

     }
  }

}

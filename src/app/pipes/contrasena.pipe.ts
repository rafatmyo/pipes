import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): any {

    let password_format = value;
    let length_password = value.length;
    if(activar){
      password_format = '*'.repeat(length_password);
    }else{
      password_format = value;
    }
    return password_format;
  }

}

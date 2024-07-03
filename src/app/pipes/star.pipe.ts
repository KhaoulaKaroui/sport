import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(ch: string): any {
    let  V = ["a", "e", "u", "i", "o", "y"];
    let result = "";
    for (let i = 0; i < ch.length; i++) {
       let x = ch[i];
        for (let j = 0; j < V.length; j++) {
            if (ch[i].toLowerCase() == V[j]) {
                x = "*";
                break;
            }
        }
       // result = result + x;
       result += x ;
    }
    return result;
  }

}

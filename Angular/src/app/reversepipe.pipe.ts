import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // let newStr:string="";
    // for(var i=value.length-1;i>=0;i--)
    // {
    //   newStr+=value.charAt(i);
    // }
    // return newStr ;
    //   if(value=="stupid"||value=="idiot"||value=="rascal")
    //   return true;
    //         else
    // return false;
    if(args.length>0)
    if(args[0]=="uppercase" &&args[1]==1001)
    {
      return value.toUppercase();
    }
  }
}

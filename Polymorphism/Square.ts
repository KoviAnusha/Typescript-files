import {shape} from './Shape'
import {rectangle} from './Rect'
export class square extends rectangle implements shape{
    length:number;
    constructor(length)
    {
        super(length,length);
    }
    
    area()
    {
        console.log("area of square= "+(this.length*this.length));
    }
    draw()
    {
        console.log("square calculating.........");
    }
}
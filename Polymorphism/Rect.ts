import {shape} from './Shape'
export class rectangle implements shape
{
    length:number;
    breadth:number;
    constructor(length:number,breadth:number)
    {
        this.length=length;
        this.breadth=breadth;
    }
    area()
    {
        console.log("area of rectangle= "+(this.length*this.breadth));
    }
    draw()
    {
        console.log("rectangle calculating.........");
    }
}
import {shape} from './Shape'
export class circle implements shape
{
    radius:number;
    constructor(radius:number)
    {
        this.radius=radius;
    }
    area()
    {
        console.log("area of circle= "+(3.14*this.radius*this.radius));
    }
    draw()
    {
        console.log("circle calculating.........");
    }
}
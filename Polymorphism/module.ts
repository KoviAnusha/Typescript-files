import {shape} from './Shape'
import {circle} from './circle'
import {square} from './Square'
import {rectangle} from './Rect'

var c=new circle(5);
c.draw();
c.area();
var d=new rectangle(3,4);
d.draw();
d.area();
var s=new square(4);
s.draw();
s.area();
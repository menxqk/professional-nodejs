const Circle = require('./circle');

var myCircle = Circle(1, 2, 3);
console.log(myCircle.toString());
console.log(myCircle.area());
console.log();


const Rect = require('./rect/rect_class');
var myRect = Rect(2, 4);
console.log(myRect.toString());
console.log(myRect.area());
console.log()

const Triangle = require('./triangle');
var myTriangle = Triangle(10, 3);
console.log(myTriangle.toString());
console.log(myTriangle.area());
console.log()

const Sphere = require('./sphere');
var mySphere = Sphere(1 / 2);
console.log(mySphere.toString());
console.log(mySphere.area());

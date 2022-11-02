import { Result } from "postcss";

class Circle {
  constructor(g, f, c) {
    this.g = g;
    this.f = f;
    this.c = c;
  }

  cenAndrad(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;
    let a = c1 * c1;
    let b = c2 * c2;
    let r = Math.sqrt(Number(a) + Number(b) - Number(c));

    return [c1, c2, r];
  }

  eqFromCR(c1, c2, r) {
    let g = -2 * c1;
    let f = -2 * c2;
    let c = c1 * c1 + c2 * c2 - r * r;
    return [g, f, c];
  }

  gentostand(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;
    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);
    let r2 = r * r;

    return [c1, c2, r2];
  }

  eqfromPC(ax, ay, x, y) {
    let a = ax - x;
    let b = ay - y;
    let r = Math.sqrt(a * a + b * b);
    let c = x * x + y * y + r * r;
    let g = -2 * x;
    let f = -2 * y;

    return [g, f, c];
  }
  lengthXY(g, f, c) {
    let a = g / 2;
    let b = f / 2;
    let x = 2 * Math.sqrt(a * a - c);
    let y = 2 * Math.sqrt(b * b - c);

    return [x, y];
  }
  parametriceq(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);

    return [c1,c2,r]
  }

  powerofpoint(x,y,g,f,c){

  }
 lengthoftangent(x,y,g,f,c){
  let a = Math.sqrt((x*x) + (y*y) + (g*x) + (f*y) + c);
	let m = x + (-g/2);
	let n = y + (-f/2);
	let l = ((-g/2) * x) + ((-f/2) * y) + c;

  return [a,m,n,l]
 }
}

export default Circle;

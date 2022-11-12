
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

    return [c1.toFixed(3), c2.toFixed(3), r.toFixed(3)];
  }

  eqFromCR(c1, c2, r) {
    let g = -2 * c1;
    let f = -2 * c2;
    let c = c1 * c1 + c2 * c2 - r * r;
    return [g.toFixed(3), f.toFixed(3), c.toFixed(3)];
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
    let c = x * x + y * y - r * r;
    let g = -2 * x;
    let f = -2 * y;

    return [g, f, c];
  }
  lengthXY(g, f, c) {
    let a = g / 2;
    let b = f / 2;
    let x = 2 * Math.sqrt(Number(a * a) - Number(c));
    let y = 2 * Math.sqrt(Number(b * b) - Number(c));

    return [x.toFixed(2), y.toFixed(2)];
  }
  parametriceq(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);

    return [c1.toFixed(3), c2.toFixed(3), r.toFixed(3)];
  }

  powerofpoint(x, y, g, f, c) {
    let a = (x * x) + (y * y) + (g * x) + (f * y) + Number(c);
    return (a)

  }
  lengthoftangent(x, y, g, f, c) {
    let a = Math.sqrt((Number(x) * Number(x)) + (Number(y) * Number(y)) + (Number(g) * Number(x)) + (Number(f) * Number(y)) + Number(c)); 

    return [a];
  }

  eqnoftangent(x, y, g, f, c)
  {
    let m = Number(x) + (Number(g) / 2);
    let n = Number(y) + (Number(f) / 2);
    let l = ((Number(g) / 2) * Number(x)) + ((Number(f) / 2) * Number(y)) + Number(c);


    let o = -(-n*x) - (m*y);

    return [m, n, l, o];
  }
  areacircum(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);

    let area = Math.PI * r * r;
    let circum = 2 * Math.PI *r;


    return [area.toFixed(2), circum.toFixed(2)];
}


}

export default Circle;

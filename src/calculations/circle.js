class Circle {
  constructor(ax, ay, bx, by, g, f, c, g1, f1, c1) {
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    this.g = g;
    this.f = f;
    this.c = c;
    this.g1 = g1;
    this.f1 = f1;
    this.c1 = c1
  }

  cenAndrad(g, f, c) {
    let c1,c2,r;
      if(g===0 && f===0)
      {
        c1 =0;
        c2 =0;
        r = -1 * Math.sqrt(c)
      }
      else
      {
        c1 = -g / 2;
        c2 = -f / 2;
        let a = c1 * c1;
        let b = c2 * c2;
        r = Math.sqrt(Number(a) + Number(b) - Number(c));
  
      }
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
    let a = x * x + y * y + g * x + f * y + Number(c);
    return a;
  }
  lengthoftangent(x, y, g, f, c) {
    let a = Math.sqrt(
      Number(x) * Number(x) +
        Number(y) * Number(y) +
        Number(g) * Number(x) +
        Number(f) * Number(y) +
        Number(c)
    );

    return [a];
  }

  eqnoftangent(x, y, g, f, c) {
    let m = Number(x) + Number(g) / 2;
    let n = Number(y) + Number(f) / 2;
    let l =
      (Number(g) / 2) * Number(x) + (Number(f) / 2) * Number(y) + Number(c);

    let o = -(-n * x) - m * y;

    return [m, n, l, o];
  }
  areacircum(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);

    let area = Math.PI * r * r;
    let circum = 2 * Math.PI * r;

    return [area.toFixed(2), circum.toFixed(2)];
  }

  checkconjugate(ax, ay, bx, by, g, f, c) {
    let a =
      Number(ax) * Number(bx) +
      (Number(by) * Number(ay) +
        Number(g / 2) * (Number(ax) + Number(ay)) +
        Number(f / 2) * (Number(bx) + Number(by)) +
        Number(c));
    return [a];
  }

  nopointstangents(g,f,c,g1,f1,c1) 
  {
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);
  
      return result.toFixed(2);
    }

    function cenAndrad(g, f, c) {
      let c1,c2,r;
      if(g===0 && f===0)
      {
        c1 =0;
        c2 =0;
        // r = Math.sqrt(Math.abs(c))
        r =2
      }
      else
      {
        c1 = -g / 2;
        c2 = -f / 2;
        let a = c1 * c1;
        let b = c2 * c2;
        r = Math.sqrt(Number(a) + Number(b) - Number(c));
  
      }
      return [c1.toFixed(3), c2.toFixed(3), r.toFixed(3)];
    }

    let C1 = cenAndrad(g,f,c);
    let C2 = cenAndrad(g1,f1,c1);
    
    let C1C2 = Number(distance(C1[0],C1[1],C2[0],C2[1]));

    let r1r2 = Number(C1[2]) + Number(C2[2]);
    let a = Math.abs(r1r2);
    let R1R2 = Number(C1[2]) - Number(C2[2]);
    let a2 = Math.abs(R1R2);
     return[C1C2.toFixed(2), a.toFixed(2), a2.toFixed(2)];

  }
}

export default Circle;

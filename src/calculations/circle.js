class Circle {
  constructor(a, b, ax, ay, bx, by, g, f, c, g1, f1, c1) {
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    this.g = g;
    this.f = f;
    this.c = c;
    this.g1 = g1;
    this.f1 = f1;
    this.c1 = c1;
    this.a = a;
    this.b = b;
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
    return [Number(g.toFixed(3)), Number(f.toFixed(3)), Number(c.toFixed(3))];
  }

  gentostand(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;
    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);
    let r2 = r * r;

    return [
      Number(c1.toFixed(2)),
      Number(c2.toFixed(2)),
      Number(r2.toFixed(2)),
    ];
  }

  eqfromPC(ax, ay, x, y) {
    let a = ax - x;
    let b = ay - y;
    let r = Math.sqrt(a * a + b * b);
    let c = x * x + y * y - r * r;
    let g = -2 * x;
    let f = -2 * y;
    return [Number(g.toFixed(3)), Number(f.toFixed(3)), Number(c.toFixed(3))];
  }
  lengthXY(g, f, c) {
    let a = g / 2;
    let b = f / 2;
    let x = 2 * Math.sqrt(Number(a * a) - Number(c));
    let y = 2 * Math.sqrt(Number(b * b) - Number(c));

    return [Number(x.toFixed(2)), Number(y.toFixed(2))];
  }
  parametriceq(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);

    return [Number(c1.toFixed(3)), Number(c2.toFixed(3)), Number(r.toFixed(3))];
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

    return [Number(a.toFixed(2))];
  }

  eqnoftangent(x, y, g, f, c) {
    let m = Number(x) + Number(g) / 2;
    let n = Number(y) + Number(f) / 2;
    let l =
      (Number(g) / 2) * Number(x) + (Number(f) / 2) * Number(y) + Number(c);

    let o = -(-n * x) - m * y;

    return [
      Number(m.toFixed(2)),
      Number(n.toFixed(2)),
      Number(l.toFixed(2)),
      Number(o.toFixed(2)),
    ];
  }
  areacircum(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(c1 * c1 + c2 * c2 - c);

    let area = Math.PI * r * r;
    let circum = 2 * Math.PI * r;

    return [Number(area.toFixed(2)), Number(circum.toFixed(2))];
  }

  checkconjugate(ax, ay, bx, by, g, f, c) {
    let a =
      Number(ax) * Number(bx) +
      (Number(by) * Number(ay) +
        Number(g / 2) * (Number(ax) + Number(ay)) +
        Number(f / 2) * (Number(bx) + Number(by)) +
        Number(c));
    return [Number(a.toFixed(2))];
  }

  nopointstangents(g, f, c, g1, f1, c1) {
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);

      return result.toFixed(2);
    }

    function cenAndrad(g, f, c) {
      let c1 = -g / 2;
      let c2 = -f / 2;
      let a = c1 * c1;
      let b = c2 * c2;
      let r = Math.sqrt(Number(a) + Number(b) - Number(c));

      return [c1.toFixed(3), c2.toFixed(3), r.toFixed(3)];
    }

    let C1 = cenAndrad(g, f, c);
    let C2 = cenAndrad(g1, f1, c1);

    let C1C2 = Number(distance(C1[0], C1[1], C2[0], C2[1]));

    let r1r2 = Number(C1[2]) + Number(C2[2]);
    let R1R2 = Number(C1[2]) - Number(C2[2]);
    return [
      C1C2.toFixed(2),
      Math.abs(r1r2.toFixed(2)),
      Math.abs(R1R2.toFixed(2)),
    ];
  }

  poleofline(a, b, c, g1, f1, c1) {
    function radius(g, f, c) {
      let c1, c2, r;
      if (g === 0 && f === 0) {
        r = Math.sqrt(Math.abs(c));
      } else {
        c1 = -g / 2;
        c2 = -f / 2;
        let a = c1 * c1;
        let b = c2 * c2;
        r = Math.sqrt(Number(a) + Number(b) - Number(c));
      }
      return [r.toFixed(3)];
    }

    let C = radius(g1, f1, c1);

    let g = g1 / 2;
    let f = f1 / 2;

    let deno = Number(a) * Number(g) + Number(b) * Number(f) - Number(c);

    let numx = Number(a) * Number(C[0]) * Number(C[0]);
    let numy = Number(b) * Number(C[0]) * Number(C[0]);

    let px = -g + Number(numx) / Number(deno);
    let py = -f + Number(numy) / Number(deno);

    return [px.toFixed(2), py.toFixed(2)];
  }

  threepointcircle(x1, y1, x2, y2, x3, y3) {
    var x12 = x1 - x2;
    var x13 = x1 - x3;

    var y12 = y1 - y2;
    var y13 = y1 - y3;

    var y31 = y3 - y1;
    var y21 = y2 - y1;

    var x31 = x3 - x1;
    var x21 = x2 - x1;

    var sx13 = Math.pow(x1, 2) - Math.pow(x3, 2);

    var sy13 = Math.pow(y1, 2) - Math.pow(y3, 2);

    var sx21 = Math.pow(x2, 2) - Math.pow(x1, 2);
    var sy21 = Math.pow(y2, 2) - Math.pow(y1, 2);

    var f =
      (sx13 * x12 + sy13 * x12 + sx21 * x13 + sy21 * x13) /
      (2 * (y31 * x12 - y21 * x13));
    var g =
      (sx13 * y12 + sy13 * y12 + sx21 * y13 + sy21 * y13) /
      (2 * (x31 * y12 - x21 * y13));

    var c = -Math.pow(x1, 2) - Math.pow(y1, 2) - 2 * g * x1 - 2 * f * y1;

    var h = -g;
    var k = -f;
    var sqr_of_r = h * h + k * k - c;
    
    var r = Math.sqrt(sqr_of_r);

    function eqFromCR(c1, c2, r) {
      let g = -2 * c1;
      let f = -2 * c2;
      let c = c1 * c1 + c2 * c2 - r * r;
      return [Number(g.toFixed(3)), Number(f.toFixed(3)), Number(c.toFixed(3))];
    }

    let res = eqFromCR(h, k, r);

    return [res[0], res[1], res[2]];
  }
}

export default Circle;

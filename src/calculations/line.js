class Line {
  constructor(ax, ay, bx, by, a1, b1, c1, a2, b2, c2, m, a, b, h, g, f, c) {
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    this.a1 = a1;
    this.b1 = b1;
    this.c1 = c1;
    this.a2 = a2;
    this.b2 = b2;
    this.c2 = c2;
    this.m = m;
    this.a = a;
    this.b = b;
    this.h = h;
    this.f = f;
    this.g = g;
    this.c = c;
  }

  distance(ax, ay, bx, by) {
    let first = Number(ax) - Number(bx);
    let second = Number(ay) - Number(by);
    let result = Math.sqrt(first * first + second * second);

    return Number(result.toFixed(2));
  }
  slope(ax, ay, bx, by) {
    let first = Number(by) - Number(ay);
    let second = Number(bx) - Number(ax);
    let result = first / second;

    return Number(result.toFixed(2));
  }

  pointOfint(a1, b1, c1, a2, b2, c2) {
    let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
    let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

    return [Number(x.toFixed()), Number(y.toFixed(2))];
  }

  intercepts(a1, b1, c1) {
    let xint = -c1 / a1;
    let yint = -c1 / b1;

    return [Number(xint.toFixed(2)), Number(yint.toFixed(2))];
  }
  bisector(ax, ay, bx, by) {
    let m1 = (Number(ax) + Number(bx)) / 2;
    let m2 = (Number(ay) + Number(by)) / 2;

    let a = (Number(by) - Number(ay)) / (Number(bx) - Number(ax));
    let m = -1 / a;
    let b = m2 - m * m1;
    if (ax - bx === 0) {
      b = (Number(ay) + Number(by)) / 2;
    }
    if (ay - by === 0) {
      b = (Number(ax) + Number(bx)) / 2;
    }

    return [Number(m.toFixed(2)), b.toFixed(2)];
  }
  twopointform(ax, ay, bx, by) {
    let m = (Number(by) - Number(ay)) / (Number(bx) - Number(ax));
    let c = ay - m * ax;

    return [Number(m.toFixed(2)), Number(c.toFixed(2))];
  }
  pointslopeform(m, ax, ay) {
    let c = Number(ay) - Number(m) * Number(ax);

    return [m,Number(c.toFixed(2))];
  }

  imageofpoint(ax, ay, a1, b1, c1) {
    let a = -2 * (Number(ax * a1) + Number(ay * b1) + Number(c1));
    let b = Number(a1 * a1) + Number(b1 * b1);
    let c = Number(a / b);

    let h = c * a1 + Number(ax);
    let k = c * b1 + Number(ay);

    return [Number(h.toFixed(2)), Number(k.toFixed(2))];
  }

  footofperpendicular(ax, ay, a1, b1, c1) {
    let a = -1 * (Number(ax * a1) + Number(ay * b1) + Number(c1));
    let b = Number(a1 * a1) + Number(b1 * b1);
    let c = Number(a / b);

    let h = c * a1 + Number(ax);
    let k = c * b1 + Number(ay);

    return [Number(h.toFixed(2)), Number(k.toFixed(2))];
  }

  perpendiculardist(ax, ay, a1, b1, c1) {
    let a = Math.abs(Number(ax * a1) + Number(ay * b1) + Number(c1));
    let b = Math.sqrt(Number(a1 * a1) + Number(b1 * b1));

    let d = Number(a / b);

    return [Number(d.toFixed(2))];
  }

  anglebwlines(a1, b1, c1, a2, b2, c2) {
    let a = Math.abs(Number(a2) * Number(b1) - Number(a1) * Number(b2));
    let b = Math.abs(Number(a2) * Number(a1) + Number(b1) * Number(b2));

    let c = a / b;

    let d = Math.atan(c);

    let x = d * (180 / Math.PI);

    return [Number(c.toFixed(2)), Number(x.toFixed(2))];
  }

  paralinesdist(a1, b1, c1, a2, b2, c2) {
    if (a1 / b1 === a2 / b2) {
      let a = Math.abs(c1 - c2);
      let b = Math.sqrt(a1 * a1 + b1 * b1);

      let c = a / b;

      return [Number(c.toFixed(2))];
    }
  }

  distancepairpara(a, h, b, g, f, c) {
    let l = (g / 2) * (g / 2) - a * c;
    let m = a * (Number(a) + Number(b));
    let n = 2 * Math.sqrt(l / m);

    return [Number(n.toFixed(2))];
  }

  anglebwpairlines(a, h, b, g, f, c) {
    let a1 = Math.abs(Number(a) + Number(b));
    let a2 = Math.sqrt(
      (Number(a) - Number(b)) * (Number(a) - Number(b)) + 2 * h * h
    );

    let a3 = a1 / a2;

    let d = Math.acos(a3);

    let x = d * (180 / Math.PI);

    return [Number(a3.toFixed(2)), Number(x.toFixed(2))];
  }

  intpair(a, h, b, g, f, c) {
    let a1 = Number(a) * Number(b) - Number(h * h * 0.25);
    let a2 = Number(h / 2) * Number(f / 2) - Number(b) * Number(g / 2);
    let a3 = Number(g / 2) * Number(h / 2) - Number(a) * Number(f / 2);

    let a4 = a2 / a1;
    let a5 = a3 / a1;

    return [Number(a4.toFixed(2)), Number(a5.toFixed(2))];
  }

  pairfromlines(a1, b1, c1, a2, b2, c2) {
    let a = Number(a1 * a2);
    let b = Number(b1 * b2);
    let h = Number(a1 * b2) + Number(a2 * b1);
    let g = Number(a1 * c2) + Number(a2 * c1);
    let f = Number(b1 * c2) + Number(b2 * c1);
    let c = Number(c1 * c2);

    return [
      Number(a.toFixed(2)),
      Number(h.toFixed(2)),
      Number(b.toFixed(2)),
      Number(g.toFixed(2)),
      Number(f.toFixed(2)),
      Number(c.toFixed(2)),
    ];
  }

  eqlinenormal(a1, b1, c1) {
    let r = Math.sqrt(Number(a1 * a1) + Number(b1 * b1));

    let a = a1 / r;
    let b = b1 / r;
    let c = -c1 / r;

    let d = Math.acos(a);
    let e = Math.asin(b);

    let x = d * (180 / Math.PI);
    let y = e * (180 / Math.PI);

    return [Number(x.toFixed(2)), Number(y.toFixed(2)), Number(c.toFixed(2))];
  }
}

export default Line;

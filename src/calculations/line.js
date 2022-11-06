class Line {
  constructor(ax, ay, bx, by, a1, b1, c1, a2, b2, c2, m) {
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
  }

  distance(ax, ay, bx, by) {
    let first = Number(ax) - Number(bx);
    let second = Number(ay) - Number(by);
    let result = Math.sqrt(first * first + second * second);

    return result.toFixed(2);
  }
  slope(ax, ay, bx, by) {
    let first = Number(by) - Number(ay);
    let second = Number(bx) - Number(ax);
    let result = first / second;

    return result.toFixed(3);
  }

  pointOfint(a1, b1, c1, a2, b2, c2) {
    if (a1 / b1 === a2 / b2) {
      return "XX";
    } else {
      let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
      let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

      return [x.toFixed(3), y.toFixed(3)];
    }
  }

  intercepts(a1, b1, c1) {
    let xint = -c1 / a1;
    let yint = -c1 / b1;

    return [xint.toFixed(3), yint.toFixed(3)];
  }
  bisector(ax, ay, bx, by) {
    let m1 = (Number(ax) + Number(bx)) / 2;
    let m2 = (Number(ay) + Number(by)) / 2;

    let m = -1 / ((Number(by) - Number(ay)) / (Number(bx) - Number(ax)));
    let b = m2 - m * m1;

    return [m.toFixed(3), b.toFixed(3)];
  }
  twopointform(ax, ay, bx, by) {
    let m = (Number(by) - Number(ay)) / (Number(bx) - Number(ax));
    let c = ay - m * ax;

    return [m, c];
  }
  pointslopeform(m, ax, ay) {
    let c = Number(ay) - Number(m) * Number(ax);

    return [m, c];
  }

  tricircumcentre(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [x.toFixed(3), y.toFixed(3)];
      }
    }

    let a = pointOfint(a1, b1, c1, a2, b2, c2);
    let b = pointOfint(a2, b2, c2, a3, b3, c3);
    let c = pointOfint(a1, b1, c1, a3, b3, c3);

    let p = 2 * a[0] - 2 * b[0];
    let q = 2 * a[1] - 2 * b[1];
    let r = -(a[0] * a[0] + a[1] * a[1]) + (b[0] * b[0] + b[1] * b[1]);

    let p1 = 2 * b[0] - 2 * c[0];
    let q1 = 2 * b[1] - 2 * c[1];
    let r1 = -(b[0] * b[0] + b[1] * b[1]) + (c[0] * c[0] + c[1] * c[1]);

    let res = pointOfint(p, q, r, p1, q1, r1);

    return [res[0], res[1]];
  }

  tricircumpoints(x1,y1,x2,y2,x3,y3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [x.toFixed(3), y.toFixed(3)];
      }
    }
    let p = 2 * x1 - 2 * x2;
    let q = 2 * y1 - 2 * y2;
    let r = -(x1 * x1 + y1 * y1) + (x2 * x2 + y2 * y2);

    let p1 = 2 * x2 - 2 * x3;
    let q1 = 2 * y2 - 2 * y3;
    let r1 = -(x2 * x2 + y2 * y2) + (x3 * x3 + y3 * y3);

    let res = pointOfint(p, q, r, p1, q1, r1);

    return [res[0], res[1]];
  }
}

export default Line;

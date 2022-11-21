class Triangle {
  constructor(a1, b1, c1, a2, b2, c2, a3, b3, c3, x1, x2, x3, y1, y2, y3) {
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
  }

  tricircumcentre(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
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

    return [Number(res[0]), Number(res[1])];
  }

  tricircumpoints(x1, y1, x2, y2, x3, y3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
      }
    }
    let p = 2 * x1 - 2 * x2;
    let q = 2 * y1 - 2 * y2;
    let r = -(x1 * x1 + y1 * y1) + (x2 * x2 + y2 * y2);

    let p1 = 2 * x2 - 2 * x3;
    let q1 = 2 * y2 - 2 * y3;
    let r1 = -(x2 * x2 + y2 * y2) + (x3 * x3 + y3 * y3);

    let res = pointOfint(p, q, r, p1, q1, r1);

    return [Number(res[0].toFixed(2)), Number(res[1].toFixed(2))];
  }

  orthocentre(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
      }
    }

    let b = pointOfint(a1, b1, c1, a2, b2, c2);
    let a = pointOfint(a1, b1, c1, a3, b3, c3);

    let m1 = -a2 / b2;
    let m2 = -a3 / b3;

    let c_1 = Number(a[1]) - Number(-1 / m1) * Number(a[0]);
    let c_2 = Number(b[1]) - Number(-1 / m2) * Number(b[0]);

    let res = pointOfint(-1 / m1, -1, c_1, -1 / m2, -1, c_2);

    return [Number(res[0].toFixed(2)), Number(res[1].toFixed(2))];
  }

  orthopoints(x1, y1, x2, y2, x3, y3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
      }
    }

    let m1 = (y2 - y3) / (x2 - x3);
    let m2 = (y1 - y3) / (x1 - x3);

    let c_1 = Number(y1) - Number(-1 / m1) * Number(x1);
    let c_2 = Number(y2) - Number(-1 / m2) * Number(x2);

    let res = pointOfint(-1 / m1, -1, c_1, -1 / m2, -1, c_2);

    return [Number(res[0].toFixed(2)), Number(res[1].toFixed(2))];
  }

  areaperimeter(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
      }
    }
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);

      return Number(result.toFixed(2));
    }

    let a = pointOfint(a1, b1, c1, a2, b2, c2);
    let b = pointOfint(a2, b2, c2, a3, b3, c3);
    let c = pointOfint(a1, b1, c1, a3, b3, c3);

    let x = (a[0] - b[0]) * (a[1] - c[1]);
    let y = (a[0] - c[0]) * (a[1] - b[1]);
    let area = 0.5 * (Number(x) - Number(y));

    let ab = distance(a[0], a[1], b[0], b[1]);
    let bc = distance(b[0], b[1], c[0], c[1]);
    let ac = distance(a[0], a[1], c[0], c[1]);

    let perimeter = Number(ab) + Number(bc) + Number(ac);

    return [Number(area.toFixed(2)), Number(perimeter.toFixed(2))];
  }

  areaperipoints(x1, y1, x2, y2, x3, y3) {
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);

      return Number(result.toFixed(2));
    }

    let x = (x1 - x2) * (y1 - y3);
    let y = (x1 - x3) * (y1 - y2);
    let area = 0.5 * (Number(x) - Number(y));

    let ab = distance(x1, y1, x2, y2);
    let bc = distance(x2, y2, x3, y3);
    let ac = distance(x1, y1, x3, y3);

    let perimeter = Number(ab) + Number(bc) + Number(ac);

    return [Number(area.toFixed(2)), Number(perimeter.toFixed(2))];
  }

  centroid(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
      }
    }

    let a = pointOfint(a1, b1, c1, a2, b2, c2);
    let b = pointOfint(a2, b2, c2, a3, b3, c3);
    let c = pointOfint(a1, b1, c1, a3, b3, c3);

    let cx = (a[0] + b[0] + c[0]) / 3;
    let cy = (a[1] + b[1] + c[1]) / 3;

    return [Number(cx.toFixed(2)), Number(cy.toFixed(2))];
  }

  centroidpoints(x1, y1, x2, y2, x3, y3) {
    let cx = (Number(x1) + Number(x2) + Number(x3)) / 3;
    let cy = (Number(y1) + Number(y2) + Number(y3)) / 3;

    return [Number(cx.toFixed(2)), Number(cy.toFixed(2))];
  }

  sidestovertices(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
    
    }

    let a = pointOfint(a1, b1, c1, a2, b2, c2);
    let b = pointOfint(a2, b2, c2, a3, b3, c3);
    let c = pointOfint(a1, b1, c1, a3, b3, c3);

    return [
      Number(a[0].toFixed(2)),
      Number(a[1].toFixed(2)),
      Number(b[0].toFixed(2)),
      Number(b[1].toFixed(2)),
      Number(c[0].toFixed(2)),
      Number(c[1].toFixed(2)),
    ];
  }

  verticestosides(x1, y1, x2, y2, x3, y3) {
    function twopointform(ax, ay, bx, by) {
      let m = (Number(by) - Number(ay)) / (Number(bx) - Number(ax));
      let c = ay - m * ax;

      return [Number(m.toFixed(2)), Number(c.toFixed(2))];
    }

    let a = twopointform(x1, y1, x2, y2);
    let b = twopointform(x2, y2, x3, y3);
    let c = twopointform(x3, y3, x1, y1);

    return [
      Number(a[0].toFixed(2)),
      Number(a[1].toFixed(2)),
      Number(b[0].toFixed(2)),
      Number(b[1].toFixed(2)),
      Number(c[0].toFixed(2)),
      Number(c[1].toFixed(2)),
    ];
  }

  incentre(a1, b1, c1, a2, b2, c2, a3, b3, c3) {
    function pointOfint(a1, b1, c1, a2, b2, c2) {
      if (a1 / b1 === a2 / b2) {
        return "XX";
      } else {
        let x = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        let y = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);

        return [Number(x.toFixed(3)), Number(y.toFixed(3))];
      }
    }
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);

      return result.toFixed(2);
    }

    let a = pointOfint(a1, b1, c1, a2, b2, c2);
    let b = pointOfint(a2, b2, c2, a3, b3, c3);
    let c = pointOfint(a1, b1, c1, a3, b3, c3);

    let ab = Number(distance(a[0], a[1], b[0], b[1]));
    let bc = Number(distance(b[0], b[1], c[0], c[1]));
    let ac = Number(distance(a[0], a[1], c[0], c[1]));

    let l = Number(a[0]) * bc + Number(b[0]) * ac + Number(c[0]) * ab;
    let m = Number(a[1]) * bc + Number(b[1]) * ac + Number(c[1]) * ab;
    let n = Number(ab + bc + ac);
    let ix = l / n;
    let iy = m / n;

    return [Number(ix.toFixed(2)), Number(iy.toFixed(2))];
  }

  incentrepoints(x1, y1, x2, y2, x3, y3) {
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);

      return Number(result.toFixed(2));
    }

    let ab = distance(x1, y1, x2, y2);
    let bc = distance(x2, y2, x3, y3);
    let ac = distance(x3, y3, x1, y1);
    let a = Number(x1) * bc + Number(x2) * ac + Number(x3) * ab;
    let b = Number(y1) * bc + Number(y2) * ac + Number(y3) * ab;
    let c = Number(ab + bc + ac);
    let ix = a / c;
    let iy = b / c;

    return [Number(ix.toFixed(2)), Number(iy.toFixed(2))];
  
  }
}

export default Triangle;

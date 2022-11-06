class Triangle {
    constructor(a1, b1, c1,a2,b2,c2,a3,b3,c3,x1,x2,x3,y1,y2,y3) {
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

export default Triangle;
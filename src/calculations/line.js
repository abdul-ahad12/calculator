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

  imageofpoint(ax,ay,a1,b1,c1)
  {
    let a = -2*(Number(ax*a1)+Number(ay*b1)+Number(c1));
    let b = Number(a1*a1)+Number(b1*b1);
    let c = Number(a/b);

    let h = (c*a1) + Number(ax);
    let k = (c*b1) + Number(ay);

    return[h,k];
  }

  footofperpendicular(ax,ay,a1,b1,c1)
  {
    let a = -1 *(Number(ax*a1)+Number(ay*b1)+Number(c1));
    let b = Number(a1*a1)+Number(b1*b1);
    let c = Number(a/b);

    let h = (c*a1) + Number(ax);
    let k = (c*b1) + Number(ay);

    return[h,k];
  }

  perpendiculardist(ax,ay,a1,b1,c1)
  {
    let a = Math.abs((Number(ax*a1)+Number(ay*b1)+Number(c1)));
    let b = Math.sqrt(Number(a1*a1)+Number(b1*b1));
    
    let d = Number(a/b);

    return[d];
  }

  anglebwlines(a1,b1,c1,a2,b2,c2)
  {
    let a = Math.abs((Number(a2)*Number(b1)) - (Number(a1)*Number(b2)));
    let b = Math.abs((Number(a2)*Number(a1)) + (Number(b1)*Number(b2)));

    let c = a/b;

    let d = Math.atan(c)
    
    let x = d * (180/Math.PI);

    return[c.toFixed(2), x.toFixed(2)];
  }

}

export default Line;

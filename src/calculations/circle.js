class Circle {
  constructor(g, f, c) {
    this.g = g;
    this.f = f;
    this.c = c;
  }

  cenAndrad(g, f, c) {
    let c1 = -g / 2;
    let c2 = -f / 2;

    let r = Math.sqrt(
      Number(c1) * Number(c1) + Number(c2) * Number(c2) - Number(c)
    );

    return [c1, c2, r];
  }

  eqFromCR(c1, c2, r) {
    let g = -2 * c1;
    let f = -2 * c2;
    let c = (c1 * c1) + (c2 * c2) - (r*r);
    return [g, f, c];
  }
}

export default Circle;

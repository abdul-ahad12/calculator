class Ellipse {
  constructor(l, m, n, o, p) {
    this.l = l;
    this.m = m;
    this.n = n;
    this.o = o;
    this.p = p;
  }

  attributes(l, m, n, o, p) {
    let a = Math.sqrt(m);
    let b = Math.sqrt(l);

    //coordinates of centre
    let h = n / (-2 * l);
    let k = o / (-2 * m);

    let c, e, length_major_axis, length_minor_axis, length_of_latus_rectum;
  }
}
export default Ellipse;

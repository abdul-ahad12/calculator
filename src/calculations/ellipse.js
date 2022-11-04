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

  areacircum(l,m)
{
	let a = Math.sqrt(Math.abs(m));
	let b = Math.sqrt(Math.abs(l));

	let area = Math.PI*a*b;

	let perimeter = 2*Math.PI*(Math.sqrt(((a*a)+(b*b))/2));

  return [area.toFixed(2), perimeter.toFixed(2)];
}

}
export default Ellipse;

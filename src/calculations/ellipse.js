class Ellipse {
  constructor(l, m, n, o, p) {
    this.l = l;
    this.m = m;
    this.n = n;
    this.o = o;
    this.p = p;
  }

  attributes(l, m, n, o, p) {
    //first coeficents
    //    let ll=l/l
    let nn = n / l;
    //    let mm=m/m
    let oo = o / m;
    //this is alpha
    let aa = -1 * (nn / 2);
    //this is beta
    let bb = -1 * (oo / 2);
    //this is the coeeficient we are dividing with
    let c =
      -1 * p + l * (Number(aa) * Number(aa)) + m * (Number(bb) * Number(bb));
    //this is a^2
    let a = c / l;
    //this is b^2
    let b = c / m;

    if (b > a) {
      let LgMajor = 2 * Math.sqrt(b);
      let lgMinor = 2 * Math.sqrt(a);
      let lgLactur = (2 * a) / Math.sqrt(b);
      let center = `(${aa.toFixed(2)},${bb.toFixed(2)})`;
      let ee = Math.sqrt((Number(b) - Number(a)) / Number(b));
      let foci = `(${aa.toFixed(2)},${bb.toFixed(2)}±${(Math.sqrt(b) * ee).toFixed(2)})`;
      let eqDirect = `y=${bb.toFixed(2)}±${(Math.sqrt(b) / ee).toFixed(2)}`;
      let vertices = `(${aa.toFixed(2)},${bb.toFixed(2)}±${(Math.sqrt(b)).toFixed(2)})`;
      let eqMajor = `x=${aa.toFixed(2)}`;
      let eqMinor = `y=${bb.toFixed(2)}`;
      let eqOfLatus = `y=${bb.toFixed(2)}±${(Math.sqrt(b) * ee).toFixed(2)}`;

      return [
        LgMajor.toFixed(2),
        lgMinor.toFixed(2),
        lgLactur.toFixed(2),
        center,
        ee.toFixed(2),
        foci,
        eqDirect,
        vertices,
        eqMajor,
        eqMinor,
        eqOfLatus,
      ];
    } else {
      let LgMajor = 2 * Math.sqrt(a);
      let lgMinor = 2 * Math.sqrt(b);
      let lgLactur = (2 * b) / Math.sqrt(a);
      let center = `(${aa.toFixed(2)},${bb.toFixed(2)})`;
      let ee = Math.sqrt((Number(a) - Number(b)) / Number(a));
      let foci = `(${aa.toFixed(2)}±${
        Math.sqrt(a.toFixed(2)) * ee.toFixed(2)
      },${bb.toFixed(2)})`;
      let eqDirect = `x=${aa.toFixed(2)}±${(Math.sqrt(a) / ee).toFixed(2)}`;
      let vertices = `(${aa.toFixed(2)}±${Math.sqrt(a.toFixed(2))},${bb.toFixed(
        2
      )})`;
      let eqMajor = `y=${bb.toFixed(2)}0`;
      let eqMinor = `x=${aa.toFixed(2)}0`;
      let eqOfLatus = `x=${aa.toFixed(2)}±${
        Math.sqrt(a.toFixed(2)) * ee.toFixed(2)
      }`;

      return [
        LgMajor.toFixed(2),
        lgMinor.toFixed(2),
        lgLactur.toFixed(2),
        center,
        ee.toFixed(2),
        foci,
        eqDirect,
        vertices,
        eqMajor,
        eqMinor,
        eqOfLatus,
      ];
    }
  }

  areacircum(l,m)
{
	let a = Math.sqrt(Math.abs(m));
	let b = Math.sqrt(Math.abs(l));

	let area = b;

    let perimeter = 2 * Math.PI * Math.sqrt((a * a + b * b) / 2);

    return [area.toFixed(2), perimeter.toFixed(2)];
  }
}

export default Ellipse;

class Hyperbola {
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

    if (l < 0) {
      //this is a^2
      let a = -1 * (c / l);
      //this is b^2
      let b = c / m;
      let LgMajor = 2 * Math.sqrt(b);
      let lgMinor = 2 * Math.sqrt(a);
      let lgLactur = (2 * a) / Math.sqrt(b);
      let center = `Center:(${Number(aa.toFixed(2))},${Number(bb.toFixed(2))})`;
      let ee = Math.sqrt((Number(a) + Number(b)) / Number(b));
      let foci = `(${Number(aa.toFixed(2))},${Number(bb.toFixed(2))}±${
        Math.sqrt(Number(b.toFixed(2))) * Number(ee.toFixed(2))
      })`;
      let eqDirect = `y=${Number(bb.toFixed(2))}±${
        Math.sqrt(Number(b.toFixed(2))) / Number(ee.toFixed(2))
      }`;
      let vertices = `(${Number(aa.toFixed(2))},${Number(
        bb.toFixed(2)
      )}±${Math.sqrt(Number(b.toFixed(2)))})`;
      let eqMajor = `x=${Number(aa.toFixed(2))}`;
      let eqMinor = `y=${Number(bb.toFixed(2))}`;
      let eqOfLatus = `y=${Number(bb.toFixed(2))}±${
        Math.sqrt(Number(b.toFixed(2))) * Number(ee.toFixed(2))
      }`;
      if (aa === 0 && bb === 0) {
        var genForm1 = `\\frac{y^2}{${Number(
          b.toFixed(2)
        )}}-\\frac{x^2}{${Number(a.toFixed(2))}}=1`;
      } else {
        var genForm1 = `\\frac{(y-(${Number(bb.toFixed(2))}))^2}{${Number(
          b.toFixed(2)
        )}^2}-\\frac{(x-(${Number(aa.toFixed(2))}))^2}{${Number(
          a.toFixed(2)
        )}^2}=1`;
      }

      return [
        Number(LgMajor.toFixed(2)),
        Number(lgMinor.toFixed(2)),
        Number(lgLactur.toFixed(2)),
        center,
        Number(ee.toFixed(2)),
        foci,
        eqDirect,
        vertices,
        eqMajor,
        eqMinor,
        eqOfLatus,
        genForm1,
      ];
    } else {
      //this is a^2
      let a = c / l;
      //this is b^2
      let b = -1 * (c / m);
      let LgMajor = 2 * Math.sqrt(a);
      let lgMinor = 2 * Math.sqrt(b);
      let lgLactur = (2 * b) / Math.sqrt(a);
      let center = `(${Number(aa.toFixed(2))},${Number(bb.toFixed(2))})`;
      let ee = Math.sqrt(
        (Number(a.toFixed(2)) + Number(b.toFixed(2))) / Number(a.toFixed(2))
      );

      let foci = `(${Number(aa.toFixed(2))}±${Number(
        (Math.sqrt(a) * ee).toFixed(2)
      )},${Number(bb.toFixed(2))})`;
      let eqDirect = `x=${Number(aa.toFixed(2))}±${Number(
        (Math.sqrt(a) / ee).toFixed(2)
      )}`;
      let vertices = `(${Number(aa.toFixed(2))}±${Number(
        Math.sqrt(a.toFixed(2))
      )},${Number(bb.toFixed(2))})`;
      let eqMajor = `y=${Number(bb.toFixed(2))}`;
      let eqMinor = `x=${Number(aa.toFixed(2))}`;
      let eqOfLatus = `x=${Number(aa.toFixed(2))}±${
        Number(Math.sqrt(a.toFixed(2))) * Number(ee.toFixed(2))
      }`;
      if (aa === 0 && bb === 0) {
        var genForm3 = `\\frac{x^2}{${Number(
          a.toFixed(2)
        )}}-\\frac{y^2}{${Number(b.toFixed(2))}}=1`;
      } else {
        var genForm3 = `\\frac{(x-(${Number(aa.toFixed(2))}))^2}{${Number(
          a.toFixed(2)
        )}}-\\frac{(y-(${Number(bb.toFixed(2))}))^2}{${Number(
          b.toFixed(2)
        )}}=1`;
      }

      return [
        Number(LgMajor.toFixed(2)),
        Number(lgMinor.toFixed(2)),
        Number(lgLactur.toFixed(2)),
        center,
        Number(ee.toFixed(2)),
        foci,
        eqDirect,
        vertices,
        eqMajor,
        eqMinor,
        eqOfLatus,
        genForm3,
      ];
    }
  }
}

export default Hyperbola;

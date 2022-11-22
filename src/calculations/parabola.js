class Parabola {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  attributes(l, m, n, o, p) {
    //if l ie x^2 cpeeficent is zero
    if (Number(l) === 0) {
      let nn = n / m;
      let oo = o / m;
      let pp = p / m;
      let aa = oo / 2;
      let constant = -1 * pp + Number(aa) * Number(aa);
      //value of a
      let a = nn / 4;
      //value of beta
      let beta = -1 * aa;
      //value of alpha
      let alpha = constant / nn;
      let vertex = `(${Number(alpha.toFixed(2))},${Number(beta.toFixed(2))})`;
      let focus = `(${Number((-1)*Number(a.toFixed(2)) + Number(alpha.toFixed(2)).toFixed(2))},${Number(beta.toFixed(2))})`;
      let eqaxis = `y=${Number(beta.toFixed(2))}`;
      let eqdirec = `x=${Number(alpha.toFixed(2)) + Number(a.toFixed(2))}`;
      let eqlatus = `x=${Number(alpha.toFixed(2)) - Number(a.toFixed(2))}`;
      let lglatus = `${4 * Number(a.toFixed(2))}`;
      let eqtanget = `x=${Number(alpha.toFixed(2))}`;
      let standform = `((y-(${Number(beta.toFixed(2))}))^2=${-1 * 4 * Number(a.toFixed(2))}(x-${Number(alpha.toFixed(2))}))`;

      return [
        vertex,
        focus,
        eqaxis,
        eqdirec,
        eqlatus,
        lglatus,
        eqtanget,
        standform,
        "",
        "",
        "",
        "",
      ];
    } else if (Number(m) === 0) {
      let nn = n / l;
      let oo = o / l;
      let pp = p / l;
      let aa = nn / 2;
      let constant = -1 * pp + Number(aa) * Number(aa);
      //value of a
      let a = oo / 4;
      //value of alpha
      let alpha = -1 * aa;
      //value of beta
      let beta = constant / oo;
      let vertex = `(${Number(alpha.toFixed(2))},${Number(beta.toFixed(2))})`;
      let focus = `(${Number(alpha.toFixed(2))},${Number((-1 * Number(a.toFixed(2)) + Number(Number(beta.toFixed(2)))).toFixed(2))})`;
      let eqaxis = `x=${Number(alpha.toFixed(2))}`;
      let eqdirec = `y=${Number(alpha.toFixed(2)) + Number(a.toFixed(2))}`;
      let eqlatus = `x=${Number((Number(beta.toFixed(2)) - Number(a.toFixed(2))).toFixed(2))}`;
      let lglatus = `${4 * Number(a.toFixed(2))}`;
      let eqtanget = `x=${Number(alpha.toFixed(2))}`;
      let standform = `((x-(${Number(alpha.toFixed(2))}))^2=${-1 * 4 * Number(a.toFixed(2))}(y-(${Number(beta.toFixed(2))})))`;

      // return [constant,alpha,beta,a]
      return [
        vertex,
        focus,
        eqaxis,
        eqdirec,
        eqlatus,
        lglatus,
        eqtanget,
        standform,
        "",
        "",
        "",
        "",
      ];
    } else {
      return ["wrong input"];
    }
  }

  eqfocver(a, b, c, d) {}
}

export default Parabola;

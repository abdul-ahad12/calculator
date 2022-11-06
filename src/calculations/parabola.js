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
      let constant = -1 * pp + (Number(aa)*Number(aa));
      //value of a
      let a = (nn) / 4;
      //value of beta
      let beta = -1 * aa;
      //value of alpha
      let alpha = constant / (nn);
      let vertex=`(${alpha},${beta})`
      let focus=`(${((-1)*a)+Number(alpha)},${beta})`
      let eqaxis=`y=${beta}`
      let eqdirec=`x=${alpha+a}`
      let eqlatus=`x=${alpha-a}`
      let lglatus=`${4*a}`
      let eqtanget=`x=${alpha}`
      let standform=`((y-(${beta}))^2=${-1*4*a}(x-${alpha}))`


      return [vertex,focus,eqaxis,eqdirec,eqlatus,lglatus,eqtanget,standform]
    }
    else if(Number(m)===0)
    {
      let nn = n / l;
      let oo = o / l;
      let pp = p / l;
      let aa = nn / 2;
      let constant = -1 * pp + (Number(aa)*Number(aa));
      //value of a
      let a = (oo) / 4;
      //value of alpha
      let alpha = -1 * aa;
      //value of beta
      let beta = constant / (oo);
      let vertex=`(${alpha},${beta})`
      let focus=`(${alpha},${-1*beta+Number(a)})`
      let eqaxis=`x=${alpha}`
      let eqdirec=`y=${beta+a}`
      let eqlatus=`x=${beta-a}`
      let lglatus=`${4*a}`
      let eqtanget=`x=${alpha}`
      let standform=`((x-${alpha})^2=${(-1)*4*a}(y-${beta}))`


// return [constant,alpha,beta,a]
      return [vertex,focus,eqaxis,eqdirec,eqlatus,lglatus,eqtanget,standform]
    }
    else{
      return ["wrong input"]
    }
  }

  vertexfocusx(a, b, c, d) {
    // let aa = a / a;
    let bb = -1 * (b / a);
    let cc = c / a;
    let dd = -1 * (d / a);
    let e = (cc / 2) * (cc / 2);
    //value of k
    let k = -1 * (cc / 2);
    let f = Number(dd) + Number(e);
    //value of h
    let h = -1 * (f / bb);
    let aaa = bb / 4;
    let focusy = Number(h) + Number(aaa);

    return [h, k, focusy];
  }
}

export default Parabola;

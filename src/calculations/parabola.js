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
      let vertex=`(${Number(alpha.toFixed(2))},${Number(beta.toFixed(2))})`
      let focus=`(${((-1)*a)+Number(alpha)},${beta})`
      let eqaxis=`y=${beta}`
      let eqdirec=`x=${alpha+a}`
      let eqlatus=`x=${alpha-a}`
      let lglatus=`${4*a}`
      let eqtanget=`x=${alpha}`
      let standform=`((y-(${beta}))^2=${-1*4*a}(x-${alpha}))`


      return [vertex,focus,eqaxis,eqdirec,eqlatus,lglatus,eqtanget,standform,"","","",""]
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
      let focus=`(${alpha},${-1*a+Number(beta
        )})`
      let eqaxis=`x=${alpha}`
      let eqdirec=`y=${beta+a}`
      let eqlatus=`x=${beta-a}`
      let lglatus=`${4*a}`
      let eqtanget=`x=${alpha}`
      let standform=`((x-${alpha})^2=${(-1)*4*a}(y-${beta}))`


// return [constant,alpha,beta,a]
      return [vertex,focus,eqaxis,eqdirec,eqlatus,lglatus,eqtanget,standform,"","","",""]
    }
    else{
      return ["wrong input"]
    }
  }

eqfocver(a,b,c,d){

}
}

export default Parabola;

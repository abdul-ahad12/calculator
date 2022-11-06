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
    

    if (l <0 ) {
      //this is a^2
    let a = -1*(c / l);
    //this is b^2
    let b = (c / m);
      let LgMajor = 2 * Math.sqrt(b);
      let lgMinor = 2 * Math.sqrt(a);
      let lgLactur = (2 * a) / Math.sqrt(b);
      let center = `Center:(${aa},${bb})`;
      let ee = Math.sqrt((Number(a) + Number(b)) / Number(b));
      let foci = `(${aa},${bb}±${Math.sqrt(b) * ee})`;
      let eqDirect = `y=${bb}±${Math.sqrt(b) / ee}`;
      let vertices = `(${aa},${bb}±${Math.sqrt(b)})`;
      let eqMajor = `x-${aa}=0`;
      let eqMinor = `y-${bb}=0`;
      let eqOfLatus = `y=${bb}±${Math.sqrt(b) * ee}`;
      if(aa===0 && bb===0){
        var genForm1=`y^2/${b}-x^2/${a}=1`
        
      }else{
        var genForm1=`((y-${bb})^2/${b}^2)-((x-${aa})^2/${a}^2)=1`
      }

      return [
        LgMajor.toFixed(2),
        lgMinor.toFixed(2),
        lgLactur,
        center,
        ee.toFixed(2),
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
    let a = (c / l);
    //this is b^2
    let b = -1*(c / m);
    let LgMajor = 2 * Math.sqrt(a);
    let lgMinor = 2 * Math.sqrt(b);
    let lgLactur = (2 * b) / Math.sqrt(a);
    let center = `(${aa.toFixed(2)},${bb.toFixed(2)})`;
    let ee = Math.sqrt((Number(a) + Number(b)) / Number(a));
    
    let foci = `(${aa.toFixed(2)}±${(Math.sqrt(a)*ee).toFixed(2)},${bb.toFixed(2)})`;
    let eqDirect = `x=${aa.toFixed(2)}±${(Math.sqrt(a) / ee).toFixed(2)}`;
    let vertices = `(${aa.toFixed(2)}±${Math.sqrt(a.toFixed(2))},${bb.toFixed(
      2
    )})`;
    let eqMajor = `y-${bb.toFixed(2)}=0`;
    let eqMinor = `x-${aa.toFixed(2)}=0`;
    let eqOfLatus = `x=${aa.toFixed(2)}±${
      Math.sqrt(a.toFixed(2)) * ee.toFixed(2)
    }`;
    if(aa&&bb===0){
      var genForm3=`x^2/${a}-y^2/${b}=1`
      
    }else{
      var genForm3=`((x-(${aa}))^2/${a})-((y-(${bb}))^2/${b})=1`
    }
    

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
      genForm3,
      
    ];
  }
  }
}

export default Hyperbola;

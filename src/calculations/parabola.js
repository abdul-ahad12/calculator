class Parabola {

  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  vertexfocusx(a, b, c, d) {
    // let aa = a / a;
    let bb = (-1)*(b / a);
    let cc = c / a;
    let dd = (-1)*(d / a);
    let e=(cc/2)*(cc/2);
    //value of k
    let k=(-1)*(cc/2)
    let f=Number(dd)+Number(e)
    //value of h
    let h=(-1)*(f/bb)
    let aaa=bb/4
    let focusy=Number(h)+Number(aaa)

    return [h,k,focusy]
    

  }

}

export default Parabola;

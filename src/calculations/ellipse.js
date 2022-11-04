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
    if(a>b)
    {
	 c = Math.sqrt((a*a) - (b-b));
		 e = c/b;	
	 length_major_axis = 2*a;
		length_minor_axis = 2*b;
		length_of_latus_rectum = (2*b*b)/a;
    }
	else if(b>a)
    {
		c = Math.sqrt((b*b) - (a-a));
		e = c/b;
		length_major_axis = 2*b;
		length_minor_axis = 2*a;
		length_of_latus_rectum = (2*a*a)/b;
    }
	if(h===0 && k===0){
		if(a>b){
		let vertex = a;
		let focus = a*e;
		let eqn_directrix = a/e;
		let	eqn_ll = a*e;
       

        return [a,b,h,k,e,vertex,focus,length_major_axis,length_minor_axis,eqn_ll,length_of_latus_rectum,eqn_directrix]
        }
            
			
			// return 'a = '+a+'b = '+b+';  Centre = ('+h+','+k+');  eccentricity = '+e+';  Vertices = (±'+vertex+',0);  focii = (±'+focus+',0);  eqn of major axis: y = 0'; 
            //  Length of major axis = '+length_major_axis+';  Eqn of minor axis: x = 0';  Length of minor axis= '+length_minor_axis+';  Eqn of Latus Rectum: x = ±'+eqn_ll+';  Length of Latus rectum = '+length_of_latus_rectum+';  Eqn of directrix: x = ±'+eqn_directrix;
		else if(a<b)
        {
		let	vertex = b;
		let	focus = b*e;
		let	eqn_directrix = b/e;
		let	eqn_ll = b*e;
            return [a,b,h,k,e,vertex,focus,length_major_axis,length_minor_axis,eqn_ll,length_of_latus_rectum,eqn_directrix]
        }
			
			// return 'a = '+a+'b = '+b+';  Centre = ('+h+','+k+');  eccentricity = '+e+';  Vertices = (±'+vertex+',0);  focii = (±'+focus+',0);  eqn of major axis: x = 0';  Length of major axis = '+length_major_axis+';  Eqn of minor axis: y = 0';  Length of minor axis= '+length_minor_axis+';  Eqn of Latus Rectum: x = ±'+eqn_ll+';  Length of Latus rectum = '+length_of_latus_rectum+';  Eqn of directrix: x = ±'+eqn_directrix;
		
    }
	else if(h!==0 && k!==0)
    {
		if(a>b)
        {
			let focus = a*e;
			let eqn_directrix = a/e;
			let eqn_ll = a*e;
			
            return [a,b,h,k,e,focus,length_major_axis,length_minor_axis,eqn_ll,length_of_latus_rectum,eqn_directrix]
        }
			
			// return 'a = '+a+'b = '+b+';  Centre = ('+h+','+k+');  eccentricity = '+e+';  Vertices = ('+h+'±'+a+','+k+');  focii = ('+h+'±'+focus+','+k+');  eqn of major axis: y-'+k+' = 0;  Length of major axis = '+length_major_axis+';  Eqn of minor axis: x - '+h+' = 0;  Length of minor axis= '+length_minor_axis+';  Eqn of Latus Rectum: x ='+h+'±'+eqn_ll+';  Length of Latus rectum = '+length_of_latus_rectum+';  Eqn of directrix: x ='+h+'±'+eqn_directrix;
		else if(a<b){
		let	focus = b*e;
		let	eqn_directrix = b/e;
		let	eqn_ll = b*e;
	
        return [a,b,h,k,e,focus,length_major_axis,length_minor_axis,eqn_ll,length_of_latus_rectum,eqn_directrix]
			
    }
}
  }

  areacircum(l,m)
{
	let a = Math.sqrt(m);
	let b = Math.sqrt(l);

	let area = b;

	let perimeter = 2*Math.PI*(Math.sqrt(((a*a)+(b*b))/2));

  return [area.toFixed(2), perimeter.toFixed(2)];
}

}

export default Ellipse;

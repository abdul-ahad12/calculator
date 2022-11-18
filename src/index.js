import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './font/stylesheet.css'
import './index.css';
import App from './pages/App';
import Circle from './pages/circle';
import Areacircum from './pages/circle/areacircum';
import CrEquation from './pages/circle/crequation';
import Eqfromcp from './pages/circle/eqfromcp';
import EqfromCR from './pages/circle/eqfromcr';
import GenToStand from './pages/circle/gentostand';
import Lengthoftangent from './pages/circle/lengthoftangent';
import Lengthxy from './pages/circle/lengthxy';
import Parametriceq from './pages/circle/parametriceq';
import Powerofpoint from './pages/circle/powerofpoint';
import Contactus from './pages/contactus';
import Ellipse from './pages/ellipse';
import Areacircumellipse from './pages/ellipse/areacircumellipse';
import Attributes from './pages/ellipse/attributes';
import Hyperbola from './pages/hyperbola';
import AttributesEl from './pages/hyperbola/attributes';
import Distance from './pages/line/distance';
import Perpendicular from './pages/line/perpendicular';
import PointOfInt from './pages/line/pointOfInt';
import PointSlopeForm from './pages/line/pointSlopeForm';
import SlopeLine from './pages/line/slopeLine';
import Tricircumcentre from './pages/triangle/tricircumcentre';
import Tricircumpoints from './pages/triangle/tricircumpoints';
import TwoPointForm from './pages/line/twoPointForm';
import Xyintercept from './pages/line/xyintercept';
import LineCal from './pages/lineCal';
import Parabola from './pages/parabola';
import AttributesPara from './pages/parabola/attributespara';
import Vertexfocus from './pages/parabola/vertexfocus';
import Triangle from './pages/triangle';
import reportWebVitals from './reportWebVitals';
import Orthocentre from './pages/triangle/orthocentre';
import Orthopoints from './pages/triangle/orthopoints';
import Areaperimeter from './pages/triangle/areaperimeter';
import Areaperipoints from './pages/triangle/areaperipoints';
import Centroid from './pages/triangle/centroid';
import Centroidpoints from './pages/triangle/centroidpoints';
import Sidestovertices from './pages/triangle/sidestovertices';
import Verticestosides from './pages/triangle/verticestosides';
import Incentre from './pages/triangle/incentre';
import Incentrepoints from './pages/triangle/incentrepoints';
import Imageofpoint from './pages/line/imageofpoint';
import Footofperpendicular from './pages/line/footofperpendicular';
import Perpendiculardist from './pages/line/perpendiculardist';
import Anglebwlines from './pages/line/anglebwlines';
import Paralinesdist from './pages/line/paralinesdist';
import Distancepairpara from './pages/line/distancepairpara';
import Anglebwpairlines from './pages/line/Anglebwpairlines';
import Intpair from './pages/line/intpair';
import Pairfromlines from './pages/line/pairfromlines';
import Eqlinenormal from './pages/line/eqlinenormal';
import Eqnoftangent from './pages/circle/eqnoftangent';
import Checkconjugate from './pages/circle/checkconjugate';
import Nopointstangents from './pages/circle/nopointstangents';
import Poleofline from './pages/circle/poleofline';
import Threepointcircle from './pages/circle/threepointcircle';
import Anglebwcircles from './pages/circle/anglebwcircles';
import Radicalaxis from './pages/circle/radicalaxis';
import Radicalcentre from './pages/circle/radicalcentre';
import Commonchord from './pages/circle/commonchord';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/*                Line                   */}
        <Route path="lineCal" element={<LineCal />}></Route>
        <Route path="distance" element={<Distance />}></Route>
        <Route path="slopeLine" element={<SlopeLine />}></Route>
        <Route path="pointofint" element={<PointOfInt />}></Route>
        <Route path="xyintercept" element={<Xyintercept />}></Route>
        <Route path="perpendicular" element={<Perpendicular />}></Route>
        <Route path="twopointform" element={<TwoPointForm />}></Route>
        <Route path="pointslopeform" element={<PointSlopeForm />}></Route>
        <Route path="imageofpoint" element={<Imageofpoint/>}></Route>
        <Route path="footofperpendicular" element={<Footofperpendicular/>}></Route>
        <Route path="perpendiculardist" element={<Perpendiculardist/>}></Route>
        <Route path="anglebwlines" element={<Anglebwlines/>}></Route>
        <Route path="paralinesdist" element={<Paralinesdist/>}></Route>
        <Route path="distancepairpara" element={<Distancepairpara/>}></Route>
        <Route path="anglebwpairlines" element={<Anglebwpairlines/>}></Route>
        <Route path="intpair" element={<Intpair/>}></Route>
        <Route path="pairfromlines" element={<Pairfromlines/>}></Route>
        <Route path="eqlinenormal" element={<Eqlinenormal/>}></Route>
        <Route path="eqnoftangent" element={<Eqnoftangent/>}></Route>
        

        {/*                Triangle                */}
        <Route path="triangle" element={<Triangle/>}></Route>
        <Route path="tricircumcentre" element={<Tricircumcentre />}></Route>
        <Route path="tricircumpoints" element={<Tricircumpoints />}></Route>
        <Route path="orthocentre" element={<Orthocentre />}></Route>
        <Route path="orthopoints" element={<Orthopoints />}></Route>
        <Route path="areaperimeter" element={<Areaperimeter />}></Route>
        <Route path="areaperipoints" element={<Areaperipoints/>}></Route>
        <Route path="centroid" element={<Centroid/>}></Route>
        <Route path="centroidpoints" element={<Centroidpoints/>}></Route>
        <Route path="sidestovertices" element={<Sidestovertices/>}></Route>
        <Route path="verticestosides" element={<Verticestosides/>}></Route>
        <Route path="incentre" element={<Incentre/>}></Route>
        <Route path="incentrepoints" element={<Incentrepoints/>}></Route>


        {/*               Circle               */}
        <Route path="circle" element={<Circle />}></Route>
        <Route path="crequation" element={<CrEquation />}></Route>
        <Route path="eqfromcr" element={<EqfromCR />}></Route>
        <Route path="gentostand" element={<GenToStand />}></Route>
        <Route path="eqfromcp" element={<Eqfromcp />}></Route>
        <Route path="lengthxy" element={<Lengthxy />}></Route>
        <Route path="parametriceq" element={<Parametriceq />}></Route>
        <Route path="powerofpoint" element={<Powerofpoint />}></Route>
        <Route path="lengthoftangent" element={<Lengthoftangent />}></Route>
        <Route path="areacircum" element={<Areacircum />}></Route>
        <Route path="checkconjugate" element={<Checkconjugate />}></Route>
        <Route path="nopointstangents" element={<Nopointstangents />}></Route>
        <Route path="poleofline" element={<Poleofline />}></Route>
        <Route path="threepointcircle" element={<Threepointcircle />}></Route>
        <Route path="anglebwcircles" element={<Anglebwcircles />}></Route>
        <Route path="radicalaxis" element={<Radicalaxis />}></Route>
        <Route path="radicalcentre" element={<Radicalcentre />}></Route>
        <Route path="commonchord" element={<Commonchord />}></Route>


        {/*                Parabola                  */}
        <Route path="parabola" element={<Parabola />}></Route>
        <Route path="attributespara" element={<AttributesPara />}></Route>
        <Route path="vertexfocusx" element={<Vertexfocus />}></Route>


        {/*               Ellipse                  */}
        <Route path="ellipse" element={<Ellipse />}></Route>
        <Route path="attributes" element={<Attributes />}></Route>
        <Route path="areacircumellipse" element={<Areacircumellipse />}></Route>


        {/*                Hyperbola                   */}
        <Route path="hyperbola" element={<Hyperbola />}></Route>
        <Route path="attributesel" element={<AttributesEl />}></Route>
        
        
        {/*                Others                   */}
        <Route path="contactus" element={<Contactus />}></Route>


          {/* <Route index element={<App />} />
          <Route path="blogs" element={<Blogs />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

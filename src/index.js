import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './font/stylesheet.css'
import './index.css';
import App from './pages/App';
import Circle from './pages/circle';
import Ellipse from './pages/ellipse';
import Hyperbola from './pages/hyperbola';
import Distance from './pages/line/distance';
import Perpendicular from './pages/line/perpendicular';
import PointOfInt from './pages/line/pointOfInt';
import PointSlopeForm from './pages/line/pointSlopeForm';
import SlopeLine from './pages/line/slopeLine';
import TwoPointForm from './pages/line/twoPointForm';
import Xyintercept from './pages/line/xyintercept';
import LineCal from './pages/lineCal';
import Parabola from './pages/parabola';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="lineCal" element={<LineCal />}></Route>
        <Route path="distance" element={<Distance />}></Route>
        <Route path="slopeLine" element={<SlopeLine />}></Route>
        <Route path="pointofint" element={<PointOfInt />}></Route>
        <Route path="xyintercept" element={<Xyintercept />}></Route>
        <Route path="perpendicular" element={<Perpendicular />}></Route>
        <Route path="twopointform" element={<TwoPointForm />}></Route>
        <Route path="pointslopeform" element={<PointSlopeForm />}></Route>
        <Route path="circle" element={<Circle />}></Route>
        <Route path="parabola" element={<Parabola />}></Route>
        <Route path="ellipse" element={<Ellipse />}></Route>
        <Route path="hyperbola" element={<Hyperbola />}></Route>

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

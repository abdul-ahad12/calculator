import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Line from './calculations/line';
import './font/stylesheet.css'
import './index.css';
import App from './pages/App';
import LineCal from './pages/lineCal';

import MainLayout from './pages/mainLayout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/pages/lineCal" element={<LineCal />}></Route>
          {/* <Route index element={<App />} />
          <Route path="blogs" element={<Blogs />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

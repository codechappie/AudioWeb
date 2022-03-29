import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AudioListPage from './pages/AudioListPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/audios/:bookId" element={<AudioListPage />}></Route>
      <Route path="/audios/:bookId/:unit" element={<AudioListPage />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

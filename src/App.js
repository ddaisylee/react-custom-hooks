import React from 'react';
import { Route, Routes } from 'react-router';
import UseInputPage from './pages/UseInputPage';


const App = () => {
  return (
    <Routes>
      <Route path='use-input' element={<UseInputPage />} />
    </Routes>
  );
};

export default App;
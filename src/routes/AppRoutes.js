import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Create from '../pages/create/Create';

const AppRoutes = () => {
   return (
      <Routes>
         <Route index element={<Home />} />
         <Route path='/create' element={<Create />} />
      </Routes>
   );
};

export default AppRoutes;

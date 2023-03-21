import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (

    <Routes>

      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="profile" element={<Profile />} />
      </Route>


    </Routes>

  );
}

export default App;

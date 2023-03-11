import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FormFormik from './components/FormFormik';
import Form from './components/Form';
import LoginForm from './components/LoginForm';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to={'formformik'}>Formik Form</Link>
          </li>
          <li>
            <Link to={'form'}>Default Form</Link>
          </li>
          <li>
            <Link to={'loginform'}>Login Form</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='formformik' element={<FormFormik />} />
        <Route path='form' element={<Form />} />
        <Route path='loginform' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;



import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import Layout from './component/Layout';
import PaycheckCalculatorContextProvider from './context/PaycheckCalculatorContext';

function App() {
  return (
    <div>
        <PaycheckCalculatorContextProvider>
          <Title />
          <Layout />
        </PaycheckCalculatorContextProvider>
    </div>
  );
}

export default App;
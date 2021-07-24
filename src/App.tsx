import React from 'react';
import { BrowserRouter, useRouteMatch } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
import { Routes } from './routes';

import GlobalStyle from "./styles/global";

interface Params {
  code: string;
}

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>

      <GlobalStyle/>
    </ToastProvider>
  );
}

export default App;

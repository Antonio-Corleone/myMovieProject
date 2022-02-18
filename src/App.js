//import library
import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import routes
import { renderRoutesHome } from './routes';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

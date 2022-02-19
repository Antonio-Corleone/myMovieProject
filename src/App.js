//import library
import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import routes
import { renderRoutesHome } from './routes';
import PageNotFound from './views/PageNotFound';
import AuthPage from './views/AdminModule/AuthPage';


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          <Route path="/auth" component={AuthPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

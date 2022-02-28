//import library
import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import routes
import { renderRoutesHome } from './routes';
import PageNotFound from './views/PageNotFound';
import AuthPage from './views/AdminModule/AuthPage';
import SignIn from './views/FormModal/SignIn';
import SignUp from './views/FormModal/SignUp';
import BookingPage from './views/HomeModule/BookingPage'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/booking/:showid" component={BookingPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

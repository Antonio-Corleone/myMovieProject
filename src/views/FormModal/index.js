import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import WrapperModal from './WrapperModal';
const SignInModal = WrapperModal(SignIn);
const SignUpModal = WrapperModal(SignUp);
export default function FormModal(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignInModal} />
          <Route path="/signup" component={SignUpModal} />
        </Switch>
      </BrowserRouter>
    </>

  )
}

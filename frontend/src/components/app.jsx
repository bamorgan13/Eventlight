import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router-dom'

import MainPage from './main/main_page'

import NavBarContainer from './nav/navbar_container'
import LoginFormContainer from './session/login_form_container'
import RegisterFormContainer from './session/register_form_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
    </Switch>
  </div>
)

export default App

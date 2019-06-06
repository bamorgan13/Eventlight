import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import MainPage from './main/main_page'

import NavBarContainer from './nav/navbar_container'
import LoginFormContainer from './session/login_form_container'
import RegisterFormContainer from './session/register_form_container'
import EventIndexContainer from './events/event_index_container'

const App = () => (
<<<<<<< HEAD
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
    </Switch>
  </div>
=======
	<div>
		<NavBarContainer />
		<Switch>
			<Route exact path="/" component={MainPage} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/register" component={RegisterFormContainer} />
			<Route exact path="/events" component={EventIndexContainer} />
		</Switch>
	</div>
>>>>>>> master
)

export default App

import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import MainPageContainer from './main/main_page_container.js'

import NavBarContainer from './nav/navbar_container'
import LoginFormContainer from './session/login_form_container'
import RegisterFormContainer from './session/register_form_container'
import EventIndexContainer from './events/event_index_container'

const style = {
	fontFamily: `Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif`
}

const App = () => (
	<div style={style}>
		<NavBarContainer />
		<Switch>
			<Route exact path="/" component={MainPageContainer} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/register" component={RegisterFormContainer} />
			<Route exact path="/events" component={EventIndexContainer} />
		</Switch>
	</div>
)

export default App

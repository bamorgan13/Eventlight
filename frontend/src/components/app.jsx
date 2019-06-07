import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import MainPage from './main/main_page'

import NavBarContainer from './nav/navbar_container'
import LoginFormContainer from './session/login_form_container'
import RegisterFormContainer from './session/register_form_container'
import EventIndexContainer from './events/event_index_container'
import EventShowContainer from './events/event_show_container'
import LikeIndexContainer from './likes/like_index_container'

const style = {
	fontFamily: `Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif`
}

const App = () => (
	<div style={style}>
		<NavBarContainer />
		<Switch>
			<Route exact path="/" component={MainPage} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/register" component={RegisterFormContainer} />
			<Route exact path="/events" component={EventIndexContainer} />
			<Route path="/events/:eventId" component={EventShowContainer} />
			<Route exact path="/likes" component={LikeIndexContainer} />
		</Switch>
	</div>
)

export default App

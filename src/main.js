import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />			
			<Route path="about" component={About} />
		</Route>
	</Router>
), document.getElementById('app'));
	

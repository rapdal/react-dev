import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import store from './store'

import Base from './components/layouts/Base'

import HomeContainer from './components/containers/HomeContainer'

import About from './components/About'

let rootElement = document.getElementById('app')

render((
	<Provider store = {store}>
		<Router history={browserHistory}>
			<Route path="/" component={Base}>					
				<IndexRoute component={HomeContainer} />			
				<Route path="about" component={About} />	
			</Route>	
		</Router>
	</Provider>
), rootElement);
	

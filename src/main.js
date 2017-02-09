import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import store from './store'

import App from './components/App'

import ItemsContainer from './components/containers/ItemsContainer'

import About from './components/About'

let rootElement = document.getElementById('app')

render((
	<Provider store = {store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>				
				<IndexRoute component={ItemsContainer} />			
				<Route path="about" component={About} />
			</Route>
		</Router>
	</Provider>
), rootElement);
	

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import {Col} from 'react-bootstrap/lib'

const style = {
  container: {
    padding: '0 0 15px'
  }  
}

export default class About extends React.Component {
	render() {
		return (
			<Col sm={12} style={style.container}>
				<h3>React Template Project</h3>
				<div>by <a href="https://github.com/rapdal/react-dev">Rad Apdal</a></div>
			</Col>
		);
	}
}
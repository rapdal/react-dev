import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
	  return (
			<div>
				<h1>Header</h1>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</ul>
				<div>{this.props.data}</div>
			</div>			
	  );
  }
}
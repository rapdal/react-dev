import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import store from '../store'

import {Nav, NavItem} from 'react-bootstrap/lib'

export default class HeaderContainer extends React.Component {

	constructor(props){super(props)}

	dispatch(type, item) {
		store.dispatch({type, item});	
	}

	handleSelect(selectedKey) {
	  this.dispatch('UPDATE_ITEM', selectedKey);
	}

  render() {
  	console.log(this.props)
	  return (
			<div>
				<h1>Header</h1>
				<Nav bsStyle="pills" activeKey={this.props.key} onSelect={this.handleSelect}>
					<LinkContainer to="/">
			    	<NavItem eventKey={1}>Home</NavItem>
			    </LinkContainer>
			    <LinkContainer to="/about">
			    	<NavItem eventKey={2}>About</NavItem>			    
			    </LinkContainer>
			  </Nav>				
				<div>{this.props.data}</div>
			</div>			
	  );
  }
}
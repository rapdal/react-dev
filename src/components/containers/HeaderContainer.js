import React from 'react'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import store from '../../store'

import {Col, Nav, NavItem} from 'react-bootstrap/lib'

class HeaderContainer extends React.Component {

	constructor(props){
		super(props)
		this.dispatch = this.dispatch.bind(this)
		this.handleSelect = this.handleSelect.bind(this)
	}

	dispatch(type, item) {
		store.dispatch({type, item});	
	}

	handleSelect(selectedKey) {
	  this.dispatch('UPDATE_ITEM', selectedKey);
	}

  render() {  	
	  return (
			<div>
				<h1>Header</h1>
				<Nav bsStyle="pills" activeKey={this.props.item > 0 ? this.props.item : 1} onSelect={this.handleSelect}>					
			    	<IndexLinkContainer to="/">
			    		<NavItem eventKey={1}>Home</NavItem>
			    	</IndexLinkContainer>
			    	<IndexLinkContainer to="/about">			   
			    		<NavItem eventKey={2}>About</NavItem>	
			    	</IndexLinkContainer>		    			    
			  </Nav>				
				<div>{this.props.data}</div>
			</div>
	  );
  }
}

const mapStateToProps = function(store) {		
  return {
    item: store.menuReducer
  };
};

export default connect(mapStateToProps)(HeaderContainer);
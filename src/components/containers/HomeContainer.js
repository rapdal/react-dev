import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import store from '../../store'

import {Col} from 'react-bootstrap/lib'
import { SingleInputForm, List } from '../Elements'

const style = {
  container: {
    padding: '15px 0'
  },
  list: {
  	marginTop: '10px'
  }
}

class HomeContainer extends React.Component {  

	constructor(props) {
		super(props)		
	}

	dispatch(type, data) {
		store.dispatch({type, data});			
	}

	componentDidMount() {
		this.dispatch('GET_ITEMS_REQUEST');		
		axios.get('/api/todos').then(response => {			
			this.dispatch('GET_ITEMS_SUCCESS', response.data);
    });
	}

	validate(item) {
		if (item.length > 0) {
			this.add(item)	
			this.dispatch('VALIDATE_ITEM_DEFAULT')		
		} 
		else {
			this.dispatch('VALIDATE_ITEM_FAILURE')
		}
	}

	add(item) {
		if(item && item.length) {		
			axios.post('/api/todos', {
				title: item
			})
			.then(response => {		
				this.dispatch('ADD_ITEM', response.data);
			}); 
		}  
	}

	render() {			
		return (			
			<Col sm={12} style={style.container}>
				<SingleInputForm validation={this.props.validation} validate={(item) => this.validate(item)} />
				<div style={style.list}>
					<List items={this.props.items} />		
				</div>		
			</Col>
		);
	}
}

const mapStateToProps = function(store) {			
  return {
    items: store.listReducer,
    validation: store.validateReducer
  };
};

export default connect(mapStateToProps)(HomeContainer);
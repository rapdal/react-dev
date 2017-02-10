import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
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

	dispatch(type, item) {
		store.dispatch({type, item});	
	}

	render() {			
		return (			
			<Col sm={12} style={style.container}>
				<SingleInputForm add={(item) => this.dispatch('ADD_ITEM', item)} />
				<div style={style.list}>
					<List items={this.props.items} />		
				</div>		
			</Col>
		);
	}
}

const mapStateToProps = function(store) {		
  return {
    items: store.listReducer
  };
};

export default connect(mapStateToProps)(HomeContainer);
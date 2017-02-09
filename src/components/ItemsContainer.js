import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import store from '../store'

import { Items, ItemForm } from './Items'

class ItemsContainer extends React.Component {  

	dispatch(item) {
		store.dispatch({
			type: 'ADD_ITEM',
			item
		});	
	}

	render() {							
		return (			
			<div>
				<h1>Home</h1>	
				<ItemForm add={(item) => this.dispatch(item)} />
				{this.props.items.map(
					(items, i) => <Items key={i} data={items} />
				)}		
			</div>
		);
	}
}

const mapStateToProps = function(store) {		
  return {
    items: store.itemsReducer
  };
};

export default connect(mapStateToProps)(ItemsContainer);
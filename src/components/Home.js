import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import store from '../store'

import { Items, ItemForm } from './Items'

class Home extends React.Component {
	// constructor(props) {
 //    super(props);
	
 //    this.state = {      
 //      items: ['Sample'],
 //      itemInput: ''
 //    }

 //    this.addItems = this.addItems.bind(this);    
 //  }

  // addItems() {  	
  // 	let item = this.state.itemInput
  // 	let itemArray = this.state.items
  // 	itemArray.push(item)
  // 	this.setState({items:itemArray});
  // }

  componentDidMount() {  
  	console.log(store.items) 
    // store.dispatch({
    //   type: 'ADD_ITEM',
    //   items: ''
    // });
  }

	render() {
		console.log('home', this.props.children)
		return (			
			<div>
				<h1>Home</h1>
							
			</div>
		);
	}
}

const mapStateToProps = function(store) {
  return {
    items: store.items
  };
};

export default connect(mapStateToProps)(Home);
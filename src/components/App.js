import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import { Items, ItemForm } from './Items'

export default class App extends React.Component {
	constructor(props) {
    super(props);
	
    this.state = {
      header: {
      	data: "Static header from state"
      },
      items: ['Sample'],
      itemInput: ''
    }

    this.addItems = this.addItems.bind(this);
    this.updateItemInput = this.updateItemInput.bind(this);
  }

  addItems() {
  	console.log('asd')
  	let item = this.state.itemInput
  	let itemArray = this.state.items
  	itemArray.push(item)
  	this.setState({items:itemArray});
  }

  updateItemInput(e) {
  	this.setState({itemInput:e.target.value});
  }

  render() {
    return (
       <div>
          <Header data={this.state.header.data} />	
          <div>{this.props.children}</div>
          <ItemForm data={this.state.itemInput} update={this.updateItemInput} add={this.addItems} />                    
          <h4>State Array: </h4>
          <ul>
          	{this.state.items.map((item, i) => <Items key={i} data={item} />)}
          </ul>
       </div>        
    );
  }
}

App.propTypes = {
	contentData: React.PropTypes.string.isRequired
}

App.defaultProps = {
	contentData: "Content from props"
}

class Header extends React.Component {
  render() {
	  return (
			<div>
				<h1>{this.props.data}</h1>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</ul>
			</div>			
	  );
  }
}
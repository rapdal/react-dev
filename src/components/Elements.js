import React from 'react'
import ReactDOM from 'react-dom'

import {Col, Form, FormControl, Button} from 'react-bootstrap/lib'

export class SingleInputForm extends React.Component {
  handleClick() {    
    const node = ReactDOM.findDOMNode(this.refs.input)      
    const text = node.value
    this.props.add(text)
    node.value = ""
  }

  render() {
    return (          
    	<Form inline>
    		  <FormControl type="text" ref="input" />
    		  <Button bsStyle="info" onClick={(e) => this.handleClick(e)}>Add</Button>
    	</Form>           	    
    );
  }
}

class ListItem extends React.Component {
  render() {
    return (<li>{this.props.item}</li>)
  }
}

export class List extends React.Component {
	render() {
		return (
      <ul>
         {this.props.items.map((item, i) => (<ListItem key={i} item={item} />))}
			</ul>
		);
	}
}
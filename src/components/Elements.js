import React from 'react'
import ReactDOM from 'react-dom'

import {
  Col, Button, HelpBlock,
  Form, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap/lib'

export class SingleInputForm extends React.Component {  

  handleClick(e) {    
    const node = ReactDOM.findDOMNode(this.refs.input)      
    const text = node.value
    this.props.validate(text)
    node.value = ""
  }

  render() {
    return (          
    	<Form inline>
        <FormGroup controlId="formBasicText" validationState={this.props.validation}>            
    		  <FormControl type="text" ref="input" />             		 
    	 </FormGroup>
       <Button bsStyle="info" onClick={(e) => this.handleClick(e)}>Add</Button>
      </Form>           	    
    );
  }
}

class ListItem extends React.Component {
  render() {
    return (<li>{this.props.item.title}</li>)
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
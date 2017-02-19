import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { reduxForm, Field, SubmissionError } from 'redux-form';
import {
  Row, Col, Button, ButtonToolbar, HelpBlock, Glyphicon,
  Form, FormGroup, FormControl, ControlLabel,
  ListGroup, ListGroupItem, Accordion, Panel
} from 'react-bootstrap/lib'

import ToolbarForm from './Forms'

const style = {
  list: {
    listStyleType: 'none'
  }, 
  accordionItem: {
    marginBottom: '5px'
  },
}

export class SingleInputForm extends Component {
  constructor(props) {
    super(props)    
  }

  handleSubmit(e) {      
    const node = ReactDOM.findDOMNode(this.refs.input)
    const text = node.value 
    node.value = ""     
    this.props.addTodo(text)
  }

  render() {
    return (          
    	<Form inline>
        <FormGroup validationState={this.props.validation}>            
    		  <FormControl name="todoText" type="text" ref="input" />             		 
    	 </FormGroup>
       <Button bsStyle="info" onClick={(e) => this.handleSubmit(e)}>Add List</Button>
      </Form>           	    
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <li style={style.listItem}>{this.props.item.title || this.props.item.content}</li>
    )
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

class AccordionItem extends Component {    
  render() {     
    const { item, index, handleSubmit } = this.props

    let list = null;
    if (item.items.length) {
      list = <ul>{item.items.map((subitem, i) => (<ListItem key={i} item={subitem} index={i+1} />))}</ul> 
    }
    else {
      list = <div>No tasks here.</div>
    }   
    
    return (  
      <div style={style.accordionItem}>   
        <ToolbarForm form={`toolbar_${item.id}`} item={item} onSubmit={handleSubmit} />
        <Panel header={item.title} eventKey={index} collapsible>        
          {list}            
        </Panel>  
      </div>    
    )        
  }
}

export class AccordionList extends Component { 
  handleSubmit = (formData) => {       
    this.props.addTask(formData)
  }

  render() {    
    return (
      <Accordion>{this.props.items.map((item, i) => (
        <AccordionItem key={i} item={item} index={i+1} handleSubmit={this.handleSubmit} />
      ))}</Accordion>
    );    
  }
}
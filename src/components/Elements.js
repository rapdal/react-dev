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
    const { todo, items, index, handleSubmit } = this.props
    
    let list = null;
    if (items && items.length) {
      list = <ul>{items.map((subitem, i) => (<ListItem key={i} item={subitem} index={i+1} />))}</ul> 
    }
    else {
      list = <div>No tasks here.</div>
    }   
    
    return (  
      <div style={style.accordionItem}>   
        <ToolbarForm form={`toolbar_${todo.id}`} id={todo.id} onSubmit={handleSubmit} />
        <Panel header={todo.title} eventKey={index} collapsible>        
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

  getItems = (key) => {    
    let itemArray = []
    const todoId = key
    const item = this.props.item || {}
    Object.keys(item).map((key, i) => {
      if (item[key].todoId == todoId) {
        itemArray.push(item[key])
      }
    });    
    return itemArray;
  }

  render() { 
    const todo = this.props.todo || {}
    return (
      <Accordion>
        {Object.keys(todo).map((key, i) => {
          return <AccordionItem key={i} todo={todo[key]} items={this.getItems(key)} handleSubmit={this.handleSubmit} />
        })}
      </Accordion>
    );    
  }
}
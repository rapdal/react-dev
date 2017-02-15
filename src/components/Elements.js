import React from 'react'
import ReactDOM from 'react-dom'

import {
  Col, Button, HelpBlock,
  Form, FormGroup, FormControl, ControlLabel,
  ListGroup, ListGroupItem, Accordion, Panel
} from 'react-bootstrap/lib'

const style = {
  list: {
    listStyleType: 'none'
  },
  list_item: {
    cursor: 'pointer'
  }
}

export class SingleInputForm extends React.Component {  
  handleClick(e) {    
    const node = ReactDOM.findDOMNode(this.refs.input)      
    const text = node.value
    this.props.addTodo(text)
    node.value = ""
  }
  render() {
    return (          
    	<Form inline>
        <FormGroup controlId="formBasicText" validationState={this.props.validation}>            
    		  <FormControl type="text" ref="input" />             		 
    	 </FormGroup>
       <Button bsStyle="info" onClick={(e) => this.handleClick(e)}>Add List</Button>
      </Form>           	    
    );
  }
}

class ListItem extends React.Component {
  render() {
    return (<li style={style.list_item}>{this.props.item.title || this.props.item.content}</li>)
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

class AccordionItem extends React.Component {
  handleClick(id) {
    console.log(id)
  }

  render() {     
    let list = null;
    if (this.props.item.items.length) {
      list = <ul>{this.props.item.items.map((subitem, i) => (<ListItem key={i} item={subitem} index={i+1} />))}</ul> 
    }
    else {
      list = <div>No tasks here.</div>
    }

    return (         
      <Panel header={this.props.item.title} eventKey={this.props.index} collapsible>
        {list}
        <Button bsStyle="info" onClick={(e) => this.handleClick(this.props.item.id)}>Add Task</Button>            
      </Panel>      
    )        
  }
}

export class AccordionList extends React.Component {  
  render() {    
    return (
      <Accordion>{this.props.items.map((item, i) => (<AccordionItem key={i} item={item} index={i+1} />))}</Accordion>
    );    
  }
}
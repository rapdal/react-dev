import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import {
  Row, Col, Button, ButtonToolbar, HelpBlock, Glyphicon,
  Form, FormGroup, FormControl, ControlLabel,
  ListGroup, ListGroupItem, Accordion, Panel
} from 'react-bootstrap/lib'

const style = {
  button: {
    marginTop: '5px',
    marginRight: '5px'
  },
  toolbar: {
    marginTop: '5px',
    marginRight: '5px'
  },
  error: {
    marginTop: '5px',
    marginRight: '5px',
    borderColor: '#a94442',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
  }
}

function validate(values) {
  const errors = {}

  if(!values.content) {
    errors.content = "Please input a task."
  }

  return errors
}

const renderField = (field) => {     
  if (field.meta.touched && field.meta.error) {
    return (
      <FormControl {...field.input} style={style.error} />
    );
  }  
  else {
    return (
      <div className="input-row">    
        <FormControl {...field.input} style={style.toolbar} />
      </div>
    );
  }
};

class ToolbarForm extends Component {
  handleInitialize() {
    const initData = {
      'id': this.props.id, 
    }
    this.props.initialize(initData);
  }  
  componentDidMount() {
    this.handleInitialize();    
  } 
  render() {    
    const  { id, handleSubmit } = this.props;
    return (
      <div>
        <Button type="submit" bsSize="sm" className="pull-right" style={style.button}><Glyphicon glyph="trash" /></Button>    
        <Form onSubmit={handleSubmit} inline className="pull-right"> 
          <FormGroup bsSize="sm" >
            <Field name="content" component={renderField} type="text" /> 
            <Field name="id" component="input" type="hidden" style={style.toolbar}/>                                             
          </FormGroup>
          <Button type="submit" bsSize="sm" style={style.button}><Glyphicon glyph="plus" /></Button>          
        </Form>
      </div>        
    );
  }
}

ToolbarForm = reduxForm({  
  validate
})(ToolbarForm);

export default ToolbarForm;
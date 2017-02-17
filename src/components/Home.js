import React from 'react'
import ReactDOM from 'react-dom'

import {Col} from 'react-bootstrap/lib'
import { SingleInputForm, AccordionList } from './Elements'

const style = {
  container: {
    padding: '15px 0'
  },
  list: {
  	marginTop: '10px'
  }
}

class Home extends React.Component {  

	constructor(props) {
		super(props)		
	}	

	componentDidMount() {
		this.props.getTodosRequest();			
	}

	addTodo(title) {
		this.props.addTodoRequest(title);
	}

	addTask(formData) {	
		this.props.addTaskRequest(formData);
	}

	render() {			
		return (			
			<Col sm={12} style={style.container}>
				<SingleInputForm validation={this.props.todos.valid} addTodo={(title) => this.addTodo(title)} />
				<div style={style.list}>					
					<AccordionList items={this.props.todos.todo} addTask={(formData) => this.addTask(formData)}/>
				</div>	
			</Col>
		);
	}
}

export default Home;
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

	/*
	addList(item) {
		let isValid = this.validate(item);
		if(isValid) {		
			axios.post('/api/todos', {
				title: item
			})
			.then(response => {		
				this.dispatch('ADD_ITEM', response.data);
			}); 
		}  
	}
	*/

	/*
	addTask(item) {
		let isValid = this.validate(item);
		if(isValid) {
			axios.post(`/api/todos/${item.id}/items`, {
				title: item.content
			})
			.then(response => {		
				this.dispatch('ADD_ITEM', response.data);
			}); 
		}
	}
	*/

	render() {			
		return (			
			<Col sm={12} style={style.container}>
				<SingleInputForm validation={this.props.todo_input} addTodo={(title) => this.addTodo(title)} />
				<div style={style.list}>					
					<AccordionList items={this.props.todos.items} />
				</div>	
			</Col>
		);
	}
}

export default Home;
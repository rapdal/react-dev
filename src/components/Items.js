import React from 'react'
import ReactDOM from 'react-dom'

export class ItemForm extends React.Component {
  handleClick() {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.add(text)
    node.value = ""
  }

  render() {
    return (
      <div>
      	<div>
      		<input type="text" ref="input" />
      		<button onClick={(e) => this.handleClick(e)}>Add</button>
      	</div>      	
      </div>
    );
  }
}

export class Items extends React.Component {
	render() {
		return (
			<li>{this.props.data}</li>
		);
	}
}
import React from 'react'
import ReactDOM from 'react-dom'

export class ItemForm extends React.Component {
  render() {
    return (
      <div>
      	<div>
      		<input type="text" onChange={this.props.update} />
      		<button onClick={this.props.add}>Add</button>
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
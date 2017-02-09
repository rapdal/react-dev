import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

export default class App extends React.Component {
	constructor(props) {
    super(props); 
  }

  render() {
    return (
       <div>          
          <Header data={this.props.children} />	
          <footer>Footer</footer>          
       </div>        
    );
  }
}
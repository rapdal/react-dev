import React from 'react'
import ReactDOM from 'react-dom'

import HeaderContainer from '../containers/HeaderContainer'

export default class Base extends React.Component {
	constructor(props) {
    super(props)
  }
  
  render() {
    return (
       <div>          
          <HeaderContainer />
          {this.props.children}
          <footer>Footer</footer>          
       </div>        
    );
  }
}
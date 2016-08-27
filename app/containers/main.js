import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators }  from '../actions'
import Home from '../views/home'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <Home {...this.props}/>
      )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => { return {} }, mapDispatchToProps)(Main)
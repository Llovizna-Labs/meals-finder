import React, { Component, } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Image
} from 'react-native'

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { ActionCreators }  from '../actions'

class Home extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      recipeCount: 0
    }
  }
  
  addRecipe() {
    this.props.addRecipe()
  }
  
  removeRecipe() {
    this.props.removeRecipe()
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <View>
        <Text style={styles.text}> Hello World from main ! Count: {this.props.recipeCount}</Text>
          <View style={styles.row}>
          <TouchableHighlight
            onPress={() => { this.removeRecipe()}}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Text style={styles.text}>Decrease</Text>
          </TouchableHighlight>
            <TouchableHighlight
            onPress={() => { this.addRecipe()}}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Text style={styles.text}>Increase</Text>
          </TouchableHighlight>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    margin:0
  },
  text: {
    marginTop: 40,
    textAlign: 'center'
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {return {  recipeCount: state.recipeCount }}, mapDispatchToProps)(Home)
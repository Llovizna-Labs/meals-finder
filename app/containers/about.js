import React, { Component, } from 'react'
import { View, Text} from 'react-native'

class About extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>About</Text>
      </View>
    )
  }
}

export default About
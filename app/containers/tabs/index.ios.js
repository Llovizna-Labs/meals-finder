import {View, TabBarIOS, TabBarItemIOS, StyleSheet  } from 'react-native'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions';
import Home from '../home'
import About from '../about'

class ApplicationTabs extends Component {

  renderScene(component) {
    return ( <View style={styles.tab}>{React.createElement(component, this.props)}</View>)
  }

  onPress(index) {
    this.props.setTab(index)
  }

  render() {
    return (<TabBarIOS style={styles.tab}>
        <TabBarIOS.Item
          systemIcon="favorites"
          iconSize={25}
          selected={this.props.tabs.index === 0}
           onPress={() => { return this.onPress(0)}}>
          {this.renderScene(Home)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          iconSize={25}
          selected={this.props.tabs.index === 1}
          onPress={() => { return this.onPress(1)}} >
          {this.renderScene(About)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          iconSize={25}
          selected={this.props.tabs.index === 2}
          onPress={() => { return this.onPress(2)}} >
          {this.renderScene(About)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          iconSize={25}
          selected={this.props.tabs.index === 3}
          onPress={() => { return this.onPress(3)}} >
          {this.renderScene(About)}
        </TabBarIOS.Item>
    </TabBarIOS>)
  }
}

function  mapStateToProps(state) {
  return {
    tabs: state.tabs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


const styles = StyleSheet.create({
  tab: {
    flex: 1
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs)

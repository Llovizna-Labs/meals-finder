import React, { Component, } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators }  from '../actions'

class Detail extends Component {

  recipe() {
    if (!this.props.navigationParams) return null
    return this.props.searchedRecipes[this.props.navigationParams.id]
  }

  render() {
    const recipe = this.recipe()

    if (!recipe) return null

    return (
      <View>
      <TouchableHighlight onPress={() => this.props.navigateBack()} style={styles.navigation}>
      <Text style={{color: 'white'}}>Back</Text>
      </TouchableHighlight>
      <View>
        <Image source= { {uri: recipe.thumbnail}} style={styles.image}></Image>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    flex:1,
    backgroundColor: 'black',
    paddingVertical: 20
  },
  image: {
    height:  150
  },
  recipeTitle: {
    padding:10
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps(state) {
  return {
    searchedRecipes:  state.searchedRecipes,
    navigationParams: state.navigationParams
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

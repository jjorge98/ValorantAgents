import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return <View style={styles.mainView}></View>;
    // Do logo and then flat list
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    backgroundColor: '#ff4457',
    height: '100%',
  },
});

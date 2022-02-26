import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class ButtonText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text style={styles.btnText}>{this.props.title}</Text>;
  }
}

const styles = StyleSheet.create({
  btnText: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
});

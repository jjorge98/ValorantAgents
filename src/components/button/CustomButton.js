import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ButtonText from './ButtonText';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onPressFunction } = this.props;
    return (
      <TouchableOpacity style={styles.btnArea} onPress={onPressFunction}>
        <ButtonText title={title} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnArea: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    backgroundColor: '#0a1b1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

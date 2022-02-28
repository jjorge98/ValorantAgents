import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, TextInput } from 'react-native';

export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, keyboard, isSecure, changeFunction } = this.props;
    return (
      <Animatable.View style={styles.mainView} animation="fadeIn">
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="rgba(12, 26, 31, 0.7)"
          keyboardType={keyboard}
          secureTextEntry={isSecure}
          onChangeText={changeFunction}
        />
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    borderColor: '#0a1b1f',
    borderWidth: 2,
    marginVertical: 5,
  },
  input: {
    paddingHorizontal: 15,
  },
});

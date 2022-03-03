import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native';
import { colors } from '../assets/styles/colors';
import { styles } from '../assets/styles/styles';

export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, keyboard, isSecure, changeFunction } = this.props;
    return (
      <Animatable.View style={styles.mainViewCI} animation="fadeIn">
        <TextInput
          style={styles.inputCI}
          placeholder={placeholder}
          placeholderTextColor={colors.trasparentDarkGray7}
          keyboardType={keyboard}
          secureTextEntry={isSecure}
          onChangeText={changeFunction}
        />
      </Animatable.View>
    );
  }
}

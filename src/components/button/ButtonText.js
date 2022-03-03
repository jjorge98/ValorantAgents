import * as React from 'react';
import { Text } from 'react-native';
import { styles } from '../../assets/styles/styles';

export default class ButtonText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text style={styles.btnTextBT}>{this.props.title}</Text>;
  }
}

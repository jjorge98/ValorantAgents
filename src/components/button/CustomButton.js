import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles/styles';
import ButtonText from './ButtonText';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onPressFunction } = this.props;
    return (
      <TouchableOpacity style={styles.btnAreaCB} onPress={onPressFunction}>
        <ButtonText title={title} />
      </TouchableOpacity>
    );
  }
}

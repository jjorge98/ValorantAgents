import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../assets/styles/styles';

export default class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <View>
        <Image
          style={styles.imgCH}
          source={require('../assets/images/valorantLogo.png')}
        />
        <Text style={styles.titleCH}>{title}</Text>
        <Text style={styles.descriptionCH}>{description}</Text>
      </View>
    );
  }
}

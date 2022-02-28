import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <View>
        <Image
          style={styles.img}
          source={require('../assets/images/valorantLogo.png')}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'fantasy',
    alignSelf: 'center',
    color: '#0a1b1f',
    fontWeight: '600',
  },
  description: {
    fontSize: 18,
    fontFamily: 'fantasy',
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});

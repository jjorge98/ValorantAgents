import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native-animatable';

export default class AgentDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.content.length ? (
      <View style={styles.mainView} animation="bounceInRight">
        <Text style={styles.title}>{this.props.title} : </Text>
        <Text style={styles.content}>{this.props.content}</Text>
      </View>
    ) : (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
    paddingHorizontal: 13,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
  },
  title: {
    fontSize: 17,
    color: '#0a1b1f',
    flex: 1,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    fontSize: 16,
    color: '#616161',
  },
});

import * as React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-animatable';
import { styles } from '../assets/styles/styles';

export default class AgentDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.content.length ? (
      <View style={styles.mainViewAD} animation="bounceInRight">
        <Text style={styles.titleAD}>{this.props.title} : </Text>
        <Text style={styles.contentAD}>{this.props.content}</Text>
      </View>
    ) : (
      <View />
    );
  }
}

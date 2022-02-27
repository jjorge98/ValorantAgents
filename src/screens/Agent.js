import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';

export default class Agent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agent: props.route.params.agent,
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <CustomHeader title={this.state.agent.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    backgroundColor: '#ff4457',
    height: '100%',
  },
});

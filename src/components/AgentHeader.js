import * as React from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { View } from 'react-native-animatable';
import CustomButton from './button/CustomButton';

export default class AgentHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      modalImage: props.data.vertical1,
    };
    console.log(props);
  }

  render() {
    return (
      <View animation="bounceInLeft">
        <ScrollView
          horizontal
          pagingEnabled
          snapToAlignment={'center'}
          style={styles.scroll}>
          <TouchableOpacity
            style={styles.leftImg}
            onPress={() => {
              this.setState({
                isModalVisible: true,
                modalImage: this.props.data.vertical1,
              });
            }}>
            <Image source={this.props.data.horizontal1} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                isModalVisible: true,
                modalImage: this.props.data.vertical2,
              });
            }}>
            <Image source={this.props.data.horizontal2} />
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.title}>{this.props.data.name}</Text>

        <Modal animationType="slide" visible={this.state.isModalVisible}>
          <View style={styles.teste}>
            <Image source={this.state.modalImage} />
            <CustomButton
              title="Fechar"
              onPressFunction={() => {
                this.setState({
                  isModalVisible: false,
                });
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    marginVertical: 15,
  },
  leftImg: {
    marginRight: 10,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    fontFamily: 'fantasy',
    alignSelf: 'center',
    color: '#0a1b1f',
    fontWeight: '600',
  },
  teste: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ff4457',
    justifyContent: 'space-around',
  },
});

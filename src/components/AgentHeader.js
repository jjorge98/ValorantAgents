import * as React from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { styles } from '../assets/styles/styles';
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
          style={styles.scrollAH}>
          <TouchableOpacity
            style={styles.leftImgAH}
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

        <Text style={styles.titleAH}>{this.props.data.name}</Text>

        <Modal animationType="slide" visible={this.state.isModalVisible}>
          <View style={styles.modalViewAH}>
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

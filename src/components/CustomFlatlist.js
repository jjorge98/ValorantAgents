import * as React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../assets/styles/styles';

export default class CustomFlatlist extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }, navigation) => {
    return (
      <TouchableOpacity
        style={styles.listItemCF}
        onPress={() =>
          navigation.navigate('Agent', { screen: 'Agent', agent: item })
        }>
        <View style={styles.imgAreaCF}>
          <Image style={styles.imgCF} source={item.icon} />
        </View>
        <View style={styles.textAreaCF}>
          <Text style={styles.titleCF}>{item.name}</Text>
          <Text style={styles.subTitleCF}>
            Apelido(s): {item.aliases.length ? item.aliases : 'Não possui'}
          </Text>
          <Text style={styles.subTitleCF}>
            Codinome(s): {item.codename.length ? item.codename : 'Não possui'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { data, navigation } = this.props;

    return (
      <FlatList
        data={data}
        renderItem={item => this.renderItem(item, navigation)}
      />
    );
  }
}

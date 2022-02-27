import * as React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CustomFlatlist extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }, navigation) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          navigation.navigate('Agent', { screen: 'Agent', agent: item })
        }>
        <View style={styles.imgArea}>
          <Image style={styles.img} source={item.icon} />
        </View>
        <View style={styles.textArea}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>
            Apelido(s): {item.aliases.length ? item.aliases : 'Não possui'}
          </Text>
          <Text style={styles.subTitle}>
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

const styles = StyleSheet.create({
  listItem: {
    marginTop: 15,
    backgroundColor: '#ffffff',
    height: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0a1b1f',
  },
  imgArea: {
    flex: 2,
    marginStart: 15,
  },
  textArea: {
    flex: 5,
  },
  img: {
    height: '80%',
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0a1b1f',
  },
  subTitle: {
    fontSize: 15,
    color: '#0a1b1f',
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../../constants';

const notFound = require('../../assets/images/notfound.png');

const InvalidCity = () => {
  return (
    <View style={styles.container}>
      <Image source={notFound} style={{width: 200, height: 200}} />
      <Text style={styles.txt}>City Not Found</Text>
    </View>
  );
};

export {InvalidCity};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    gap: 20,
  },
  txt: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: Fonts.Medium,
  },
});

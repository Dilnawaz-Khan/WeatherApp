import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Home} from './src/screens';

const bg = require('./src/assets/images/background.jpg');

const App = () => {
  return (
    <ImageBackground source={bg} style={styles.imgContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <SafeAreaView style={styles.subContainer}>
        <Home />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight || 30 + 20,
  },
  subContainer: {
    flex: 1,
  },
});

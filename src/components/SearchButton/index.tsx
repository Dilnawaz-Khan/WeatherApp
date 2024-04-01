import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import {Colors, Fonts} from '../../constants';

const searchIcon = require('../../assets/icons/search.png');

interface SearchButtonProps {
  loading: boolean;
  onPress: () => void;
}

const SearchButton = ({loading, onPress}: SearchButtonProps) => {
  return (
    <Pressable disabled={loading} onPress={onPress} style={styles.container}>
      <Image source={searchIcon} style={styles.searchIcon} />
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.primary} />
      ) : (
        <Text style={styles.searchText}>Search</Text>
      )}
    </Pressable>
  );
};

export {SearchButton};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
    gap: 10,
  },
  searchText: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Fonts.Medium,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});

import {StyleSheet, TextInput} from 'react-native';
import {Colors, Fonts} from '../../constants';

interface SearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar = ({value, onChangeText}: SearchBarProps) => {
  return (
    <TextInput
      placeholder="Search Your City"
      placeholderTextColor={Colors.gray}
      value={value}
      onChangeText={onChangeText}
      style={styles.searchInput}
    />
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: Colors.lightGray,
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: Colors.black,
    fontFamily: Fonts.Regular,
  },
});

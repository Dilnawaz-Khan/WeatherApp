import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Fonts} from '../../constants';
import {Colors} from '../../constants/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar = ({value, onChangeText}: SearchBarProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Enter Your City Name..."
      placeholderTextColor={Colors.gray}
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

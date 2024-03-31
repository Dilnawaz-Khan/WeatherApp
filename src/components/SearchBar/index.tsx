import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar = ({value, onChangeText}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter Your City Name..."
        placeholderTextColor={Colors.gray}
        style={styles.searchInput}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
  },
  searchInput: {
    backgroundColor: Colors.lightGray,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

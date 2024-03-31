import {StyleSheet, Text, View} from 'react-native';
import {SearchBar, SearchButton, WeatherCard} from '../../components';
import {useEffect, useState} from 'react';
import {DAL} from '../../api';
import {Endpoints} from '../../constants';
import {WeatherResponse} from '../../types';
import {WeatherData} from '../../types/WeatherData';

const Home = () => {
  const [cityName, setCityName] = useState('Islamabad');
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleOnPress();
  }, []);

  const handleOnPress = async () => {
    if (!cityName) return;
    setIsLoading(true);
    try {
      const result = await DAL.GET(Endpoints.weather, cityName);
      setWeatherData(result);
      setCityName('');
    } catch (error) {
      console.log('Error: ', error);
      setWeatherData(undefined);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <SearchBar value={cityName} onChangeText={setCityName} />
      <SearchButton onPress={handleOnPress} loading={isLoading} />
      <WeatherCard data={weatherData} />
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
});

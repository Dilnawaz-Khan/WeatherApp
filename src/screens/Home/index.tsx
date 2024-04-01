import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar, SearchButton, WeatherCard} from '../../components';
import {DAL} from '../../api/DAL';
import {Endpoints} from '../../constants';
import {WeatherResponse} from '../../types';

const Home = () => {
  const [cityName, setCityName] = useState('Islamabad');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherResponse | undefined>();

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
      <SearchButton loading={isLoading} onPress={handleOnPress} />
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

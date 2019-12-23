import React from 'react';
import { View, Text } from 'react-native';
import { Main } from './src/components/Main';
import { TOKEN, URI, pointCenter, h, w } from './constants';

export default class App extends React.Component {
  state = {
    title: 'Weather App',
    data: null
  }

  componentDidMount = async () => {
    const { lat, lon } = pointCenter;
    try {
      const res = await fetch(`${URI}lat=${lat}&lon=${lon}&units=metric&APPID=${TOKEN}`)
      const data = await res.json();
      this.setState({ data });
    } catch (error) {
      console.error('Ошибка:', error)
    };
  }

  componentWillUnmount = () => {

  }

  render() {
    const { title, data } = this.state;

    return (
      <>
        <View>
          <Main title={title} />
          <Text>{(data) ? data.main.temp : null} градусов цельсия</Text>
        </View>
      </>
    );
  }
};




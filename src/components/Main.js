import Svg, {
  Circle,
  Ellipse,
  G,
  //Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  //Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Card } from './uikit';
import { h, w } from '../../constants';


const Main = (props) => {
  const { viewStyle, mainStyle } = styles;
  const { title } = props;
  console.log(w);

  return (
    <View style={mainStyle}>
      <View>
        <Header title={title} />
      </View>
      <View style={viewStyle}>
        <Card />


      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: '#33333D',
    width: w,
    height: h
  },
  viewStyle: {
    marginTop: 16,
    marginLeft: 16
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto Condensed',
    marginStart: 32
  },
});
export { Main };
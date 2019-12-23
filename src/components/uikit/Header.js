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
import { h, w } from '../../../constants';


const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M11 26H29V24H11V26ZM11 21H29V19H11V21ZM11 14V16H29V14H11Z" fill="white" />
      </Svg>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  viewStyle: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#373740',
    paddingLeft: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginStart: 16,
    fontWeight: '500',
    lineHeight: 23,
    fontStyle: 'normal'
  },
});
export { Header };
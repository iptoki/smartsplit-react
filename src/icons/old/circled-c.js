import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { Colors, Metrics } from '../theme';
import { getSize } from '../utils/utils';

export default function CircledC(props) {
  const color = props.color || Colors.stroke;
  const size = getSize(props.size, 128);
  const scale = size / 128;
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9993 64C15.9993 37.4904 37.4896 16 63.9993 16C90.509 16 111.999 37.4904 111.999 64C111.999 90.5097 90.509 112 63.9993 112C37.4896 112 15.9993 90.5097 15.9993 64ZM63.9993 5.33337C31.5986 5.33337 5.33264 31.5993 5.33264 64C5.33264 96.4007 31.5986 122.667 63.9993 122.667C96.4 122.667 122.666 96.4007 122.666 64C122.666 31.5993 96.4 5.33337 63.9993 5.33337ZM51.7705 76.2285C45.0167 69.4747 45.0167 58.5246 51.7705 51.7708C58.5243 45.017 69.4743 45.017 76.2281 51.7708C78.3109 53.8536 81.6878 53.8536 83.7706 51.7708C85.8534 49.688 85.8534 46.3112 83.7706 44.2284C72.8512 33.309 55.1474 33.309 44.228 44.2284C33.3086 55.1478 33.3086 72.8516 44.228 83.771C55.1474 94.6903 72.8512 94.6903 83.7706 83.771C85.8534 81.6882 85.8534 78.3113 83.7706 76.2285C81.6878 74.1457 78.3109 74.1457 76.2281 76.2285C69.4743 82.9823 58.5243 82.9823 51.7705 76.2285Z"
        fill={color}
        transform={`scale(${scale})`}
      />
    </Svg>
  );
}

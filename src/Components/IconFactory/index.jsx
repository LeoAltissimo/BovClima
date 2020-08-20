/* eslint-disable react/prop-types */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default ({
  svgJson,
  width,
  height,
  fill,
  custonFill,
  style,
}) => {
  const renderPath = () => {
    if (!svgJson) return null;

    let paths = [];

    if (svgJson.paths.length > 0) {
      paths = svgJson.paths.map((item, index) => {
        let corPreencimento = fill;

        if (custonFill?.index === index) {
          corPreencimento = custonFill.fill;
        }

        return (<Path d={item} fill={corPreencimento} key={item} />);
      });
    }

    return paths;
  };

  if (!svgJson) return null;

  return (
    <Svg
      tabIndex="-1"
      height={height}
      width={width}
      viewBox={svgJson.viewBox}
      style={style}
    >
      {renderPath()}
    </Svg>
  );
};

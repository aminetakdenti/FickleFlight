import * as React from 'react';
import Svg, {G, Mask, Path, SvgProps} from 'react-native-svg';

import {darkBlue, grey} from '../../constant';

type Props = SvgProps & {
  isFocused?: boolean;
};

export const ExploreIcon = (props: Props) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <G opacity={0.8}>
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={1}
          width={25}
          height={23}>
          <Path
            d="M21.653 5.787H4.003c-1.75 0-3.175 1.456-3.175 3.245v11.273c0 1.79 1.425 3.246 3.176 3.246h17.649c1.75 0 3.175-1.456 3.175-3.246V9.032c0-1.79-1.424-3.245-3.175-3.245zm1.236 14.518c0 .697-.555 1.264-1.236 1.264H4.003c-.681 0-1.236-.567-1.236-1.264V9.032c0-.697.555-1.264 1.237-1.264h17.649c.681 0 1.236.567 1.236 1.264v11.273zM15.034 1.277h-4.412c-1.75 0-3.175 1.456-3.175 3.246V22.56c0 .547.434.99.969.99a.98.98 0 00.97-.99V4.523c0-.697.554-1.264 1.236-1.264h4.412c.682 0 1.237.567 1.237 1.264V22.56c0 .547.434.99.97.99a.98.98 0 00.969-.99V4.523c0-1.79-1.425-3.246-3.176-3.246z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#a)">
          <Mask
            id="b"
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={25}
            height={25}>
            <Path d="M24.828.265h-24v24.298h24V.265z" fill="#fff" />
          </Mask>
          <G mask="url(#b)">
            <Path
              d="M24.828.265h-24v24.298h24V.265z"
              fill={props.isFocused ? darkBlue : grey}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

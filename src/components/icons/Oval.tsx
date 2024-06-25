import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const OvalIcon = (props: SvgProps) => {
  return (
    <Svg width={10} height={11} viewBox="0 0 10 11" fill="none" {...props}>
      <Path
        d="M5 9.5a4 4 0 100-8 4 4 0 000 8z"
        fill="#fff"
        stroke="#1262AE"
        strokeWidth={2}
      />
    </Svg>
  );
};

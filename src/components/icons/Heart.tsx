import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Heart = (props: SvgProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M5.833 2.5c-2.3 0-4.166 1.847-4.166 4.125 0 1.84.729 6.204 7.906 10.617a.821.821 0 00.854 0c7.177-4.413 7.906-8.778 7.906-10.617 0-2.278-1.865-4.125-4.166-4.125S10 5 10 5 8.134 2.5 5.833 2.5z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export const FlightIcon = (props: SvgProps) => {
  return (
    <Svg width={53} height={53} viewBox="0 0 53 53" fill="none" {...props}>
      <Circle
        cx={26.4141}
        cy={26.4141}
        r={26.4141}
        transform="rotate(-90 26.414 26.414)"
        fill="#1262AE"
        fillOpacity={0.08}
      />
      <Circle
        cx={26.4141}
        cy={26.4141}
        r={21.2997}
        transform="rotate(-90 26.414 26.414)"
        fill="#1262AE"
        fillOpacity={0.1}
      />
      <Circle
        cx={26.4141}
        cy={26.4141}
        r={15}
        transform="rotate(-90 26.414 26.414)"
        fill="#1262AE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.629 20.282a.681.681 0 011.215-.574l3.714 5.381 3.765.18a1.145 1.145 0 01-.054 2.288h-3.711l-3.715 5.554a.682.682 0 01-1.223-.56l1.383-4.994H21.27l-.994 2.04a.454.454 0 01-.863-.2V23.15a.411.411 0 01.778-.186l1.08 2.125h3.73l-1.373-4.807z"
        fill="#fff"
      />
    </Svg>
  );
};

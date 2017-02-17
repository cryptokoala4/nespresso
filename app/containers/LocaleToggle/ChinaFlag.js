import React from 'react';
import SvgIcon from 'material-ui/SvgIcon'

const ChinaFlag = (props) => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="ab" fill="#ffde00" d="M-.588.81L0-1 .588.81-.952-.31H.952z"/>
      </defs>
      <path d="M0 0h640v480H0z" fill="#de2910"/>
      <use xlinkHref="#ab" transform="matrix(72 0 0 72 120 120)" width="30" height="20"/>
      <use xlinkHref="#ab" transform="rotate(-120.93 133.742 -44.073) scale(24)" width="30" height="20"/>
      <use xlinkHref="#ab" transform="rotate(-98.11 185.53 -77.014) scale(24)" width="30" height="20"/>
      <use xlinkHref="#ab" transform="rotate(-74.038 255.36 -106.92) scale(24)" width="30" height="20"/>
      <use xlinkHref="#ab" transform="matrix(15 -18.736 18.735 15 239.933 216.054)" width="30" height="20"/>
    </svg>
  </SvgIcon>
);

// which makes this reusable component for other views

export default ChinaFlag;

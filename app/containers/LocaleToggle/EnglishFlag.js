import React from 'react';
import SvgIcon from 'material-ui/SvgIcon'

const EnglishFlag = (props) => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="a" fill="#FFF" d="M-.01000753 0L0-.0308.01000753 0z"/>
        <g id="b">
          <use xlinkHref="#a" transform="rotate(-144)"/>
          <use xlinkHref="#a" transform="rotate(-72)"/>
          <use xlinkHref="#a"/>
          <use xlinkHref="#a" transform="rotate(72)"/>
          <use xlinkHref="#a" transform="rotate(144)"/>
        </g>
        <g id="c">
          <use xlinkHref="#b" x="-.252"/>
          <use xlinkHref="#b" x="-.126"/>
          <use xlinkHref="#b"/>
          <use xlinkHref="#b" x=".126"/>
          <use xlinkHref="#b" x=".252"/>
        </g>
        <g id="d">
          <use xlinkHref="#c" x="-.063"/>
          <use xlinkHref="#b" x=".315"/>
        </g>
        <g id="e">
          <use xlinkHref="#d"/>
          <use xlinkHref="#c" y=".054"/>
          <use xlinkHref="#d" y=".108"/>
          <use xlinkHref="#c" y=".162"/>
        </g>
        <g id="g">
          <use xlinkHref="#e" y="-.216"/>
          <use xlinkHref="#e"/>
          <use xlinkHref="#d" y=".216"/>
        </g>
        <path id="f" fill="#BB133E" d="M0 0h1235v50H0z"/>
      </defs>
      <path fill="#FFF" d="M0 0h1235v650H0z"/>
      <use xlinkHref="#f"/>
      <use xlinkHref="#f" y="100"/>
      <use xlinkHref="#f" y="200"/>
      <use xlinkHref="#f" y="300"/>
      <use xlinkHref="#f" y="400"/>
      <use xlinkHref="#f" y="500"/>
      <use xlinkHref="#f" y="600"/>
      <path fill="#002664" d="M0 0h494v350H0z"/>
      <use xlinkHref="#g" transform="matrix(650 0 0 650 247 175)"/>
    </svg>
  </SvgIcon>
);
// which makes this reusable component for other views

export default EnglishFlag;

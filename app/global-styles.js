import { injectGlobal } from 'styled-components';
import mainFont from 'fonts/PingFangTCLight.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @font-face {
    font-family: 'PingFangTCLight';
    src: url(${mainFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'PingFangTCLight';
  }

  body.fontLoaded {
    font-family: 'PingFangTCLight';
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
    font-family: 'PingFangTCLight';
  }

  p,
  label {
    font-family: 'PingFangTCLight';
    line-height: 1.5em;
  }
`;

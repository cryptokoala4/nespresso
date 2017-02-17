import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  position: relative;
  display: inline-block;
  // vertical-align: top;
  text-decoration: none;
  color: #fff5f5;
  padding: 13px;
  margin-top: 4px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // font-weight: bold;
  float: right;
  @media (max-width: 820px) {
    display: none;
  }  
  
  &:active {
    // background: #312d3b;
    color: #ffc600;
  }
`;



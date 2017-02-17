import styled from 'styled-components';

const Select = styled.select`
  line-height: 1em;
  height: 30px;
  // background-color: #312d3b;
  // background: linear-gradient(0deg,transparent,rgba(0,0,0,.7)) !important;
  font-family: 'Roboto', sans-serif;
  color: #fff5f5;
  // color: black;
  &:active{
    background: #312d3b;
  }
`;

export default Select;

import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';

const StyledAppBar = styled(AppBar)`
  // background: linear-gradient(0deg,transparent,rgba(0,0,0,.7)) !important;
  box-shadow: initial !important;
  
  // background-color: #312d3b !important;
  display: block !important;
  position: fixed !important;
  // background-color: red !important;
  // background-color: ${props => props.primary ? 'red' : 'green'} !important;
`;


export default StyledAppBar;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import A from './A';
import Img from './Img';
import Banner from './banner.png';
import HeaderLink from './HeaderLink';
import LocaleToggle from 'containers/LocaleToggle';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontAwesome from 'react-fontawesome';
import Headroom from 'react-headroom';
import { Router, browserHistory } from 'react-router';
import { Link } from 'react-router';
import StyledAppBar from './StyledAppBar';

// const StyledAppBar = styled(AppBar)`
//   // background: linear-gradient(0deg,transparent,rgba(0,0,0,.7)) !important;
//   box-shadow: initial !important;
//
//   // background-color: #312d3b !important;
//   display: block !important;
//   position: fixed !important;
//   // background-color: red !important;
//   background-color: ${props => props.primary ? 'red' : 'green'};
// `;

const StyledFontawesome = styled(FontAwesome)`
  color: #fff5f5;
  float: right;
  margin: 0.6em;
  font-size: x-large !important;
  @media (max-width: 820px) {
    display: none !important;
  }  
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  leftNavBtn = () => {
    return (!window.matchMedia("(min-width: 820px)").matches)
  };

  render() {
    return (
      <div>
        <StyledAppBar
          showMenuIconButton={this.leftNavBtn()}
          onLeftIconButtonTouchTap={this.toggle.bind(this)}
          titleStyle={{display:'none'}}
          style={{backgroundColor: this.props.backgroundColor, background: this.props.background}}
        >
          <A to="/">
            <Img src={Banner} alt="logo"/>
          </A>
          <LocaleToggle />
          <a href="https://angel.co/coinstruct" target="_blank">
            <StyledFontawesome
              name='angellist'
            />
          </a>
          <a href="https://github.com/coinstruct/coinstruct" target="_blank">
            <StyledFontawesome
              name='github'
            />
          </a>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
          <HeaderLink to="/technology">
            Technology
          </HeaderLink>
        </StyledAppBar>
        <Drawer
          docked={false}
          open={this.state.open}
          onToggleDrawer={this.toggle.bind(this)}
          onRequestChange={open => this.setState({open})}>
          <MenuItem containerElement={<Link to="/about" />}>
            <FormattedMessage {...messages.about} />
          </MenuItem>
          <MenuItem containerElement={<Link to="/contact" />}>
            <FormattedMessage {...messages.contact} />
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default Header;




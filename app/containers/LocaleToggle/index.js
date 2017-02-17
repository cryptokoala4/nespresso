import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { selectLanguage } from '../LanguageProvider/selectors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ChinaFlag from './ChinaFlag';
import EnglishFlag from './EnglishFlag';

const svgStyle = {
  width: 30,
  height: 30,
};

export class LocaleToggle extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
    // console.log(appLocales)
  }

  render() {

    const LanguageToggle = ({onChange, value, locale, onLocaleToggle, ...props}) => (
      <DropDownMenu onChange={(e, index, value) => { onChange(value)}} value={this.props.locale} {...props}/>
    );

    const CDropDownMenu = connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);

    return (
      <Wrapper>
        <CDropDownMenu underlineStyle={{borderTop:'none'}} selectedMenuItemStyle={{color:'black'}} labelStyle={{color:'white'}} >
          <MenuItem value={appLocales[0]} primaryText={messages.en.defaultMessage} />
          <MenuItem value={appLocales[1]} primaryText={messages.zh.defaultMessage} />
        </CDropDownMenu>
      </Wrapper>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: React.PropTypes.func,
  locale: React.PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

const mapDispatchToProps = (dispatch) => {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    onChange: (value) => {
      dispatch(changeLocale(value))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H1 from 'components/H1';
import CenteredSection from './CenteredSection';
import messages from './messages';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import Img from 'components/Img';
import '!style-loader!css-loader!sass-loader!./flex.css';
import Banner from 'assets/images/home/banner-black.png';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

const flatButtonStyle = {
  color: '#ffc600',
};

const BannerImg = styled(Img)`
  width: 150px;
  padding-bottom: 1px;
`;

export class NewsletterBox extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      open: false,
      errorText: '',
    };
  }

  submitForm(data) {
    // event.preventDefault();
    console.log("submitted email: ", data);
    axios.post(_NEWSLETTER_POST_API_, data, {
    }).then(response => {
      console.log("response is: ", response);
      this.setState({open: true});
      this.setState({modalTitle: "Email subscription success"});
      this.setState({modalContent: "Thank you for subscribing"});
    }).catch(error => {
      if (error.message) {
        this.setState({open: true});
        this.setState({modalTitle: "Email subscription error"});
        console.log(error.response);
      } if (error.response.status === 422) {
        this.setState({modalContent: "Email entered is not in valid format"});
      } else if (error.response.status === 400) {
        this.setState({modalContent: "Email field cannot be empty"});
      } else if (error.response.status === 409) {
        this.setState({modalContent: "Email has already been used"});
      } else {
        this.setState({modalContent: "Something happened :("});
      }
    });
  }

  handleClose = () => {
    this.setState({open: false});
  };

  errorMessages = {
    emailError: "Please enter a valid email",
  };

  notifyFormError = (data) => {
    console.error('Form error:', data);
  };

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={false}
        onTouchTap={this.handleClose}
        style={flatButtonStyle}
      />,
    ];

    const {formatMessage} = this.props.intl;

    let { emailError} = this.errorMessages;

    return (
      <CenteredSection>
        <H1>
          <FormattedMessage {...messages.newsletterTitle} />
          <BannerImg src={Banner} alt=""/>
        </H1>
        <Formsy.Form
          method="post"
          onValidSubmit={data => this.submitForm(data)}
          onInvalidSubmit={this.notifyFormError}
        >
          <FormsyText
            name="email"
            validations='isEmail'
            validationError={emailError}
            hintText={formatMessage(messages.email)}
            underlineFocusStyle={{borderColor:'#ffc600'}}
            value={this.state.value}
            required
          />
          <br>
          </br>
          <br>
          </br>
          <RaisedButton
            label={formatMessage(messages.subscribe)}
            type="submit"
            backgroundColor={'#ffc600'}
            onTouchTap={this.handleOpen}
          />
          <Dialog
            title={this.state.modalTitle}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            contentStyle={customContentStyle}
            bodyStyle={{backgroundColor: '#312d3b', color: 'white'}}
            titleStyle={{backgroundColor: '#312d3b', color: 'white'}}
            actionsContainerStyle={{backgroundColor: '#312d3b', color: 'white'}}
          >
            {this.state.modalContent}
          </Dialog>
        </Formsy.Form>
      </CenteredSection>
    )}
}

NewsletterBox.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ])
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(NewsletterBox));

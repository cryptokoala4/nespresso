import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import HomeSlideshow from 'components/HomeSlideshow';
import Container from './Container';
import Header from 'components/Header';
import Wrapper from './Wrapper';
import Img from 'components/Img';
import '!style-loader!css-loader!sass-loader!./flex.css';
import Paper from 'material-ui/Paper';
import Vision from 'assets/images/home/vision.png';
import Technology from 'assets/images/home/technology.png';
import Aqua from 'assets/images/home/aqua.jpg';
import Min7 from 'assets/images/home/min7.jpg';
import Piconizer from 'assets/images/home/piconizer.jpg';
import Yocam from 'assets/images/home/yocam.jpg';
import NewsletterBox from 'containers/NewsletterBox';

const BoxedImg = styled(Img)`
  width: 170px;
  height: 170px;
  display:block;
  margin:auto;
  padding-top: 25px;
`;

const ProductBoxedImg = styled(Img)`
  width: 340px;
  height: 230px;
  display:block;
  margin:auto;
  // padding-top: 25px;
`;

export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      open: false,
      errorText: '',
    };
  }

  render() {
    return (
      <article>
        {/*<Header background="linear-gradient(to bottom, #312d3b, rgba(48, 44, 59, 0)"/>*/}
          {/*<HomeSlideshow className="help"/>*/}
          {/*<Helmet*/}
            {/*title="Coinstruct"*/}
            {/*meta={[*/}
              {/*{ name: 'description', content: 'Coinstruct' },*/}
            {/*]}*/}
          {/*/>*/}
        <Container>
          <H1 style={{marginLeft: '15px'}}>
            <FormattedMessage {...messages.coreValueTitle} />
          </H1>
          <Wrapper className="wrapper">
            <Paper zDepth={1} className="block-first-1">
              <BoxedImg src={Vision} alt=""/>
              <H3>
                <FormattedMessage {...messages.visionTitle} />
              </H3>
              <p>
                <FormattedMessage {...messages.visionText} />
              </p>
            </Paper>
            <Paper zDepth={1} className="block-first-2">
              <BoxedImg src={Technology} alt=""/>
              <H3>
                <FormattedMessage {...messages.technologyTitle} />
              </H3>
              <p>
                <FormattedMessage {...messages.technologyText} />
              </p>
            </Paper>
            <Paper zDepth={1} className="block-first-3">
              <NewsletterBox />
            </Paper>
          </Wrapper>
          <H1 style={{marginLeft: '15px', marginBottom: '15px', marginTop: '30px'}}>
            <FormattedMessage {...messages.trendingTitle} />
          </H1>
          <Wrapper className="wrapper">
            <div className="block-second-1">
              <ProductBoxedImg src={Yocam} alt=""/>
              <div style={{padding: '0px 20px 10px 20px'}}>
                <H3>
                  <FormattedMessage {...messages.dummyProductTitle1} />
                </H3>
                <p>
                  <FormattedMessage {...messages.dummyProduct1} />
                </p>
              </div>
            </div>
            <div className="block-second-2">
              <ProductBoxedImg src={Piconizer} alt=""/>
              <div style={{padding: '0px 20px 10px 20px'}}>
                <H3>
                  <FormattedMessage {...messages.dummyProductTitle2} />
                </H3>
                <p>
                  <FormattedMessage {...messages.dummyProduct2} />
                </p>
              </div>
            </div>
            <div className="block-second-3">
              <ProductBoxedImg src={Aqua} alt=""/>
              <div style={{padding: '0px 20px 10px 20px'}}>
                <H3>
                  <FormattedMessage {...messages.dummyProductTitle3} />
                </H3>
                <p>
                  <FormattedMessage {...messages.dummyProduct3} />
                </p>
              </div>
            </div>
            <div className="block-second-4">
              <ProductBoxedImg src={Min7} alt=""/>
              <div style={{padding: '0px 20px 10px 20px'}}>
                <H3>
                  <FormattedMessage {...messages.dummyProductTitle4} />
                </H3>
                <p>
                  <FormattedMessage {...messages.dummyProduct4} />
                </p>
              </div>
            </div>
          </Wrapper>
        </Container>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ])
};

export default HomePage;

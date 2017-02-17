import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import H3 from 'components/H3';
import AboutImage from './about.jpg';
import messages from './messages';
import PageContainer from 'components/PageContainer';
import PageBannerImage from 'components/PageBannerImage';
import PageBannerText from 'components/PageBannerText'
import Header from 'components/Header';

const StyledArticle = styled.article`
  backgroundColor: #312d3b;
`;
const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // max-height: 65vh;
`;
const StyledPageContainer = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  background-color: #312d3b;
  color: #fff5f5;
  align-items: center;
  flex-flow: row wrap;
`;
export default class AboutPage extends React.Component {

  // Since state and props are static,
  // there's no need to re-render this component
  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    return (
      <StyledArticle>
        <Header background="#312d3b"/>
        <BannerWrapper>
          <PageBannerImage src={AboutImage} alt=""/>
          <PageBannerText>
            <H1>
              <FormattedMessage {...messages.banner_title} />
            </H1>
            <p>
              <FormattedMessage {...messages.banner_body} />
            </p>
          </PageBannerText>
        </BannerWrapper>
        <StyledPageContainer>
          <Helmet
            title="About Page"
            meta={[
              { name: 'description', content: 'About page' },
            ]}
          />
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          <p>
            <FormattedMessage {...messages.body} />
          </p>
          <p>
            <FormattedMessage {...messages.body2} />
          </p>
          <p style={{whiteSpace: 'pre'}}>
            <FormattedMessage {...messages.body3} />
          </p>
        </StyledPageContainer>
      </StyledArticle>
    );
  }
}

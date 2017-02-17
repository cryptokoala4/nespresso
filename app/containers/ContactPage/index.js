import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import messages from './messages';
import PageContainer from 'components/PageContainer';
import PageBannerImage from 'components/PageBannerImage';
import ContactImage from './contact.jpg';
import MapImage from 'assets/images/contact/map.png';
import PageBannerText from 'components/PageBannerText'
import Header from 'components/Header';
import Container from './Container';

const PageMapImage = styled(PageBannerImage)`
  display: block;
  margin: 0 auto;
  width: 75%;
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 65vh;
`;

const Wrapper = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;

const OvalNY = styled.span`
  width: 11.2px;
  height: 11.2px;
  opacity: 0.8;
  background-color: #f9593a;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;
const OvalHK = styled.span`
  width: 11.2px;
  height: 11.2px;
  opacity: 0.8;
  background-color: #ffc80a;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;
const OvalTP = styled.span`
  width: 11.2px;
  height: 11.2px;
  opacity: 0.8;
  background-color: #98b91e;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;

const StyledP = styled.p`
  display: flex;
`;
const StyledArticle = styled.article`
`;

export default class ContactPage extends React.Component {
  render() {
    return (
      <StyledArticle>
        <Header background="linear-gradient(to bottom, #312d3b, rgba(48, 44, 59, 0)"/>
        <BannerWrapper>
          <PageBannerImage src={ContactImage} alt=""/>
          <PageBannerText style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            <H1>
              <FormattedMessage {...messages.header} />
            </H1>
            <span>
              <FormattedMessage {...messages.body} />
            </span>
          </PageBannerText>
        </BannerWrapper>
        <Helmet
          title="Contact Page"
          meta={[
            { name: 'description', content: 'Contact page' },
          ]}
        />
        <Container>
          <H1 style={{textAlign: 'center', marginBottom:'30px'}}>
            <FormattedMessage {...messages.title} />
          </H1>
          <PageMapImage src={MapImage} alt=""/>
          <Wrapper>
            <div>
              <StyledP><OvalNY/>New York</StyledP>
              <p>22 Broadway</p>
              <p>New York</p>
              <p>NY10038</p>
              <p>+1 (855) 593-9675</p>
            </div>
            <div>
              <StyledP><OvalHK/>Hong Kong</StyledP>
              <p>7/F Sino Favour Centre</p>
              <p>No.1 On Yip Street</p>
              <p>Chai Wan</p>
              <p>+852 2526-7818
              </p>
            </div>
            <div>
              <StyledP><OvalTP/>Taipei</StyledP>
              <p>21/F No.77 Sec. 2</p>
              <p>Dunhua S. Rd. Da’an Dist.</p>
              <p>Taipei City 10682</p>
              <p>+886 2-2700-1979</p>
            </div>
          </Wrapper>
        </Container>
      </StyledArticle>
    );
  }
}


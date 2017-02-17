import React from 'react';
import { FormattedMessage } from 'react-intl';
import Banner from 'assets/images/home/banner-white.png';
import Img from 'components/Img';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import styled from 'styled-components';

const FooterBanner = styled(Img)`
  width: 100px;
`;

function Footer() {
  return (
    <Wrapper>
      <section style={{float:'left'}}>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
      </section>
      <section style={{float:'right'}}>
        <FormattedMessage
          {...messages.madeIn}
          values={{
            author: <FooterBanner src={Banner} alt=""/>  ,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;

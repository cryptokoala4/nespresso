import styled from 'styled-components';

const Container = styled.div`
    margin: auto auto 0 auto;
    max-width: 1440px;
    // padding-left: 4rem;
    // padding-right: 4rem;
    padding-top: 2rem;
    border-top: 0.1rem solid #DCDEDD;
    @media (max-width: 820px) {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
    }  
`;

export default Container;

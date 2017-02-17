import styled from 'styled-components';

const BannerPageText = styled.span`
  color: #fff;
  line-height: 1.5;
  position: absolute;
  white-space: normal;
  max-width: 90%;
  text-align: center;
  font-size: 36px;
  padding: 200px 10px 0 20px;
  @media (max-width: 768px) {
    font-size: .8em;
    padding: 8px 15px; 
  }
`;

export default BannerPageText;

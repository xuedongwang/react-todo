import styled from 'styled-components';

export const Footer = styled.div`
  text-align: center;
  .footer-content {
    margin: 65px auto 0;
    font-size: 10px;
    color: #bfbfbf;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
    .footer-item {
      margin: 10px 0;
      .footer-item__link {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

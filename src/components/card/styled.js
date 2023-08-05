import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 15px 48px 15px;
  background-color: #fff;

  & > a {
    font-size: 14px;
    font-weight: 600;
    color: #e51d37;
    text-transform: uppercase;
  }
`;

export const TextContainer = styled.div`
  margin: 20px 0;

  & > h3 {
    font-family: "Sora", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.014em;
    margin-bottom: 10px;
    color: #333333;
  }

  & > p {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    opacity: 0.75;
  }
`;

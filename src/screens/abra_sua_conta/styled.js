import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 24px;

  & > h2 {
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 21px;
    margin-bottom: 21px;

    & > span {
      color: #e51d37;
    }
  }

  & > p {
    color: #646466;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 26px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    color: #646466;
  }
`;

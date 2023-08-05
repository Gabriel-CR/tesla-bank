import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 24px 60px 24px;

  & > p {
    font-size: 14px;
    font-weight: 500;
    color: #cb162e;
    margin-bottom: 8px;
  }

  & > h2 {
    font-family: "Sora", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 32px;
    line-height: 25.2px;

    & > span {
      font-weight: 600;
    }
  }
`;

export const DepoimentosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 24px;
  background-color: #f2f4fd;

  & > h2 {
    font-family: "Sora", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    color: #333333;

    & > span {
      color: #da263e;
    }
  }

  & > p {
    margin: 16px 0 32px 0;
    font-size: 14px;
    line-height: 21px;
    color: #646466;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

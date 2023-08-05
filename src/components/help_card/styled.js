import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 24px 0;

  & > div {
    width: 60%;

    & > h3 {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      color: #333333;
      margin-bottom: 12px;
    }

    & > p {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #646466;
    }
  }

  & > button {
    border: none;
    background: none;
  }
`;

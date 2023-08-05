import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 9px 0;
  border: none;
  border-radius: 5px;
  background-color: #333333;

  & > div {
    & > p {
      color: #fbf9fc;
      text-align: left;
    }

    & > .store_name {
      font-family: "Assistant", sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
  }
`;

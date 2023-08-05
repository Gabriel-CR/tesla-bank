import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  text-align: center;
  padding: 48px 24px;
  border-top: 1px solid #e5e5e5;

  font-size: 14px;
  font-weight: 300;
  line-height: 21px;

  & > p > span {
    font-family: "Sora", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
  }

  & > div {
    display: flex;
    gap: 9px;

    & > p {
      font-size: 12px;
      font-weight: 500;
      color: #e51d37;
    }
  }
`;

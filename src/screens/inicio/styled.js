import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f4fd;
  height: 70vh;
  padding: 24px;

  & > h1 {
    font-family: "Sora", sans-serif;
    font-size: 30px;
    color: #e51d37;
  }

  & > h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #333333;
    width: 75%;
    margin: 12px 0 32px 0;
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 70%;
    border: none;
    border-radius: 4px;
    padding: 12px 32px;
    background: linear-gradient(220.94deg, #eb3850 14.43%, #cb162e 85.28%);

    & > p {
      font-size: 14px;
      font-weight: 600;
      color: #fff;
    }
  }
`;

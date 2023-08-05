import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 24px;
  text-align: center;

  & > .subtitle {
    font-size: 14px;
    font-weight: 500;
    color: #cb162e;
    margin-bottom: 8px;
  }

  & > h2 {
    font-family: "Sora", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 24px;
  }

  & > p {
    font-size: 14px;
    line-height: 22px;
    color: #646466;
    margin-bottom: 30px;
  }
`;

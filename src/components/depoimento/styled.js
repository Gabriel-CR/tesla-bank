import styled from "styled-components";

export const Container = styled.div`
  & > h3 {
    font-family: "Sora", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #333333;
    padding: 3px 12px;
    border-left: 4px solid #e51d37;
  }

  & > p {
    font-size: 14px;
    font-style: italic;
    line-height: 22px;
    color: #646466;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 24px;
  background-color: #f2f4fd;

  & > p {
    font-size: 14px;
    font-weight: 500;
    color: #cb162e;
    margin-bottom: 8px;
  }

  & > h2 {
    font-family: "Sora", sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 32px;

    & > span {
      color: #e51d37;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

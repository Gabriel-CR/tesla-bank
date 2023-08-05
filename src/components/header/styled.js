import { styled } from "styled-components";

export const Header = styled.header`
  background-color: #e51d37;
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  font-size: calc(10px + 2vmin);
  color: white;

  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & > button > img {
    height: 3vh;
    cursor: pointer;
  }

  & > button > .logo {
    height: 4vh;
  }
`;

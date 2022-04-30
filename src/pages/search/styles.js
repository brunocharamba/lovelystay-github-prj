import styled from "styled-components";
import { colors, sizes } from "../../utils/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //background-color: ${colors.darkGray};
  background: linear-gradient(217deg, ${colors.darkPurple}, ${colors.purple});

  & > svg {
    font-size: 8rem;
    color: ${colors.lighterGray};
    opacity: 0.5;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.3));
  }

  & span {
    color: ${colors.lighterGray};
  }
`;

export const StyledSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.darkGray};
  opacity: 0.5;
  margin: 3rem 0 1rem 0;
  padding: 0.5rem;
  border-radius: 0.75rem;
  width: 50%;
  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: ${sizes.mobile}) {
    width: 75%;
  }

  &:hover,
  &:focus-within {
    box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.25);
  }

  & input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    padding: 0 1rem;
    caret-color: black;
    color: ${colors.lighterGray};
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.lighterGray};
  }
`;

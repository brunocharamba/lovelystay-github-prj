import styled from "styled-components";
import { colors } from "../../utils";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  font-size: xx-large;
  text-transform: uppercase;
  letter-spacing: 1rem;
  justify-content: center;
  align-items: center;
  color: ${colors.light};
  background-color: ${colors.darkPurple};
  gap: 2rem;
  padding: 2rem;

  & button {
    display: flex;
    background: none;
    border: 0;
    color: ${colors.light};
    font-size: 1.75rem;
  }
`;

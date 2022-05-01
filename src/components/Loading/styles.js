import styled from "styled-components";
import { colors } from "../../utils";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vmax;
  height: 100vh;
  font-size: xx-large;
  text-transform: uppercase;
  letter-spacing: 1rem;
  justify-content: center;
  align-items: center;
  color: ${colors.light};
  background-color: ${colors.darkPurple};
`;

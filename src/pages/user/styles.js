import styled from "styled-components";
import { colors, sizes } from "../../utils/";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* background-color: #dfe6e9; */
  background: linear-gradient(217deg, ${colors.darkPurple}, ${colors.purple});
  height: 100vh;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 60rem;
  /* height: auto; */
  padding: 0 1rem;
  margin: 1rem 0;
`;

export const StyledUserInformationWrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #dfe6e9;
  gap: 2rem;
  background: ${colors.gray};
  border-radius: 0.65rem;
  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.25);

  & > :first-child {
    background-color: #222f3e;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  & > :nth-child(2) {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%; */

    display: flex;
    flex-direction: column;
  }
`;

export const StyledUserInformation = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
  z-index: 1;
  padding: 1rem;
`;

export const StyledInformationField = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 0;

  span {
    margin: 0 0 0 0.35rem;
  }
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem 0;
`;

export const StyledNavbar = styled.div`
  position: absolute;
  height: 10rem;
  width: 100%;
  background: rgb(108, 92, 231);
  background: linear-gradient(180deg, rgba(108, 92, 231, 1) 0%, rgba(108, 92, 231, 1) 30%, rgba(49, 34, 158, 1) 100%);
  top: 0;
`;

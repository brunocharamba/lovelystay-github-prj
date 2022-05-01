import styled from "styled-components";
import { colors, sizes } from "../../utils/";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(217deg, ${colors.darkPurple}, ${colors.purple});
  min-height: 100vh;
  color: #fafafa;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 60rem;
  padding: 0 1rem;
  margin: 1rem 0;
`;

export const StyledUserInformationWrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #57657495;

  gap: 2rem;
  background: ${colors.gray};
  border-radius: 0.65rem;
  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.25);

  & > :first-child {
    background-color: ${colors.darkGray + "40"};
    border-radius: 0.5rem 0 0 0.5rem;

    svg {
      cursor: pointer;
      font-size: x-large;
      position: absolute;
      margin: 0.5rem 0 0 0.5rem;
    }
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
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

export const StyledUserTitle = styled.div`
  & > h3 {
    text-transform: uppercase;
    cursor: pointer;
  }
  & > div {
    margin: -1.25rem 0 0 0;
    font-size: small;
    font-style: italic;
    color: ${colors.lighterGray};
  }
`;

export const StyledInformationField = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 0;

  span,
  div {
    margin: 0 0 0 0.35rem;
  }

  div {
    cursor: pointer;
  }
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem 0;
`;

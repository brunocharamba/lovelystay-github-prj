import styled from "styled-components";
import { colors, sizes } from "../../utils";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    display: flex;
    margin: 2rem 0;
    background: none;
    border: 0;
    border-radius: 0.5rem;
    color: ${colors.light};
    background-color: ${colors.darkGray + "80"};
    padding: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${colors.lighterGray + "30"};
  color: ${colors.light};
  box-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledCardTitle = styled.a`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledCardDescription = styled.div`
  margin: 1rem 0 0 0;
  font-size: small;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledCardDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  font-size: small;
  font-style: italic;
`;

import styled from "styled-components";
import { colors } from "../../utils";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  min-width: 10rem;
  min-height: 10rem;
  max-width: 12rem;
  max-height: 12rem;
  border-radius: 0.5rem;
  background: ${colors.lighterGray + "30"};
  color: #fefefe;
  box-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledCardTitle = styled.div`
  cursor: pointer;
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

import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;

  margin: 0.5rem;
  min-width: 10rem;
  min-height: 10rem;
  max-width: 12rem;
  max-height: 12rem;
  border-radius: 0.5rem;

  background: #0f2027; /* fallback for old browsers */
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fefefe;

  box-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledCardTitle = styled.div`
  cursor: pointer;
  font-weight: 500;
`;

export const StyledCardDescription = styled.div`
  margin: 0.5rem 0 0 0;
  font-size: small;
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

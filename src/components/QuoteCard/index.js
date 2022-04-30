import React from "react";

import { StyledContainer, StyledQuotes } from "./styles";

function QuoteCard({ text }) {
  return (
    <StyledContainer>
      <StyledQuotes>"</StyledQuotes>
      {text && <div>{text}</div>}
      <StyledQuotes style={{ textAlign: "end" }}>"</StyledQuotes>
    </StyledContainer>
  );
}

export default QuoteCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

import { StyledContainer } from "./styles";

function NotFound() {
  let navigate = useNavigate();

  return (
    <StyledContainer>
      <FaArrowCircleLeft onClick={() => navigate("/")} />
      User not found
    </StyledContainer>
  );
}

export default NotFound;

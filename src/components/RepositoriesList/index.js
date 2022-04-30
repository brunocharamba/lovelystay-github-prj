import React from "react";
import useFetch from "../../hooks/useFetch";

import { StyledContainer, StyledCardContainer, StyledCardTitle, StyledCardDescription, StyledCardDetails } from "./styles";

function RepositoriesList({ userId }) {
  const { data: repositories, error, status, isLoading } = useFetch(`https://api.github.com/users/${userId}/repos`);

  if (isLoading) return;

  const renderCards = () => {
    return (
      repositories &&
      repositories.map((repo) => {
        return (
          <StyledCardContainer key={repo.id}>
            <StyledCardTitle>{repo.name}</StyledCardTitle>
            <StyledCardDescription>{repo.description}</StyledCardDescription>
            <StyledCardDetails>{repo.language}</StyledCardDetails>
          </StyledCardContainer>
        );
      })
    );
  };

  return <StyledContainer>{renderCards()}</StyledContainer>;
}

export default RepositoriesList;

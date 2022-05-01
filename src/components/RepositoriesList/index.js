import React from "react";
import useFetch from "../../hooks/useFetch";

import { StyledContainer, StyledCardContainer, StyledCardTitle, StyledCardDescription, StyledCardDetails } from "./styles";

function RepositoriesList({ userId }) {
  const { data: repositories, isLoading } = useFetch(`https://api.github.com/users/${userId}/repos`);

  console.log(repositories);

  const renderCards = () => {
    return repositories.map((repo) => {
      return (
        <StyledCardContainer key={repo.id}>
          <StyledCardTitle onClick={() => window.open(repo.html_url)}>{repo.name}</StyledCardTitle>
          <StyledCardDescription>{repo.description}</StyledCardDescription>
          <StyledCardDetails>{repo.language}</StyledCardDetails>
        </StyledCardContainer>
      );
    });
  };

  if (isLoading) return;
  if (!repositories || repositories.length === 0) return <h2>NO REPOSITORIES FOUND</h2>;
  return (
    <>
      <h2>REPOSITORIES</h2>
      <StyledContainer>{renderCards()}</StyledContainer>
    </>
  );
}

export default RepositoriesList;

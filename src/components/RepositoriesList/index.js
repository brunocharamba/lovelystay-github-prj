import React from "react";
import { useFetch } from "../../hooks";

import { StyledContainer, StyledCardContainer, StyledCardTitle, StyledCardDescription, StyledCardDetails, StyledButtonWrapper } from "./styles";

function RepositoriesList({ repositories, loading, canLoadMore, onNextPage }) {
  const renderCards = () => {
    return repositories.map((repo) => {
      return (
        <StyledCardContainer key={repo.id}>
          <StyledCardTitle href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </StyledCardTitle>
          <StyledCardDescription>{repo.description}</StyledCardDescription>
          <StyledCardDetails>{repo.language}</StyledCardDetails>
        </StyledCardContainer>
      );
    });
  };

  if (loading) return;
  if (!repositories || repositories.length === 0) return <h2>NO REPOSITORIES FOUND</h2>;
  return (
    <>
      <h2>REPOSITORIES</h2>
      <StyledContainer>{renderCards()}</StyledContainer>
      <StyledButtonWrapper>{canLoadMore && <button onClick={onNextPage}>Load More</button>}</StyledButtonWrapper>
    </>
  );
}

export default RepositoriesList;

import React from "react";
import { useParams } from "react-router-dom";
import { FaUserAlt, FaRegMap, FaBuilding, FaGithub } from "react-icons/fa";

import RepositoriesList from "../../components/RepositoriesList";
import useFetch from "../../hooks/useFetch";

import {
  StyledContainer,
  StyledImage,
  StyledNavbar,
  StyledContentWrapper,
  StyledUserInformationWrapper,
  StyledUserInformation,
  StyledInformationField,
  StyledMainContent,
} from "./styles";
import QuoteCard from "../../components/QuoteCard";

function User() {
  const { id } = useParams();
  const { data, error, status, isLoading } = useFetch(`https://api.github.com/users/${id}`);

  if (isLoading) return <div>loading...</div>;

  console.log(data);

  const renderInformationCards = () => {
    return (
      <StyledUserInformation>
        <StyledInformationField>
          <FaUserAlt />
          <span>{data.login}</span>
        </StyledInformationField>
        <StyledInformationField>
          <FaBuilding />
          <span>{data.company}</span>
        </StyledInformationField>
        <StyledInformationField>
          <FaRegMap />
          <span>{data.location}</span>
        </StyledInformationField>
        <StyledInformationField>
          <FaRegMap />
          <span>{data.followers}</span>
          <span>followers</span>
        </StyledInformationField>
        <StyledInformationField>
          <FaGithub />
          <span>{data.public_repos}</span>
          <span>public repositories</span>
        </StyledInformationField>
        <StyledInformationField>
          <FaGithub />
          <span>{data.public_gists}</span>
          <span>public gists</span>
        </StyledInformationField>
      </StyledUserInformation>
    );
  };

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledContentWrapper>
          <StyledUserInformationWrapper>
            <div>
              <StyledImage src={data.avatar_url} />
            </div>
            <div>
              <h3>{data.name}</h3>
              {renderInformationCards()}
              {/* <StyledUserInformation>{renderInformationCards()}</StyledUserInformation> */}
              {/* <QuoteCard text={data.bio} /> */}
            </div>
          </StyledUserInformationWrapper>
          <StyledMainContent>
            <RepositoriesList userId={id} />
          </StyledMainContent>
        </StyledContentWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
}

export default User;

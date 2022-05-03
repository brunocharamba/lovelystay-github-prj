import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHiking, FaRegMap, FaBuilding, FaGithub, FaBloggerB, FaArrowCircleLeft } from "react-icons/fa";

import RepositoriesList from "../../components/RepositoriesList";
import { useFetch } from "../../hooks";
import { helper } from "../../utils";

import {
  StyledContainer,
  StyledImage,
  StyledNavbar,
  StyledContentWrapper,
  StyledUserInformationWrapper,
  StyledUserInformation,
  StyledInformationField,
  StyledMainContent,
  StyledUserTitle,
} from "./styles";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

function User() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(id);
  const { data: repositories, isLoading: repositoriesLoading } = useFetch(`${id}/repos`);
  const navigate = useNavigate();

  const renderInformationCards = () => {
    return (
      <StyledUserInformation>
        {data.company && (
          <StyledInformationField>
            <FaBuilding />
            <span>{data.company}</span>
          </StyledInformationField>
        )}
        {data.location && (
          <StyledInformationField>
            <FaRegMap />
            <span>{data.location}</span>
          </StyledInformationField>
        )}
        {data.followers > 0 && (
          <StyledInformationField>
            <FaHiking />
            <span>{data.followers}</span>
            <span>followers</span>
          </StyledInformationField>
        )}
        {data.blog && (
          <StyledInformationField>
            <FaBloggerB />
            <a href={helper.getValidUrl(data.blog)} target="_blank" rel="noopener noreferrer">
              blog
            </a>
          </StyledInformationField>
        )}
        {data.public_repos > 0 && (
          <StyledInformationField>
            <FaGithub />
            <span>{data.public_repos}</span>
            <span>public repositories</span>
          </StyledInformationField>
        )}
        {data.public_gists > 0 && (
          <StyledInformationField>
            <FaGithub />
            <span>{data.public_gists}</span>
            <span>public gists</span>
          </StyledInformationField>
        )}
      </StyledUserInformation>
    );
  };

  if (!id) return <NotFound />;
  if (isLoading) return <Loading />;
  if (data.message) return <NotFound />;

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledContentWrapper>
          <StyledUserInformationWrapper>
            <div>
              <button onClick={() => navigate("/")}>
                <FaArrowCircleLeft />
              </button>
              <StyledImage src={data.avatar_url} />
            </div>
            <div>
              <StyledUserTitle>
                <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                  <h3>{data.name || `NO DISPLAY NAME`}</h3>
                </a>
                <div>@{data.login}</div>
              </StyledUserTitle>
              <div>{renderInformationCards()}</div>
            </div>
          </StyledUserInformationWrapper>
          <StyledMainContent>
            <RepositoriesList repositories={repositories} loading={repositoriesLoading} />
          </StyledMainContent>
        </StyledContentWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
}

export default User;

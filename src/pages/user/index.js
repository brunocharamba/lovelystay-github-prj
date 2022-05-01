import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHiking, FaRegMap, FaBuilding, FaGithub, FaBloggerB, FaArrowCircleLeft } from "react-icons/fa";

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
  StyledUserTitle,
} from "./styles";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

function User() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`https://api.github.com/users/${id}`);
  const navigate = useNavigate();

  const renderInformationCards = () => {
    return (
      <StyledUserInformation>
        {data.company && (
          <StyledInformationField>
            <>
              <FaBuilding />
              <span>{data.company}</span>
            </>
          </StyledInformationField>
        )}
        {data.location && (
          <StyledInformationField>
            <>
              <FaRegMap />
              <span>{data.location}</span>
            </>
          </StyledInformationField>
        )}
        {data.followers > 0 && (
          <StyledInformationField>
            <>
              <FaHiking />
              <span>{data.followers}</span>
              <span>followers</span>
            </>
          </StyledInformationField>
        )}
        {data.blog && (
          <StyledInformationField>
            <>
              <FaBloggerB />
              <div onClick={() => window.open(data.blog)}>blog</div>
            </>
          </StyledInformationField>
        )}
        {data.public_repos > 0 && (
          <StyledInformationField>
            <>
              <FaGithub />
              <span>{data.public_repos}</span>
              <span>public repositories</span>
            </>
          </StyledInformationField>
        )}
        {data.public_gists > 0 && (
          <StyledInformationField>
            <>
              <FaGithub />
              <span>{data.public_gists}</span>
              <span>public gists</span>
            </>
          </StyledInformationField>
        )}
      </StyledUserInformation>
    );
  };

  if (!id) return <NotFound />;
  if (isLoading) return <Loading />;
  if (data.message) return <NotFound />;

  console.log(data);

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledContentWrapper>
          <StyledUserInformationWrapper>
            <div>
              <FaArrowCircleLeft onClick={() => navigate("/")} />
              <StyledImage src={data.avatar_url} />
            </div>
            <div>
              <StyledUserTitle>
                <h3 onClick={() => window.open(data.html_url)}>{data.name || `NO DISPLAY NAME`}</h3>
                <div>@{data.login}</div>
              </StyledUserTitle>
              {renderInformationCards()}
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

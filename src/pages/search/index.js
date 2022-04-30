import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaGithub } from "react-icons/fa";

import useFetch from "../../hooks/useFetch";

import { Container, StyledSearchBox } from "./styles";

const baseMessage = "type the github's username...";

function Search() {
  const [search, setSearch] = React.useState("");

  let navigate = useNavigate();

  const handleSearch = async () => {
    if (!search) return;
    navigate(`/user/${search}`);
  };

  const handleEnter = async (e) => {
    if (e.keyCode === 13) await handleSearch();
  };

  return (
    <Container>
      <FaGithub />
      <StyledSearchBox>
        <input placeholder={baseMessage} onChange={(evt) => setSearch(evt.target.value)} onKeyUp={handleEnter}></input>
        <div onClick={async () => handleSearch()}>
          <FaSearch />
        </div>
      </StyledSearchBox>
      <span>{search ? "hit enter or click the button to go to the user page" : "search for the user"}</span>
    </Container>
  );
}

export default Search;

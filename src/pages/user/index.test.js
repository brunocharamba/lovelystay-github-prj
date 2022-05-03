import { render, screen } from "@testing-library/react";
import * as router from "react-router-dom";

import User from "../../pages/user";
import * as useFetch from "../../hooks/useFetch";

const mockUserFetch = {
  data: {
    avatar_url: "https://avatars.githubusercontent.com/u/15862685?v=4",
    html_url: "https://github.com/brunocharamba",
    login: "brunocharamba",
    company: "lovely stay",
    location: "porto, portugal",
    followers: 10,
    blog: "",
    public_repos: 10,
    public_gists: 20,
  },
  status: null,
  error: null,
  isLoading: false,
};

const mockReposFetch = {
  data: [
    { id: 0, name: "repo1", html_url: "https://github.com/brunocharamba/ALGntc", description: "description...", language: "C#" },
    { id: 1, name: "repo2", html_url: "https://github.com/brunocharamba/brunocharamba.github.io", description: "description 2...", language: "JS" },
  ],
  status: null,
  error: null,
  isLoading: false,
};

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    useParams: () => ({
      id: "brunocharamba",
    }),
    useNavigate: () => ({}),
  };
});

describe("User page", () => {
  it("should fetch correctly and display the loading", async () => {
    const { debug } = render(<User />);
    const loadingElement = screen.getByText(/Loading/i);

    expect(loadingElement).toBeInTheDocument();
  });

  it("should fetch correctly and display the data", async () => {
    jest.spyOn(useFetch, "default").mockReturnValueOnce(mockUserFetch).mockReturnValueOnce(mockReposFetch);

    const { debug } = render(<User />);

    const userNameEl = screen.queryByText(/brunocharamba/i);
    const someRepositoryEl = screen.queryByText(/repo2/i);

    expect(userNameEl).toBeInTheDocument();
    expect(someRepositoryEl).toBeInTheDocument();
  });

  it("should not fetch correctly and display that the user does not exist", async () => {
    router.useParams = () => "brunochareamasdhuh234904";
    jest.spyOn(useFetch, "default").mockReturnValueOnce(mockUserFetch).mockReturnValueOnce(mockReposFetch);

    const { debug } = render(<User />);

    const userNameEl = screen.queryByText(/brunocharamba/i);
    const notFountEl = screen.queryByText(/not found/);
    const someRepositoryEl = screen.queryByText(/repo2/i);

    expect(userNameEl).not.toBeInTheDocument();
    expect(someRepositoryEl).not.toBeInTheDocument();
    expect(notFountEl).toBeInTheDocument();
  });
});

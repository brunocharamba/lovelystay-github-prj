import { render, screen } from "@testing-library/react";
import * as router from "react-router-dom";

import RepositoriesList from "../../components/RepositoriesList";
import * as useFetch from "../../hooks/useFetch";

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

describe("RepositoriesList component", () => {
  it("should fetch correctly and display the loading", async () => {
    jest.spyOn(useFetch, "default").mockImplementation(() => mockReposFetch);

    const { debug } = render(<RepositoriesList repositories={[]} loading={true} />);

    const loadingElement = screen.queryByText(/Some repo/i);

    expect(loadingElement).not.toBeInTheDocument();
  });

  it("should fetch correctly and display the data", async () => {
    jest.spyOn(useFetch, "default").mockImplementation(() => mockReposFetch);

    const { debug } = render(<RepositoriesList repositories={mockReposFetch.data} loading={false} />);

    const loadingElement = screen.queryByText(/repo1/i);

    expect(loadingElement).toBeInTheDocument();
  });
});

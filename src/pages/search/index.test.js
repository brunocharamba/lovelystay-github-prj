import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../../pages/search";

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    useParams: () => ({
      id: "brunocharamba",
    }),
    useNavigate: () => ({}),
  };
});

describe("Search page", () => {
  it("should search input updates", async () => {
    const { debug } = render(<Search />);
    const input = screen.getByPlaceholderText("type the github's username...");

    fireEvent.change(input, { target: { value: "brunocharamba" } });
    expect(input.value).toBe("brunocharamba");
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http://api.disneyapi.dev/characters", (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            _id: "6",
            name: "Abu",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png/revision/latest?cb=20200630025227",
          },
          {
            _id: "7",
            name: "Simba",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png/revision/latest?cb=20200630025227",
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders The World of Disney title", async () => {
  render(<App />);
  // Adding aync await to this function removes warning
  await waitFor(() => screen.getAllByText("Add to Favourites"));
  const titleElement = screen.getByText(/The World of Disney/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders the character Abu", async () => {
  // Arrange
  render(<App />);

  // Act
  // We use getAllByText as there are multiple 'Add to Favourites'
  await waitFor(() => screen.getAllByText("Add to Favourites"));
  const characterElement = screen.getByText(/Abu/i);

  // Assert
  expect(characterElement).toBeInTheDocument();
});

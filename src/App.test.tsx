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

test("renders the world of disney title", async () => {
  render(<App />);
  await waitFor(() => screen.getAllByText("Add to Favourites"));
  const linkElement = screen.getByText(/The World of Disney/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the character abu", async () => {
  render(<App />);
  await waitFor(() => screen.getAllByText("Add to Favourites"));
  const linkElement = screen.getByText(/Abu/i);
  expect(linkElement).toBeInTheDocument();
});

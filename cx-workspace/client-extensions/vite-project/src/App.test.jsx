import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render title with content from project-library", () => {
    render(<App />);

    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("2023-01-01 : Liferay");
  });
});

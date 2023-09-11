import main from "./";
import { screen } from "@testing-library/dom";

describe("Render", () => {
  const root = document.createElement("div");

  beforeAll(() => {
    root.id = "root_node";
    document.body.appendChild(root);
  });

  afterEach(() => {
    root.innerHTML = "";
  });

  it("rendering", () => {
    main({ portletElementId: "root_node" });

    expect(
      screen.getByRole("heading", { name: /hello world/i })
    ).toBeInTheDocument();
  });
});

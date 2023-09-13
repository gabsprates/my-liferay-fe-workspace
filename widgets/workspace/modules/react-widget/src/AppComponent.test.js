import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AppComponent from "./AppComponent";

describe("Component: AppComponent", () => {
  it("should render", async () => {
    render(
      <AppComponent
        portletNamespace="_test"
        contextPath="/test"
        portletElementId="root_node"
        configuration={{ system: {} }}
      />
    );

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "portlet-element-id: root_node" })
      ).toBeInTheDocument()
    );
  });
});

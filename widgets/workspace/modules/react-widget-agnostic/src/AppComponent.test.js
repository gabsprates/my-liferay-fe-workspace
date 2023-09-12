import React from "react";
import { render, screen } from "@testing-library/react";
import AppComponent from "./AppComponent";

describe("Component: AppComponent", () => {
  it("should render", () => {
    render(
      <AppComponent
        portletNamespace="_test"
        contextPath="/test"
        portletElementId="root_node"
        configuration={{ system: {} }}
      />
    );

    expect(
      screen.getByRole("heading", { name: "portlet-element-id: root_node" })
    ).toBeInTheDocument();
  });

  it("should render table", () => {
    render(
      <AppComponent
        portletNamespace="_test"
        contextPath="/test"
        portletElementId="root_node"
        configuration={{ system: {} }}
      />
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});

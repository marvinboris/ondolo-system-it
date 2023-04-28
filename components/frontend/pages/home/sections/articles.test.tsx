import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomeArticlesSection from "./articles";

describe("HomeArticlesSection", () => {
  it("should render the articles provided", () => {
    const articles = [
      <article key="1">
        <h3>Title 1</h3>
        <p>Content 1</p>
      </article>,
      <article key="2">
        <h3>Title 2</h3>
        <p>Content 2</p>
      </article>,
    ];
    render(<HomeArticlesSection articles={articles} />);
    expect(screen.getByText("Nos derniers articles")).toBeInTheDocument();
    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });
});

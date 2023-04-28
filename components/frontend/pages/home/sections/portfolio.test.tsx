import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomePortfolioSection from "./portfolio";

describe("HomePortfolioSection", () => {
  it("should render the portfolio passed as props", () => {
    const portfolio = (
      <>
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </>
    );
    render(<HomePortfolioSection portfolio={portfolio} />);
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

  it("should render a link to /realisations", () => {
    const portfolio = (
      <>
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </>
    );
    render(<HomePortfolioSection portfolio={portfolio} />);
    expect(
      screen.getByRole("link", { name: /en savoir plus/i })
    ).toHaveAttribute("href", "/realisations");
  });
});

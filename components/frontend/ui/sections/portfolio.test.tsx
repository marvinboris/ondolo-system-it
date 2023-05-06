import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import PortfolioSection from "./portfolio";

import { portfolio } from "@/utils/resources/data";

describe("PortfolioSection", () => {
  it("should render portfolio projects", () => {
    render(<PortfolioSection />);
    portfolio.forEach((project, i) => {
      expect(
        screen.getByAltText(`Project image - ${i + 1}`)
      ).toBeInTheDocument();
      screen.getAllByText(project.name).forEach(item => {
        expect(item).toBeInTheDocument();
      });
      screen.getAllByText(project.type).forEach(item => {
        expect(item).toBeInTheDocument();
      })
    });
  });

  it("should have a link to /realisations", () => {
    render(<PortfolioSection />);
    const link = screen.getByText("En Savoir Plus");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/realisations");
  });
});

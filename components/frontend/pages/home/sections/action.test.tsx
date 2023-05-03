import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import HomeActionSection from "./action";

describe("HomeActionSection", () => {
  it("should display the section title and content", () => {
    const { getByText } = render(<HomeActionSection />);
    expect(getByText("Une idée ? Un projet ?")).toBeInTheDocument();
    expect(getByText("Nous sommes à votre écoute")).toBeInTheDocument();
    expect(getByText(/Nous sommes fiers de notre travail/)).toBeInTheDocument();
    expect(getByText(/Contactez-nous dès aujourd'hui/)).toBeInTheDocument();
  });

  it("should have a call-to-action button", () => {
    const { getByRole } = render(<HomeActionSection />);
    const ctaButton = getByRole("link", { name: "Nous Contacter" });
    expect(ctaButton).toHaveAttribute("href", "/contact");
    expect(ctaButton).toHaveClass(
      ..."rounded-[7px] border border-primary-900 bg-white px-10 py-2.5 text-secondary-900 transition-all duration-200 md:border-0".split(
        " "
      )
    );
  });
});

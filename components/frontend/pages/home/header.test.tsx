import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import HomeHeader from "./header";

describe("HomeHeader component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<HomeHeader />);

    expect(getByText("Votre Agence")).toBeInTheDocument();
    expect(getByText("Dev. Web/Mobile")).toBeInTheDocument();
    expect(getByText("Support Technique")).toBeInTheDocument();
    expect(getByText("Créative")).toBeInTheDocument();
    expect(
      getByText(
        "Bienvenue chez notre entreprise, spécialisée dans la création de site web, le développement d'applications web et mobile, le support technique et l'infographie."
      )
    ).toBeInTheDocument();
    expect(getByText("Nous contacter")).toBeInTheDocument();
  });
});

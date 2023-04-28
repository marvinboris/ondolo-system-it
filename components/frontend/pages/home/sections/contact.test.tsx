import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomeContactSection from "./contact";

describe("HomeContactSection", () => {
  it("should render the component with correct texts", () => {
    render(<HomeContactSection />);
    expect(screen.getByText("Envie de discuter ?")).toBeInTheDocument();
    expect(screen.getByText("Informations de contact")).toBeInTheDocument();
    expect(screen.getByText("Dites-nous quelque chose")).toBeInTheDocument();
    expect(screen.getByText("Nom")).toBeInTheDocument();
    expect(screen.getByText("Prénom")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
    expect(screen.getByText("Envoyer")).toBeInTheDocument();
  });
});

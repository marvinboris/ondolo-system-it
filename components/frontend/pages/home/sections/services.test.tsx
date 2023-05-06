import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import HomeServicesSection from "./services";
import { services } from "@/utils/resources/data";

describe("HomeServicesSection", () => {
  test("renders services with their corresponding link", () => {
    const { container } = render(<HomeServicesSection />);
    const serviceBlocks = container.querySelectorAll(".service-block");

    serviceBlocks.forEach((serviceBlock, i) => {
      expect(serviceBlock).toHaveTextContent(services[i].title);
      expect(serviceBlock.querySelector("a")).toHaveAttribute(
        "href",
        `/services/${services[i].slug}`
      );
    });
  });
});

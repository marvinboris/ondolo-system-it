import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import HomeServicesSection from "./services";

describe("HomeServicesSection", () => {
  it("should render the services passed as props", () => {
    const services = (
      <>
        <div>Service 1</div>
        <div>Service 2</div>
        <div>Service 3</div>
      </>
    );
    const { getByText } = render(<HomeServicesSection services={services} />);
    expect(getByText("Service 1")).toBeInTheDocument();
    expect(getByText("Service 2")).toBeInTheDocument();
    expect(getByText("Service 3")).toBeInTheDocument();
  });
});

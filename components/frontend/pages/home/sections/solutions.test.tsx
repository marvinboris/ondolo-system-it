import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import HomeSolutionsSection from "./solutions";

describe("HomeSolutionsSection", () => {
  it("should render the solutions passed as props", () => {
    const solutions = [
      <div key={1}>Solution 1</div>,
      <div key={2}>Solution 2</div>,
      <div key={3}>Solution 3</div>,
    ];
    const { getByText } = render(
      <HomeSolutionsSection solutions={solutions} />
    );
    expect(getByText("Solution 1")).toBeInTheDocument();
    expect(getByText("Solution 2")).toBeInTheDocument();
    expect(getByText("Solution 3")).toBeInTheDocument();
  });

  it('should render the "En Savoir Plus" link', () => {
    const { getByText } = render(<HomeSolutionsSection solutions={[]} />);
    expect(getByText("En Savoir Plus")).toBeInTheDocument();
  });
});

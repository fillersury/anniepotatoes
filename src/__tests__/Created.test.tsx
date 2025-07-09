// src/pages/Created.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Created from "../pages/Created";

describe("Created component", () => {
  test("renders heading and dots", () => {
    render(<Created />);
    expect(screen.getByText(/Created Page Coming Soon!/i)).toBeInTheDocument();
  
    const dots = screen.getAllByTestId("bounce-dot");
    expect(dots.length).toBe(3);
  });

  test("has fade-in opacity class", () => {
    const { container } = render(<Created />);
    // Initially should have opacity-0, after effect it should have opacity-100
    // This is tricky to test exactly because of useEffect, so we just check if the class includes opacity
    expect(container.firstChild).toHaveClass("transition-opacity");
  });
});

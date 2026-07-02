import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("should render button with correct label and attibutes", () => {
    render(
      <Button href={process.env.NEXT_PUBLIC_GYMMANAGER_URL!} label="Sign up" />,
    );

    const link = screen.getAllByRole("link", { name: "Sign up" })[0];

    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_GYMMANAGER_URL,
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");

    link.focus();
    expect(link).toHaveFocus();
  });
});

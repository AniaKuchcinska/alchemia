import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders external link with correct security attributes", () => {
    render(
      <Button
        href={process.env.NEXT_PUBLIC_GYMMANAGER_URL!}
        label="Sign up"
        external
      />,
    );

    const link = screen.getByRole("link", { name: "Sign up" });

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

  it("renders internal link without new tab attributes", () => {
    render(<Button href="/contact" label="Kontakt" />);

    const link = screen.getByRole("link", { name: "Kontakt" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/contact");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("renders a button when onClick is provided", () => {
    const handleClick = vi.fn();
    render(<Button label="Filtruj" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: "Filtruj" });
    expect(button).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import * as stories from "./Hero.stories";
import { composeStories } from "@storybook/react";
import { act } from "@testing-library/react";

const { Default, SingleAnnouncement } = composeStories(stories);

describe("Hero", () => {
  it("renders hero content", () => {
    render(<Default />);
    expect(
      screen.getByRole("heading", { name: "Alchemia Dance Studio Wrzesnia" }),
    ).toBeInTheDocument();
  });

  it("renders CTA", () => {
    render(<Default />);
    const button = screen.getByRole("link", { name: /sign up/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/signup");
  });

  it("renders background image", () => {
    render(<Default />);
    expect(
      screen.getByAltText("Alchemia Dance studio students dancing"),
    ).toBeInTheDocument();
  });

  it("renders single announcement", () => {
    render(<SingleAnnouncement />);
    expect(
      screen.getByText(/Enrollment Open for 2026\/2027 Season!/i),
    ).toBeInTheDocument();
  });

  it("rotates to the next announcement every 7 seconds", () => {
    vi.useFakeTimers();

    render(<Default />);

    expect(
      screen.getByText("Enrollment Open for 2026/2027 Season!"),
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(7000);
    });

    expect(
      screen.getByText(/Summer Camp subscriptions are open!/i),
    ).toBeInTheDocument();

    vi.useRealTimers();
  });
});

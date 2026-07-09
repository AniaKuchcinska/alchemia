import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStories, setProjectAnnotations } from "@storybook/react";
import plMessages from "@/i18n/messages/pl.json";

import * as stories from "./Navbar.stories";
import * as previewAnnotations from "@/.storybook/preview";
import { NextIntlClientProvider } from "next-intl";
import MobileNav from "@/app/components/navigation/MobileNav";
import { navigation } from "@/app/data/navigation";

setProjectAnnotations(previewAnnotations);

const { Default } = composeStories(stories);

const simulateScroll = async (scrollY: number) => {
  await act(async () => {
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: scrollY,
    });
    window.dispatchEvent(new Event("scroll"));
  });
};

const renderMobileNav = () =>
  render(
    <NextIntlClientProvider locale="pl" messages={plMessages}>
      <MobileNav navItems={navigation} />
    </NextIntlClientProvider>,
  );

describe("Navbar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  it("renders the logo", () => {
    render(<Default />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("logo links to home", () => {
    render(<Default />);
    expect(screen.getByRole("img").closest("a")).toHaveAttribute("href", "/");
  });

  it("is not scrolled by default", () => {
    render(<Default />);

    expect(screen.getByRole("banner")).toHaveAttribute(
      "data-scrolled",
      "false",
    );
  });

  it("becomes scrolled", async () => {
    render(<Default />);

    await simulateScroll(100);

    expect(screen.getByRole("banner")).toHaveAttribute("data-scrolled", "true");
  });

  it("reverts to unscrolled when back at top", async () => {
    render(<Default />);
    await simulateScroll(100);
    await simulateScroll(0);
    expect(screen.getByRole("banner")).toHaveAttribute(
      "data-scrolled",
      "false",
    );
  });

  it("mobile menu starts closed", () => {
    renderMobileNav();

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("opens mobile menu", async () => {
    const user = userEvent.setup();

    renderMobileNav();

    await user.click(screen.getByTestId("mobile-nav-open-trigger"));

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("shows mobile navigation items", async () => {
    const user = userEvent.setup();

    renderMobileNav();

    await user.click(screen.getByTestId("mobile-nav-open-trigger"));

    expect(screen.getByText(plMessages.nav.about)).toBeInTheDocument();

    expect(screen.getByText(plMessages.nav.offer)).toBeInTheDocument();

    expect(screen.getByText(plMessages.nav.contact)).toBeInTheDocument();
  });

  it("opens and closes accordion sections", async () => {
    const user = userEvent.setup();

    renderMobileNav();

    await user.click(screen.getByTestId("mobile-nav-open-trigger"));

    await user.click(screen.getByText(plMessages.nav.about));

    expect(screen.getByText(plMessages.nav.about_school)).toBeInTheDocument();

    await user.click(screen.getByText(plMessages.nav.offer));

    expect(
      screen.queryByText(plMessages.nav.about_school),
    ).not.toBeInTheDocument();

    expect(screen.getByText(plMessages.nav.offer_kids)).toBeInTheDocument();
  });

  it("closes with Escape", async () => {
    const user = userEvent.setup();

    renderMobileNav();

    await user.click(screen.getByTestId("mobile-nav-open-trigger"));

    expect(screen.getByRole("navigation")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("handles scroll changes", async () => {
    render(<Default />);

    await simulateScroll(100);

    expect(screen.getByRole("banner")).toHaveAttribute("data-scrolled", "true");
  });
});

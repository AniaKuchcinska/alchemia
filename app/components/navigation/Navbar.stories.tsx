import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from "@/app/components/navigation/Navbar";
import { within, userEvent } from "storybook/test";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      value: "light",
    },
  },
};

export const MobileNavbarClosed: Story = {
  parameters: {
    backgrounds: {
      value: "dark",
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileNavbarOpen: Story = {
  ...MobileNavbarClosed,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const hamburger = canvas.getByTestId("mobile-nav-open-trigger");
    await userEvent.click(hamburger);
  },
};

export const MobileNavbarScrolled: Story = {
  parameters: {
    backgrounds: {
      value: "light",
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => {
      Object.defineProperty(window, "scrollY", {
        writable: true,
        configurable: true,
        value: 100,
      });
      window.dispatchEvent(new Event("scroll"));
      return <Story />;
    },
  ],
};

import Hero from "@/app/components/ui/hero/Hero";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Alchemia Dance Studio Wrzesnia",
    cta: {
      label: "Sign Up",
      href: "/signup",
    },
    background: "/public/hero.webp",
    backgroundType: "image",
    backgroundAlt: "Alchemia Dance studio students dancing",
    banners: [
      "Enrollment Open for 2026/2027 Season!",
      "Summer Camp subscriptions are open!",
    ],
  },
};

export const SingleAnnouncement: Story = {
  args: {
    ...Default.args,
    banners: ["Enrollment Open for 2026/2027 Season!"],
  },
};

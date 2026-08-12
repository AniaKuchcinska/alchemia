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
    title: {
      primary: "Your dance school",
      secondary: "Alchemia Wrzesnia",
    },
    cta: {
      label: "Sign Up",
      href: "/signup",
    },
    background: "/public/hero.webp",
    backgroundType: "image",
    backgroundAlt: "Alchemia Dance studio students dancing",
    announcements: [
      "Enrollment Open for 2026/2027 Season!",
      "Summer Camp subscriptions are open!",
    ],
  },
};

export const SingleAnnouncement: Story = {
  args: {
    ...Default.args,
    announcements: ["Enrollment Open for 2026/2027 Season!"],
  },
};

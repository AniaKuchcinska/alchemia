import Button from "./Button";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/SignupButton",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    label: "Button",
  },
};

export const SignUpButton: Story = {
  args: {
    href: "https://alchemia.gymmanager.io/account/login",
    label: "Sign Up",
  },
};

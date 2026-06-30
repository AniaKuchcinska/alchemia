import SignupButton from "./SignupButton";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/SignupButton",
  component: SignupButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignupButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "https://alchemia.gymmanager.io/account/login",
  },
};

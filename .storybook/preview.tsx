import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";
import "../app/globals.css";
import plMessages from "../i18n/messages/pl.json";
import enMessages from "../i18n/messages/en.json";

const messages = { pl: plMessages, en: enMessages };

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Story locale",
      defaultValue: "pl",
      toolbar: {
        icon: "globe",
        items: [
          { value: "pl", title: "Polski" },
          { value: "en", title: "English" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const locale = context.globals.locale as keyof typeof messages;

      return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;

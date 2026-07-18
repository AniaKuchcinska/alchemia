import { defineField, defineType } from "sanity";

export const localizedStringType = defineType({
  name: "localizedString",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({
      name: "pl",
      title: "Polish",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "en",
      title: "English",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

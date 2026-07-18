import { defineField, defineType } from "sanity";

export const localizedBlockContentType = defineType({
  name: "localizedBlockContent",
  title: "Localized block content",
  type: "object",
  fields: [
    defineField({
      name: "pl",
      title: "Polish",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});

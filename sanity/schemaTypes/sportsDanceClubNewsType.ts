import { defineField, defineType } from "sanity";

export const sportsDanceClubNewsType = defineType({
  name: "sportsDanceClubNews",
  title: "Sports Dance Club News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Post title",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publication date",
      type: "date",
      description: "Date when this news item should appear on the website.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Post image",
      type: "image",
      description: "Optional image displayed at the top of the post",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "localizedString",
          description: "Describe the image for accessibility",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Post content",
      type: "localizedBlockContent",
      description: "Main content of the post",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title.pl",
      date: "publishedAt",
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date
          ? new Date(date).toLocaleDateString("pl-PL")
          : "No publication date",
      };
    },
  },
});

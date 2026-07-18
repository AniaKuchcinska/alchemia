import { defineField, defineType } from "sanity";

export const homeHeroType = defineType({
  name: "homepageHero",
  title: "Homepage Hero",
  type: "document",
  fields: [
    defineField({
      name: "background",
      title: "Background image",
      description: "Image displayed behind the hero section on the home page.",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "localizedString",
        },
      ],
    }),
    defineField({
      name: "announcements",
      title: "Homepage announcements",
      description: "Optional messages shown below the title on home page",
      type: "array",
      validation: (rule) => rule.max(3),
      of: [
        {
          type: "object",
          title: "Announcement",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "localizedString",
              validation: (rule) => rule.required(),
            },
            {
              name: "enabled",
              title: "Show announcement",
              type: "boolean",
              initialValue: true,
            },
          ],
          preview: {
            select: {
              title: "text.pl",
              enabled: "enabled",
            },
            prepare({ title, enabled }) {
              return {
                title,
                subtitle: enabled ? "Shown on homepage" : "Hidden",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "showSignupButton",
      title: "Show signup button",
      type: "boolean",
      initialValue: true,
    }),
  ],
});

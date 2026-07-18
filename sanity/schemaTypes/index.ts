import { type SchemaTypeDefinition } from "sanity";
import { homeHeroType } from "@/sanity/schemaTypes/homeHeroType";
import { sportsDanceClubNewsType } from "@/sanity/schemaTypes/sportsDanceClubNewsType";
import { localizedStringType } from "@/sanity/schemaTypes/localizedStringType";
import { localizedBlockContentType } from "@/sanity/schemaTypes/localizedBlockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeHeroType,
    sportsDanceClubNewsType,
    localizedStringType,
    localizedBlockContentType,
  ],
};

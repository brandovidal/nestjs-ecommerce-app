export interface ProductSchema {
  uid: string;
  apiID: string;
  schema: Schema;
}

interface Schema {
  draftAndPublish: boolean;
  displayName: string;
  singularName: string;
  pluralName: string;
  description: string;
  pluginOptions: PluginOptions;
  kind: string;
  collectionName: string;
  attributes: Attributes;
  visible: boolean;
  restrictRelationsTo: null;
}

interface Attributes {
  name: Name;
  slug: Slug;
  description: Description;
  active: Description;
  price: Description;
  origin: Origin;
  taste: PluginOptions;
  isFeatured: PluginOptions;
  images: PluginOptions;
  category: Category;
}

interface Category {
  type: string;
  relation: string;
  target: string;
  targetAttribute: null;
  private: boolean;
}

interface Origin {
  pluginOptions: PluginOptions;
  type: string;
  enum: string[];
}

interface Description {
  pluginOptions: PluginOptions;
  type: string;
}

interface Slug {
  pluginOptions: PluginOptions;
  type: string;
  targetField: string;
  required: boolean;
}

interface Name {
  pluginOptions: PluginOptions;
  type: string;
  required: boolean;
  minLength: number;
}

interface PluginOptions {
  i18n: I18n;
}

interface I18n {
  localized: boolean;
}

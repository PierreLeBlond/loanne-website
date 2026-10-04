export type Filters = "all" | "TDA-H" | "TCA";

export type Resources = {
  categories: { label: string, resources: Resource[] }[];
  filter: Filters;
  filters: { id: Filters, label: string }[];
}

export type Resource = {
  content: string;
  filters: Filters[];
}

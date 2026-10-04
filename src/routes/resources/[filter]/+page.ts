import type { PageLoad } from "./$types";
import { type Filters } from "./resources";

export const load: PageLoad = async ({ params, parent }) => {
  const { categories } = await parent();

  return {
    filter: params.filter,
    categories: categories.map(category => ({
      ...category,
      resources: category.resources.filter(resource => params.filter == "all" || resource.filters.includes(params.filter as Filters))
    }))
  }
}

export const load = async ({ params, parent }) => {
  const { categories } = await parent();

  return {
    filter: params.filter,
    categories: categories.map(category => ({
      ...category,
      resources: category.resources.filter(resource => params.filter == "all" || resource.filters.includes(params.filter))
    }))
  }
}

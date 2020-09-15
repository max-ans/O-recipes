import slugify from 'slugify';

export const slugger = (string) => (
  slugify(string, { lower: true })
);

export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => slugger(recipe.title) === slug)
);

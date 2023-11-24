const toSlugCase = (model, field) => model[field].toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');
export { toSlugCase };

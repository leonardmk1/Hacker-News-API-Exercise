export const rememberSearch = (searchTerm) => {
  return {
    type: "CREATE_SEARCH",
    searchTerm: searchTerm,
  };
};

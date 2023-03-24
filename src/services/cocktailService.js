import http from './httpService';

export const getCocktails = (searchTerm) =>
  http.get(`/search.php?s=${searchTerm}`);

export const getCocktail = (id) => http.get(`/lookup.php?i=${id}`);

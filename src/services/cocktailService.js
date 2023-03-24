import http from './httpService';

export function getCocktails(searchTerm) {
  return http.get(`/search.php?s=${searchTerm}`);
}

export function getCocktail(id) {
  return http.get(`/lookup.php?i=${id}`);
}

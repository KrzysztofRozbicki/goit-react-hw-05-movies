export const convertGenres = genres => {
  if (Array.isArray(genres)) {
    return genres.map(movie => movie.name).join(' ');
  } else {
    return 'No genres available';
  }
};

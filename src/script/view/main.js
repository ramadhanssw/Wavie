import "../component/movies.js";
import "../component/search-bar.js";
import DataSource from "../data/api.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieCatalogElement = document.querySelector("movie-catalog");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieCatalogElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieCatalogElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

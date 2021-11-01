class Data {
  static searchMovie(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=a72d904e&s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`This title "${keyword}" is not availabe!`);
        }
      });
  }
}

export default Data;

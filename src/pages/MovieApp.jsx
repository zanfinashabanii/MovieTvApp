import Header from "../components/HeaderMovie";
import MovieList from "../components/MovieList";
import { createContext, useEffect, useState } from "react";

let url = `${
  import.meta.env.VITE_API_BASE_URL
}/discover/movie?sort_by=popularity.desc&api_key=${
  import.meta.env.VITE_API_KEY
}`;

// step 1: Create Context
const MoviesContext = createContext();
export { MoviesContext };

function App() {
  const [movies, setMovies] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchUrl() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.error(error));
    }
    fetchUrl(url);
  }, [fetchUrl]);

  const getMovies = (movieType) => {
    if (movieType == "Popular") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/movie?sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    if (movieType == "Drama") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    if (movieType == "Kids") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    if (movieType == "Horror") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    setFetchUrl(url);
  };

  // const getMovies = (movieType) => {
  // 	let url;

  // 	switch (movieType) {
  // 		case 'Popular':
  // 			url = `${
  // 				import.meta.env.VITE_API_BASE_URL
  // 			}/discover/movie?sort_by=popularity.desc&api_key=${
  // 				import.meta.env.VITE_API_KEY
  // 			}`;
  // 			break;
  // 		case 'Drama':
  // 			url = `${
  // 				import.meta.env.VITE_API_BASE_URL
  // 			}/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${
  // 				import.meta.env.VITE_API_KEY
  // 			}`;
  // 			break;
  // 		case 'Kids':
  // 			url = `${
  // 				import.meta.env.VITE_API_BASE_URL
  // 			}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
  // 				import.meta.env.VITE_API_KEY
  // 			}`;
  // 			break;
  // 		case 'Thriller':
  // 			url = `${
  // 				import.meta.env.VITE_API_BASE_URL
  // 			}/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=${
  // 				import.meta.env.VITE_API_KEY
  // 			}`;
  // 			break;
  // 	}

  // 	setFetchUrl(url);
  // };

  const searchMovies = () => {
    url = `${
      import.meta.env.VITE_API_BASE_URL
    }/search/movie?query=${search}&api_key=${import.meta.env.VITE_API_KEY}`;

    setFetchUrl(url);
    setSearch("");
  };

  return (
    // step 2: Provide Context
    <MoviesContext.Provider
      value={{
        movies,
        getMovies,
        search,
        searchMovies,
        setSearch,
      }}
    >
      <>
        <Header
          getMovies={getMovies}
          search={search}
          searchMovies={searchMovies}
          setSearch={setSearch}
        />
        <MovieList movies={movies} />
      </>
    </MoviesContext.Provider>
  );
}

export default App;

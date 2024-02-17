import Header from "../components/HeaderTv";
import TvList from "../components/TvList";
import { createContext, useEffect, useState } from "react";

let url = `${
  import.meta.env.VITE_API_BASE_URL
}/discover/tv?sort_by=popularity.desc&api_key=${
  import.meta.env.VITE_API_KEY
}`;

const TvShowContext = createContext();
export { TvShowContext };

function App() {
  const [tvShows, setTvShows] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchUrl() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setTvShows(data.results))
        .catch((error) => console.error(error));
    }
    fetchUrl(url);
  }, [fetchUrl]);

  const getTvShows = (tvShowType) => {
    if (tvShowType == "Popular") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/tv?sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    if (tvShowType == "Reality") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/tv?with_genres=10764&sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    if (tvShowType == "Kids") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/tv?with_genres=10762&sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    } 
    if (tvShowType == "Crime") {
      url = `${
        import.meta.env.VITE_API_BASE_URL
      }/discover/tv?with_genres=80&sort_by=popularity.desc&api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    setFetchUrl(url);
  };
  const searchTvShow = () => {
    url = `${
      import.meta.env.VITE_API_BASE_URL
    }/search/tv?query=${search}&api_key=${import.meta.env.VITE_API_KEY}`;

    setFetchUrl(url);
    setSearch("");
  };

  return (
    <TvShowContext.Provider
      value={{
        tvShows,
        getTvShows,
        search,
        searchTvShow,
        setSearch,
      }}
    >
      <>
        <Header
          getTvShows={getTvShows}
          search={search}
          searchTvShow={searchTvShow}
          setSearch={setSearch}
        />
        <TvList tvShows={tvShows} />
      </>
    </TvShowContext.Provider>
  );
}

export default App;

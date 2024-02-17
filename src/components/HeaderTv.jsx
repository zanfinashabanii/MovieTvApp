import { useContext } from "react";
import { TvShowContext } from "../pages/TvApp";
import { Grid, Input, Link } from "@mui/joy";
import logo from "../assets/logo.svg"; // Import your image here
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Reality", "Crime"];

  const { getTvShows, search, setSearch, searchTvShow } =
    useContext(TvShowContext);

  return (
    <Grid className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={1}>
        <RouterLink to="/">
          <img src={logo} alt="TV Show App" />
        </RouterLink>
      </Grid>
      <Grid xs={8}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              color="success"
              variant="solid"
              key={position}
              name={value}
              onClick={(e) => getTvShows(e.target.name)}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid xs={3}>
        <Input
          color="success"
          size="sm"
          variant="soft"
          placeholder="Search a TV show..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchTvShow}>Search Tv Show</button>
      </Grid>
    </Grid>
  );
}

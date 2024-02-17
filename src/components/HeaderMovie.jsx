import { useContext } from "react";
import { MoviesContext } from "../pages/MovieApp";
import { Grid, Input, Link } from "@mui/joy";
import logo from "../assets/logo.svg";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Drama", "Horror"];

  const { getMovies, search, setSearch, searchMovies } =
    useContext(MoviesContext);

  return (
    <Grid className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={1}>
        <RouterLink to="/">
          <img src={logo} alt="Movie App" />
        </RouterLink>
      </Grid>
      <Grid xs={8}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              color="warning"
              variant="solid"
              key={position}
              name={value}
              onClick={(e) => getMovies(e.target.name)}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid xs={3}>
        <Input
          color="warning"
          size="sm"
          variant="soft"
          placeholder="Search a movie..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchMovies}>Search Movie</button>
      </Grid>
    </Grid>
  );
}

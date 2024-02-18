import { useContext } from "react";
import { TvShowContext } from "../pages/TvApp";
import { Grid, Input, Link, Button } from "@mui/joy";
import logo from "../assets/logo.svg"; // Import your image here
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Reality", "Crime"];

  const { getTvShows, search, setSearch, searchTvShow } = useContext(
    TvShowContext
  );

  return (
    <Grid  className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid style={{ alignSelf: 'center' }} item xs={3} sm={3} md={2} lg={2} xl={2}>
        <RouterLink to="/">
          <img src={logo} alt="TV Show App" />
        </RouterLink>
      </Grid>
      <Grid style={{ alignSelf: 'center' }} item xs={6} sm={6} md={6} lg={6}xl={6}>
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
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4} >
        <Grid style={{ alignSelf: 'center' }}item xs={5} sm={5} md={5} lg={6} xl={6}>
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
        </Grid>
        <Grid item xs={6} sm={7} md={7}  lg={6} xl={6}>
        <button onClick={searchTvShow}>Search Tv show</button>
        </Grid>
      </Grid>
    </Grid>
  );
}

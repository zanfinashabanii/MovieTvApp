import { Link } from "react-router-dom";
import { Button } from "@mui/joy"; // Import Button component from Joy UI

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movie or TV Show: Choose Your Entertainment</h1>
      <div>
        <Link to="/movie">
          <Button style={{ margin: "10px" }} color="warning">Movie</Button> {/* Use warning color */}
        </Link>
        <Link to="/tv">
          <Button style={{ margin: "10px" }} color="success">TV Show</Button> {/* Use success color */}
        </Link>
      </div>
    </div>
  );
}

export default Home;

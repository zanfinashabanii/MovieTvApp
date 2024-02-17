import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tv from './pages/TvApp';
import Movie from './pages/MovieApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;

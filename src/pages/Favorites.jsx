import "../css/Favorites.css";
import "../css/Home.css"; // Reuse grid layout from Home styles
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      {favorites && favorites.length > 0 ? (
        <>
          <h2>Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;

import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length >0) {
    // console.log(favorites.length);
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))} 
      </div>
      
    );
  }

  else{return (
    <div className="favorite-empty">
      <h3>No Favorites yet</h3>
      <p>Click on the heart button to add movies to favorites</p>
      <p>Add login and data storage i.e. backend <br/>
         Figure out how to add search and display by category / Allow users to filter movies by genre (e.g., Action, Comedy). <br/>
         add information regarding from where to watch<br/>
         Filter / Sort Favorites<br/>
        Allow users to sort favorites by:<br/>
        Title (A–Z or Z–A)<br/>
        Rating (High to Low)<br/>
        Release date<br/>
        Show a count of favorite movies as a badge/icon in the navbar or on the heart button. <br/>
        Dark Mode / Theme Toggle<br/>
        add Pagination <br/>
        implemet App bar with a primary search field <br/>
        {/* function clearFavorites() { setFavorites([]); } */}
      </p>
    </div>
  );}
}

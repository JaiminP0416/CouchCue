import { useMovieContext } from "../contexts/MovieContext";
import '../App.css';

export default function MovieCard({movie}){

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e){
        e.preventDefault();
        if (favorite) 
            {
               removeFromFavorites(movie.id); 
            //    console.log("Removed from favorite")
            }
        else {
            addToFavorites(movie);
            // console.log("added to favorite")
        }
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                
                <div className="movie-overlay">
                    <button className = {`favorite-btn ${favorite ? "active": ""} `} onClick = {onFavoriteClick}>
                        ❤
                    </button>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title} />
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>);
}
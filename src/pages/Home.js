import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { searchMovies, getPopularMovies } from "../services/api";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Fai             led to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return
    
    setLoading(true)
    
    try{
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    }catch(err){

      console.log(err)
      setError("Failed to search movies...")

    }finally{
      setLoading(false)
    }

    // setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        {/* <input
          type="text"
          placeholder="Search Movie Here..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack 
          spacing={2} 
          direction="row" 
          sx={{ mt: 1, mb:3, mr:2, ml:2}}
          justifyContent="center"  
        >
        <TextField
          hiddenLabel
          id="outlined-basic"
          className="search-input"
          placeholder="Search Movie Here..."
          defaultValue="Small"
          variant="outlined"
          size="small"
          sx={{  width: { xs: '100%', sm: '300px' }}} // Change it using the video to be responsive
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // sx={{
          //   '& .MuiOutlinedInput-root': {
          //     backgroundColor: 'info.main',
          //     borderRadius: 1,
          //     '&:hover': {
          //       backgroundColor: 'info.dark',
          //     },
          //     '&.Mui-focused': {
          //       backgroundColor: 'info.main',
          //     },
          //   },
          // }}
        />
         {/* <TextField id="outlined-basic" hiddenLabel variant="outlined" /> */}
        
        {/* <button type="submit" className="Search-btn">
          Search
        </button> */}
        <Button color = "secondary" type = "submit" className = "Search-btn" variant="contained">Search</Button>
        </Stack>
      </Box>
      </form>

      {/* <div className="movies-grid">
                {movies.map((movie) => ( 
                  movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />))} 
            </div> */}

            {error && <div className = 'error-message'> {error} </div>}

      {loading ? 
        <div className="loading">Loading...</div>
       :  movies && movies.length > 0 ? 
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div> : <div>No movies found.</div>
      }
    </div>
  );
}

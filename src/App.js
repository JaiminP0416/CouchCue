import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const theme = createTheme({

  palette:{
    primary: {
      light : '#fff', //white
      main : '#161a1d', //light black
      dark : '#0b090a' //dark black
    },
    secondary: {
      light : '#e5383b', //light red
      main : '#ba181b', //dark red
      dark : '#660708' //darker red
    },
    info: {   //used info instead of tertiry/custom for easy access to the 3rd color
      light: '#f5f3f4', //light grey
      main: '#d3d3d3', //med grey 
      dark: '#b1a7a6' // dark grey - BG
    }
  },
   typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  }
});


export default function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <><NavBar/><Home/></>
    },
    {
      path: '/home',
      element : <><NavBar/><Home/></>
    },
    {
      path: "/my account",
      element : <><NavBar/><p>This page is under Development</p></>
    },
    {
      path : "favorites",
      element : <><NavBar/><Favorites/></>
    }
  ])

  return(
    <ThemeProvider theme = {theme}>  
      <MovieProvider>
          <RouterProvider router = {router}/>
      </MovieProvider>
    </ThemeProvider>
  );

}



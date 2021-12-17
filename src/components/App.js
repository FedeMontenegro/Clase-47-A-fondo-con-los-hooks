import React from 'react';
//import SideBar from './SideBar';
import SearchMovies from "./SearchMovies.jsx";
//import ContentWrapper from './ContentWrapper';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
         {/*  <SideBar /> */}
          <SearchMovies />
        </div>
    </React.Fragment>
  );
}

export default App;

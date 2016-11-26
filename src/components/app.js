import React from 'react';
import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weatherlist';

const App = () => {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
};

export default App;

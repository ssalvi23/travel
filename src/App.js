import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CityInfo from './components/CityInfo';

function App() {
  const [cityInfo, setCityInfo] = useState(null);

  // Sample city data (for demonstration)
  const cityData = {
    NewYork: {
      name: 'New York',
      country: 'United States',
      population: '8.4 million',
    },
    London: {
      name: 'London',
      country: 'United Kingdom',
      population: '8.9 million',
    },
    Paris: {
      name: 'Paris',
      country: 'France',
      population: '2.1 million',
    },
    // Add more cities as needed
  };

  const searchCity = (city) => {
    // Check if the city exists in the sample data
    if (cityData[city]) {
      setCityInfo(cityData[city]);
    } else {
      // Handle the case when the city is not found
      alert('City not found. Please enter a valid city name.');
    }
  };

  return (
    <div className="App">
      <h1>Travel Advisory WebApp</h1>
      <SearchBar onSearch={searchCity} />
      {cityInfo && <CityInfo cityInfo={cityInfo} />}
    </div>
  );
}

export default App;

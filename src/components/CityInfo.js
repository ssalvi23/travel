import React from 'react';

function CityInfo({ cityInfo }) {
  return (
    <div>
      <h2>{cityInfo.name}</h2>
      <p>Country: {cityInfo.country}</p>
      <p>Population: {cityInfo.population}</p>
      {/* Add more information as needed */}
    </div>
  );
}

export default CityInfo;

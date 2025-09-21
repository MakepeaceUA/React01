import React from 'react';
import './App.css';
import CityInfo from './CityInfo.jsx';
import CityInfoClass from './CityInfoClass.jsx';

function App() {
    const cityData = {
        cityName: 'Kiev',
        country: 'Ukraine',
        foundedYear: 482,
        landmarks: [
            {
                name: 'St. Sophia Cathedral',
                imageUrl: 'https://lp-cms-production.imgix.net/2019-06/58ee91794d8c3e23c4fc19d8137074b3-kyevo-pecherska-lavra.jpg'
            },
            {
                name: 'Kyiv-Pechersk Lavra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9Tp6Nv3jP_szCgjtAMXgJTAFn894PLdYCA&s'
            },
            {
                name: 'Motherland',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HSGkY-MErp3ScVd_ey3d1ETxckvhNtchYg&s'
            }
        ]
    };

    return (
    <div className="App">
      <header className="App-header">
        <CityInfo
          cityName={cityData.cityName}
          country={cityData.country}
          foundedYear={cityData.foundedYear}
          landmarks={cityData.landmarks}
        />

        <hr style={{width: '80%', margin: '40px 0'}} />

        <CityInfoClass
          cityName={cityData.cityName}
          country={cityData.country}
          foundedYear={cityData.foundedYear}
          landmarks={cityData.landmarks}
        />
      </header>
    </div>
    );
}

export default App;

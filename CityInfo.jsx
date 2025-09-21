import React from 'react';

const CityInfo = ({ cityName, country, foundedYear, landmarks }) => {
    return (
        <div>
            <h1>{cityName}</h1>
            <p><strong>Country:</strong> {country}</p>
            <p><strong>Year founded:</strong> {foundedYear}</p>
            <h2>Attractions:</h2>
            <div>
                {landmarks.map((landmark, index) => (
                    <img
                        key={index}
                        src={landmark.imageUrl}
                        alt={landmark.name}
                        style={{ width: '300px', margin: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CityInfo;

import React, { useState, useEffect } from 'react';

const ViewResidents = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    
    const storedResidents = JSON.parse(localStorage.getItem('residents')) || [];
    setResidents(storedResidents);
  }, []);

  return (
    <div>
      <h1>Residents</h1>
      <ul>
        {residents.map((resident, index) => (
          <li key={index}>
            {resident.name} - {resident.gender} - {resident.age} - {resident.maritalStatus} - {resident.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewResidents;

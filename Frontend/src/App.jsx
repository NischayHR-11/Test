import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{data ? data : 'Loading...'}</p>
    </div>
  );
}

export default App;

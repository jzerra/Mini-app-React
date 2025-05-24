import React, { useState, useEffect } from 'react';

const App = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => prev + 1); // 1 point every 6s = 10/hour
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(to right, #000, #004d00)',
      height: '100vh',
      padding: '20px',
      color: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ fontSize: '28px' }}>Hex Mining Station</h1>
      <img src="https://via.placeholder.com/150" alt="Avatar" style={{ borderRadius: '10px', margin: '20px' }} />
      <div style={{
        width: '80%',
        height: '30px',
        background: '#333',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '10px'
      }}>
        <div style={{
          width: `${(points % 100)}%`,
          background: 'lime',
          height: '100%',
          transition: 'width 0.5s'
        }}></div>
      </div>
      <p>Mining: <strong>{points} HEX</strong></p>
      <div style={{ position: 'absolute', bottom: '30px', width: '100%', textAlign: 'center' }}>
        <p>Navigation | Stats | Store</p>
      </div>
    </div>
  );
};

export default App;
  

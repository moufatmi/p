import React, { useEffect, useRef, useState } from 'react';

const NotFoundPage: React.FC = () => {
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create a radial gradient mask centered on the mouse
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, white 80%, transparent 100%)`,
    maskImage: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, white 80%, transparent 100%)`,
    transition: 'mask-position 0.1s, -webkit-mask-position 0.1s',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'url("https://wallpapercave.com/wp/6SLzBEY.jpg") no-repeat center center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'monospace',
      }}
    >
      <div
        style={{
          ...maskStyle,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none', // Let mouse events pass through
        }}
      >
        <h1
          style={{
            color: '#011718',
            fontSize: '15em',
            textAlign: 'center',
            textShadow:
              '-5px 5px 0px rgba(0,0,0,0.7), -10px 10px 0px rgba(0,0,0,0.4), -15px 15px 0px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2
          style={{
            color: 'black',
            fontSize: '5em',
            textShadow: '-5px 5px 0px rgba(0,0,0,0.7)',
            textAlign: 'center',
            marginTop: '-150px',
            fontWeight: 'bold',
          }}
        >
          Uh, Ohh
        </h2>
        <h3
          style={{
            color: 'white',
            marginLeft: '30px',
            fontSize: '2em',
            textShadow: '-5px 5px 0px rgba(0,0,0,0.7)',
            marginTop: '-40px',
            fontWeight: 'bold',
          }}
        >
          Sorry we can't find what you are looking for 'cuz it's so dark in here
        </h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
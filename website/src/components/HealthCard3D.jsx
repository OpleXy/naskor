import React, { useState, useRef, useEffect } from 'react';
import './HealthCard3D.css';

const HealthCard3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startRotation, setStartRotation] = useState({ x: 0, y: 0 });
  const [startMouse, setStartMouse] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const cardRef = useRef(null);

  // Smart hastighetskontroll basert på rotasjonsvinkel
  const getRotationSpeed = (currentY) => {
    // Normaliser vinkelen til 0-360
    const normalizedY = ((currentY % 360) + 360) % 360;
    
    // Beregn hvor langt unna vi er fra forside/bakside (0°, 180°)
    const distanceFromMainView = Math.min(
      Math.abs(normalizedY - 0),
      Math.abs(normalizedY - 180),
      Math.abs(normalizedY - 360)
    );
    
    // Hastighet er høyere når vi er lengre fra hovedvisningene
    if (distanceFromMainView < 30) {
      return 0.3; // Sakte nær forside/bakside
    } else if (distanceFromMainView < 60) {
      return 0.6; // Medium hastighet
    } else {
      return 1.2; // Raskt gjennom kortsidene
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartMouse({ x: e.clientX, y: e.clientY });
    setStartRotation({ ...rotation });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !cardRef.current) return;
    
    const deltaX = e.clientX - startMouse.x;
    const deltaY = e.clientY - startMouse.y;
    
    const speed = 0.5; // Konstant hastighet for manuell kontroll
    const newY = (startRotation.y + deltaX * speed) % 360;
    const newX = Math.max(-90, Math.min(90, startRotation.x - deltaY * 0.3));
    
    setRotation({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startMouse, startRotation]);

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setStartRotation({ ...rotation });
      e.preventDefault();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const deltaX = e.touches[0].clientX - startMouse.x;
    const deltaY = e.touches[0].clientY - startMouse.y;
    
    const speed = 0.5;
    const newY = (startRotation.y + deltaX * speed) % 360;
    const newX = Math.max(-90, Math.min(90, startRotation.x - deltaY * 0.3));
    
    setRotation({ x: newX, y: newY });
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Forbedret auto-rotasjon med variabel hastighet
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    
    let animationId;
    let lastTime;
    
    const animate = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      setRotation(prev => {
        const speed = getRotationSpeed(prev.y) * (deltaTime / 16); // Normalisert til 60fps
        return {
          x: prev.x,
          y: (prev.y + speed) % 360
        };
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [autoRotate, isDragging]);

  return (
    <div className="health-card-container">
      <h1>Moderne Helsekort - 360° Visning</h1>
      <p>Dra kortet for å rotere det 360 grader. Auto-rotasjonen er optimalisert for mindre dødtid.</p>
      
      <div 
        className="card-scene"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setAutoRotate(!autoRotate)}
      >
        <div 
          className="card-3d" 
          ref={cardRef}
          style={{
            transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* Forside med 1.png */}
          <div className="card-side card-front">
            <img 
              src="/1.png" 
              alt="Forside av helsekortet" 
              className="card-image"
            />
          </div>
          
          {/* Bakside med 2.png */}
          <div className="card-side card-back">
            <img 
              src="/2.png" 
              alt="Bakside av helsekortet" 
              className="card-image"
            />
          </div>
        </div>
      </div>
      
      <div className="controls">
        <button onClick={() => setAutoRotate(!autoRotate)}>
          {autoRotate ? 'Stopp Auto-rotasjon' : 'Start Auto-rotasjon'}
        </button>
        <button onClick={() => setRotation({ x: 0, y: 0 })}>
          Tilbakestill Posisjon
        </button>
      </div>
      
      <div className="rotation-info">
        <p>Rotasjon: X: {Math.round(rotation.x)}° | Y: {Math.round(rotation.y)}°</p>
        <p className="speed-info">
          Hastighet: {getRotationSpeed(rotation.y).toFixed(1)}x
        </p>
      </div>
    </div>
  );
};

export default HealthCard3D;
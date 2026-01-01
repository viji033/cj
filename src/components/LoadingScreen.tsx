// src/components/LoadingScreen.tsx
import React from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div className={`loading-container ${isVisible ? 'loading-visible' : 'loading-hidden'}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
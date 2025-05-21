// src/components/CyberRain.tsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './CyberRain.css';

const CyberRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / fontSize);
    const chars = ('アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()').split('');
    const drops = new Array(columns).fill(Math.random() * -50);

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      ctx.fillStyle = '#00ffff'; // Brighter neon cyan
      ctx.font = `${fontSize}px monospace`;
      ctx.shadowColor = '#00ffff'; // Glow
      ctx.shadowBlur = 10;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height / (window.devicePixelRatio || 1) && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 0.4; // Slow falling speed
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', setCanvasSize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return createPortal(
    <canvas ref={canvasRef} className="cyber-rain-canvas" />,
    document.body
  );
};

export default CyberRain;

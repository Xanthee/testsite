import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

import './GlowCard.css'; // Custom CSS for glow overlay

// Content component with glowing text
const GlowContent = () => (
  <div className="p-6 h-[30vh] w-[80vh] flex flex-row">
    <div className="flex flex-col">
        <h2 className="font-bold text-2xl text-white glow:text-glow/[.05]">Mars</h2>
        <p className="text-white/80 glow:text-glow/[.05]">
        This text should glow when the mouse moves over it!
        </p>
    </div>
    <Spline scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode" />
  </div>
);

// Main GlowCard component
const GlowCard = () => {
  const captureRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const capture = captureRef.current;
    const overlay = overlayRef.current;

    if (!capture || !overlay) return;

    const handleMouseMove = (event) => {
      const rect = capture.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      overlay.style.setProperty('--glow-x', `${x}px`);
      overlay.style.setProperty('--glow-y', `${y}px`);
      overlay.style.setProperty('--glow-opacity', '1');
    };

    const handleMouseLeave = () => {
      overlay.style.setProperty('--glow-opacity', '0');
    };

    capture.addEventListener('mousemove', handleMouseMove);
    capture.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      capture.removeEventListener('mousemove', handleMouseMove);
      capture.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative glow-capture" ref={captureRef}>
      {/* Base card layer */}
      <div className="bg-gray-900 border-4 border-gray-600 rounded-2xl shadow-2xl">
        <GlowContent />
      </div>
      {/* Overlay for glow effects */}
      <div
        className="glow-overlay border-4 rounded-2xl"
        ref={overlayRef}
        style={{ '--glow-color': '#001eff' }}
      >
        {/* Background glow layer */}
        <div className="absolute inset-0 bg-gray-900 glow:bg-glow/[.3]"></div>
        {/* Content layer, isolated from background effects */}
        <div className="relative z-10">
          <GlowContent />
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
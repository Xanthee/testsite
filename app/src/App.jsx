import Spline from '@splinetool/react-spline';
import spaceBackground from './assets/background.png';
import { useEffect, useState } from 'react';
import ParticleBackground from './components/particleBackground';
import GlowCard from './components/glowCard';

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-[screen] flex flex-col items-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${spaceBackground})` }}
    >
      <ParticleBackground />
      <nav
        className={`w-full  mx-auto z-10 p-12 flex flex-row justify-around text-white font-bold transition-opacity duration-2000 ease-in text-4xl font-oxanium my-8 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1>part 1</h1>
        <h1>part 2</h1>
        <h1>part 3</h1>
        <h1>part 4</h1>
      </nav>
      <div className="w-full  my-8 flex justify-center">
        <div className="relative w-full h-[180vh]">
          <Spline scene="https://prod.spline.design/6yf5VWqCg3DxPGtL/scene.splinecode" />
          <h1
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white text-center transition-opacity duration-2000 ease-in font-oxanium ${
              animate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            my space website!
          </h1>
        </div>
      </div>

      <div className="m-20">
      < GlowCard />
      </div>

    </div>
  );
}


export default App;
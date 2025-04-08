import Spline from '@splinetool/react-spline';
import spaceBackground from './assets/background.png';
import { useEffect, useState } from 'react';

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // 0.5s delay
    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []); 

  return (
    <div
      className="h-[400vh] w-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${spaceBackground})` }}
    >
      <nav
        className={`p-12 flex flex-row justify-around text-white transition-opacity duration-2000 ease-in ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </nav>
      <div className="mb-80">
        <p>margin</p>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="relative w-full h-[200h] overflow-hidden pt-4">
          <Spline scene="https://prod.spline.design/QoVOa4-ULSebN3cV/scene.splinecode" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white text-center">
            my space website!
          </h1>
        </div>
      </div>
      <div className="h-[20vh]">
        <h1>ttesttttt</h1>
      </div>
    </div>
  );
}

export default App;
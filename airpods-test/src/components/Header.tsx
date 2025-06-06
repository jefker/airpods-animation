import { useState } from "react";
import LogoApple from "../../public/assets/Apple_logo_white.png"

export default function Header() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowGlow(true);
  };

  const handleMouseLeave = () => {
    setShowGlow(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full mt-4 z-50">
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} 
      className="max-w-5xl mx-auto h-14 px-8 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-md transition rounded-lg">
        <div className={`absolute w-20 h-20 rounded-full bg-white/20 blur-2xl pointer-events-none 
          transition-opacity duration-500 ease-out ${showGlow ? 'opacity-100' : 'opacity-0'}`}
          style={{transform: `translate(${position.x - 70}px, ${position.y - 30}px)`,}}
        ></div>

        <img src={LogoApple} className="w-auto h-4 mb-0.5"/>
        <nav className="space-x-4">
          <a className="text-white hover:text-gray-300 transition" href="#">
            Home
          </a>
          <a className="text-white hover:text-gray-300 transition" href="#">
            Sobre
          </a>
          <a className="text-white hover:text-gray-300 transition" href="#">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

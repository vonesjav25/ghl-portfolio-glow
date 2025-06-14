
import { useEffect, useState } from 'react';
import { Code, Palette, Monitor, Layers, GitBranch, Database, Globe, Smartphone } from 'lucide-react';

interface FloatingElement {
  id: number;
  Icon: any;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const icons = [Code, Palette, Monitor, Layers, GitBranch, Database, Globe, Smartphone];

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 12; i++) {
        newElements.push({
          id: i,
          Icon: icons[Math.floor(Math.random() * icons.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15,
          speed: Math.random() * 0.5 + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 2 - 1,
        });
      }
      setElements(newElements);
    };

    createElements();
  }, []);

  useEffect(() => {
    const animateElements = () => {
      setElements(prev => prev.map(element => ({
        ...element,
        y: element.y <= -10 ? 110 : element.y - element.speed,
        rotation: element.rotation + element.rotationSpeed,
      })));
    };

    const interval = setInterval(animateElements, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => {
        const { Icon } = element;
        return (
          <div
            key={element.id}
            className="absolute opacity-20 text-violet-400"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
              transition: 'none',
            }}
          >
            <Icon size={element.size} />
          </div>
        );
      })}
      
      {/* Additional floating code snippets */}
      <div className="absolute top-1/4 left-1/4 opacity-15 text-blue-400 font-mono text-sm animate-float-slow">
        {'<div className="hero">'}
      </div>
      <div className="absolute top-3/4 right-1/4 opacity-15 text-violet-400 font-mono text-sm animate-float-slow" style={{ animationDelay: '2s' }}>
        {'const portfolio = () => {'}
      </div>
      <div className="absolute top-1/2 left-1/6 opacity-15 text-blue-400 font-mono text-sm animate-float-slow" style={{ animationDelay: '4s' }}>
        {'function() { return <App />; }'}
      </div>
      <div className="absolute top-1/3 right-1/3 opacity-15 text-violet-500 font-mono text-sm animate-float-slow" style={{ animationDelay: '6s' }}>
        {'return <Component />;'}
      </div>
      <div className="absolute bottom-1/4 left-1/3 opacity-15 text-blue-500 font-mono text-sm animate-float-slow" style={{ animationDelay: '1s' }}>
        {'.container { display: flex; }'}
      </div>
    </div>
  );
};

export default FloatingElements;

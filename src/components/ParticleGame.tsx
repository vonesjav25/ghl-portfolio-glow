
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const ParticleGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const colors = ['#ff7518', '#ff8c42', '#ffa366', '#ffb380', '#ff6b00'];

  const createParticle = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        life: 60,
        maxLife: 60,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    return newParticles;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlaying) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticles = createParticle(x, y);
    setParticles(prev => [...prev, ...newParticles]);
    setScore(prev => prev + 10);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background gradient
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    gradient.addColorStop(0, 'rgba(255, 117, 24, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setParticles(prev => {
      const updatedParticles = prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.2, // gravity
          life: particle.life - 1
        }))
        .filter(particle => particle.life > 0);

      // Draw particles
      updatedParticles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3 * alpha, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      return updatedParticles;
    });

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, []);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setParticles([]);
  };

  const stopGame = () => {
    setIsPlaying(false);
    setParticles([]);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Interactive Particle Experience
          </h2>
          <p className="text-muted-foreground mb-6">
            Click anywhere on the canvas to create beautiful particle effects!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            {!isPlaying ? (
              <Button onClick={startGame} className="glow-orange-strong">
                Start Experience
              </Button>
            ) : (
              <Button onClick={stopGame} variant="outline" className="border-glow">
                Reset
              </Button>
            )}
            
            {isPlaying && (
              <div className="text-lg font-mono text-gradient-orange">
                Score: {score}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className={`w-full h-80 border-2 border-primary/30 rounded-lg bg-black/50 ${
              isPlaying ? 'cursor-crosshair' : 'cursor-pointer'
            } transition-all duration-300 hover:border-primary/60`}
            style={{ maxHeight: '320px' }}
          />
          
          {isPlaying && (
            <p className="text-center mt-4 text-sm text-muted-foreground animate-pulse">
              Click on the canvas to create particle bursts! Each click gives you 10 points.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ParticleGame;


import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react";

interface Tile {
  id: number;
  position: number;
  isEmpty: boolean;
  backgroundPosition: string;
}

const PuzzleGame = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [moves, setMoves] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();
  const sectionRef = useRef<HTMLElement>(null);

  const initializePuzzle = () => {
    const initialTiles: Tile[] = [];

    // Create 8 image tiles and 1 empty tile
    for (let i = 0; i < 8; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      initialTiles.push({
        id: i + 1,
        position: i + 1,
        isEmpty: false,
        backgroundPosition: `${col * 50}% ${row * 50}%`
      });
    }
    
    // Add empty tile
    initialTiles.push({
      id: 9,
      position: 9,
      isEmpty: true,
      backgroundPosition: ''
    });
    
    // Shuffle the tiles
    const shuffled = [...initialTiles];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setTiles(shuffled);
    setMoves(0);
    setIsWon(false);
    setTimer(0);
  };

  const checkWin = (currentTiles: Tile[]) => {
    for (let i = 0; i < 8; i++) {
      if (currentTiles[i].position !== i + 1) return false;
    }
    return currentTiles[8].isEmpty;
  };

  const moveTile = (tileIndex: number) => {
    if (!isPlaying || isWon) return;

    const newTiles = [...tiles];
    const emptyIndex = newTiles.findIndex(tile => tile.isEmpty);
    
    // Check if the tile can move (adjacent to empty space)
    const canMove = (
      (tileIndex === emptyIndex - 1 && emptyIndex % 3 !== 0) || // left
      (tileIndex === emptyIndex + 1 && tileIndex % 3 !== 0) || // right
      (tileIndex === emptyIndex - 3) || // up
      (tileIndex === emptyIndex + 3) // down
    );

    if (canMove) {
      [newTiles[tileIndex], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[tileIndex]];
      setTiles(newTiles);
      setMoves(prev => prev + 1);
      
      if (checkWin(newTiles)) {
        setIsWon(true);
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }
  };

  const startGame = () => {
    initializePuzzle();
    setIsPlaying(true);
    setTimer(0);
    
    timerRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  };

  const stopGame = () => {
    setIsPlaying(false);
    setTiles([]);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimer(0);
  };

  // Auto-start puzzle when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlaying && !isWon && tiles.length === 0) {
            startGame();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isPlaying, isWon, tiles.length]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-background via-secondary/20 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-500 to-green-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Puzzle className="w-8 h-8 text-violet-400" />
            Pixel Me Back
          </h2>
          <p className="text-muted-foreground mb-6">
            Arrange the image pieces to complete my portrait!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            {!isPlaying && !isWon && tiles.length === 0 ? (
              <div className="text-muted-foreground animate-pulse">
                Loading puzzle...
              </div>
            ) : !isPlaying && !isWon ? (
              <Button onClick={startGame} className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 shadow-lg shadow-violet-500/30">
                Start New Game
              </Button>
            ) : (
              <Button onClick={startGame} variant="outline" className="border-violet-400 text-violet-400 hover:bg-violet-400/10">
                Reset
              </Button>
            )}
            
            {isPlaying && (
              <div className="flex gap-6 text-lg font-mono bg-gradient-to-r from-violet-400 to-green-400 bg-clip-text text-transparent">
                <div>Moves: {moves}</div>
                <div>Time: {formatTime(timer)}</div>
              </div>
            )}
          </div>

          {isWon && (
            <div className="mb-6 p-4 bg-violet-500/20 border border-violet-400/40 rounded-lg shadow-lg shadow-violet-500/20">
              <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-green-400 bg-clip-text text-transparent mb-2">🎉 Perfect!</h3>
              <p className="text-muted-foreground">
                You completed the neon portrait in {moves} moves and {formatTime(timer)}!
              </p>
            </div>
          )}
        </div>

        <div className="max-w-md mx-auto">
          {tiles.length > 0 && (
            <>
              {isWon ? (
                // Show complete image without gaps when won
                <div className="relative rounded-lg overflow-hidden border-2 border-violet-400/50 shadow-2xl shadow-violet-500/40">
                  <img 
                    src="/lovable-uploads/myface.png" 
                    alt="Completed portrait"
                    className="w-full h-auto"
                    style={{
                      filter: 'contrast(1.2) saturate(1.5) hue-rotate(15deg) drop-shadow(0 0 8px rgba(255, 117, 24, 0.6))'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-green-400/20 mix-blend-overlay"></div>
                </div>
              ) : (
                // Show puzzle grid while playing
                <div className="grid grid-cols-3 gap-2 p-4 bg-black/50 rounded-lg border-2 border-violet-400/30 shadow-lg shadow-violet-500/20">
                  {tiles.map((tile, index) => (
                    <div
                      key={tile.id}
                      onClick={() => moveTile(index)}
                      className={`
                        aspect-square rounded-lg cursor-pointer transition-all duration-200 relative overflow-hidden
                        ${tile.isEmpty 
                          ? 'bg-transparent border-2 border-dashed border-violet-400/30' 
                          : 'hover:scale-105 border-2 border-violet-400/50 shadow-lg shadow-violet-500/30'
                        }
                        ${isPlaying && !tile.isEmpty ? 'hover:shadow-lg hover:shadow-green-400/40' : ''}
                      `}
                      style={{
                        backgroundImage: tile.isEmpty ? 'none' : `url(/lovable-uploads/myface.png)`,
                        backgroundSize: tile.isEmpty ? 'none' : '300% 300%',
                        backgroundPosition: tile.backgroundPosition,
                        backgroundRepeat: 'no-repeat',
                        filter: tile.isEmpty ? 'none' : 'contrast(1.2) saturate(1.5) hue-rotate(15deg) drop-shadow(0 0 8px rgba(255, 117, 24, 0.6))'
                      }}
                    >
                      {!tile.isEmpty && (
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-green-400/20 mix-blend-overlay"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          
          {isPlaying && (
            <p className="text-center mt-4 text-sm text-muted-foreground animate-pulse">
              Click adjacent pieces to move them into the empty space!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PuzzleGame;

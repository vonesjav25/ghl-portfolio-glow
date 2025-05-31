
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
        backgroundPosition: `${-col * 33.33}% ${-row * 33.33}%`
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
    <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient flex items-center justify-center gap-3">
            <Puzzle className="w-8 h-8 text-primary" />
            Neon Portrait Puzzle
          </h2>
          <p className="text-muted-foreground mb-6">
            Arrange the image pieces to complete the neon portrait!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            {!isPlaying && !isWon ? (
              <Button onClick={startGame} className="glow-orange-strong">
                Start Puzzle
              </Button>
            ) : (
              <Button onClick={stopGame} variant="outline" className="border-glow">
                Reset
              </Button>
            )}
            
            {isPlaying && (
              <div className="flex gap-6 text-lg font-mono text-gradient-orange">
                <div>Moves: {moves}</div>
                <div>Time: {formatTime(timer)}</div>
              </div>
            )}
          </div>

          {isWon && (
            <div className="mb-6 p-4 bg-primary/20 border border-primary/40 rounded-lg glow-orange">
              <h3 className="text-xl font-bold text-gradient mb-2">🎉 Perfect!</h3>
              <p className="text-muted-foreground">
                You completed the neon portrait in {moves} moves and {formatTime(timer)}!
              </p>
            </div>
          )}
        </div>

        <div className="max-w-md mx-auto">
          {tiles.length > 0 && (
            <div className="grid grid-cols-3 gap-2 p-4 bg-black/50 rounded-lg border-2 border-primary/30 glow-orange">
              {tiles.map((tile, index) => (
                <div
                  key={tile.id}
                  onClick={() => moveTile(index)}
                  className={`
                    aspect-square rounded-lg cursor-pointer transition-all duration-200 relative overflow-hidden
                    ${tile.isEmpty 
                      ? 'bg-transparent border-2 border-dashed border-primary/30' 
                      : 'hover:scale-105 glow-orange-strong border-2 border-primary/50'
                    }
                    ${isPlaying && !tile.isEmpty ? 'hover:shadow-lg' : ''}
                  `}
                  style={{
                    backgroundImage: tile.isEmpty ? 'none' : `url(/lovable-uploads/3c83727b-caae-4c4b-b62e-356af6a79aa8.png)`,
                    backgroundSize: tile.isEmpty ? 'none' : '300% 300%',
                    backgroundPosition: tile.backgroundPosition,
                    backgroundRepeat: 'no-repeat',
                    filter: tile.isEmpty ? 'none' : 'contrast(1.2) saturate(1.5) hue-rotate(15deg) drop-shadow(0 0 8px rgba(255, 117, 24, 0.6))'
                  }}
                >
                  {!tile.isEmpty && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay"></div>
                  )}
                </div>
              ))}
            </div>
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

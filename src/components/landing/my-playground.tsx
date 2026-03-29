"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../common/container";
import Heading from "../common/Heading";
import GradientButton from "../ui/gradient-button";

const COLORS = [
  "#1A1410",
  "#C4522A",
  "#7A9E7E",
  "#D4A847",
  "#5B8DB8",
  "#C97B84",
  "#000000",
  "#FFFFFF",
];

const GRID_SIZE = 30;
const CANVAS_SIZE = 320;
const CELL_SIZE = CANVAS_SIZE / GRID_SIZE;

const MyPlayground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentColor, setCurrentColor] = useState(COLORS[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [pixels, setPixels] = useState<(string | null)[][]>(() =>
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(null)),
  );

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const color = pixels[r][c];
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }

    ctx.strokeStyle = "rgba(26, 20, 16, 0.08)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, CANVAS_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(CANVAS_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }
  }, [pixels]);

  useEffect(() => {
    drawGrid();
  }, [drawGrid]);

  const getCellFromEvent = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const c = Math.floor(x / CELL_SIZE);
    const r = Math.floor(y / CELL_SIZE);

    if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
      return { r, c };
    }
    return null;
  };

  const paint = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const cell = getCellFromEvent(e);
    if (!cell) return;

    const { r, c } = cell;
    const newColor = isErasing ? null : currentColor;

    setPixels((prev) => {
      if (prev[r][c] === newColor) return prev;
      const next = prev.map((row) => [...row]);
      next[r][c] = newColor;
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    paint(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) paint(e);
  };

  const handleMouseUp = () => setIsDrawing(false);
  const handleMouseLeave = () => setIsDrawing(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    paint(e);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (isDrawing) paint(e);
  };

  const handleTouchEnd = () => setIsDrawing(false);

  const handleColorChange = (color: string) => {
    setIsErasing(false);
    setCurrentColor(color);
  };

  const handleEraserToggle = () => {
    setIsErasing(!isErasing);
  };

  const handleClear = () => {
    setPixels(
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(null)),
    );
  };

  return (
    <Container className="px-4 sm:px-8 py-4 mt-4">
      <Heading text="My Playground" />

      <div className="py-4 flex flex-col items-center justify-center gap-4">
        <div className="w-full max-w-[352px] rounded-lg bg-muted p-4">
          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="cursor-crosshair rounded touch-none w-full h-auto"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />

          {/* Color Palette - inside bg-muted area */}
          <div className="flex items-center gap-2 flex-wrap justify-center mt-4 pt-4 border-t border-border">
            {COLORS.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => handleColorChange(color)}
                className={`w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 transition-transform hover:scale-110 ${
                  currentColor === color && !isErasing
                    ? "ring-2 ring-foreground scale-110"
                    : ""
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Controls - outside muted area */}
        <div className="flex gap-2 flex-wrap justify-center">
          <GradientButton
            onClick={handleEraserToggle}
            className="px-4 py-2 text-xs"
          >
            {isErasing ? "🖊 Draw" : "⌫ Eraser"}
          </GradientButton>
          <GradientButton onClick={handleClear} className="px-4 py-2 text-xs">
            ✕ Clear
          </GradientButton>
        </div>
      </div>
    </Container>
  );
};

export default MyPlayground;

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  startAnimation?: boolean;
}

const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 50, 
  className, 
  onComplete,
  startAnimation = true 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!startAnimation) return;
    
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay, startAnimation]);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, hasStarted, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {showCursor && currentIndex < text.length && (
        <span className="border-r-2 border-primary animate-pulse ml-1">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
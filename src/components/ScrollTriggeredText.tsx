import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TypewriterText from "./TypewriterText";
import { cn } from "@/lib/utils";

interface ScrollTriggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const ScrollTriggeredText = ({ 
  text, 
  className, 
  delay = 0, 
  speed = 30 
}: ScrollTriggeredTextProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <div ref={elementRef} className={cn("min-h-[2em]", className)}>
      {isVisible && (
        <TypewriterText
          text={text}
          delay={delay}
          speed={speed}
          className="font-pixel text-foreground"
        />
      )}
    </div>
  );
};

export default ScrollTriggeredText;
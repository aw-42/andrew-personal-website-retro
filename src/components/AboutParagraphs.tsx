import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import andrewPortrait from "@/assets/andrew-portrait.png";

const AboutParagraphs = () => {
  const { elementRef: ref1, isVisible: visible1 } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: ref2, isVisible: visible2 } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: ref3, isVisible: visible3 } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: ref4, isVisible: visible4 } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
      {/* Text Content */}
      <div className="space-y-6 font-pixel text-lg md:text-xl leading-6 text-white flex-1">
        <div 
          ref={ref1} 
          className={cn(
            "transition-all duration-700 ease-out",
            visible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          For 15+ years, I've helped product companies, ad agencies, and start-ups build great products, bring them to market, and grow strong teams. Today, I'm exploring new start-up ideas, consulting, and leading the Toronto Product Management Association as one of the Board.
        </div>
        
        <div 
          ref={ref2} 
          className={cn(
            "transition-all duration-700 ease-out delay-200",
            visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Formerly, I was the Director of Product and Marketing for a pair of communication technology brands. I also served as co-founder and CPO of a company that developed professional development conferences for electronic artists (BEMOON), and a beer brand (Aurora Beer). In my career, I worked across the ad agency and publishing industries.
        </div>
        
        <div 
          ref={ref3} 
          className={cn(
            "transition-all duration-700 ease-out delay-400",
            visible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Outside of product, I create mixed-media art and music under the alias Dunmore Park. My work has been featured in WIRED and released on international record labels, alongside production and curation projects for brands like 066, 0101CM. The Abnormal Beauty Company, NIGHTEYES, and Kind Magazine.
        </div>
        
        <div 
          ref={ref4} 
          className={cn(
            "transition-all duration-700 ease-out delay-600",
            visible4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          If you're interested in getting in touch, shoot me a message on LinkedIn or X.
        </div>
      </div>
      
      {/* Portrait Image */}
      <div className="flex-shrink-0 lg:w-1/4 xl:w-1/5">
        <img 
          src={andrewPortrait} 
          alt="Andrew - Pixel art portrait"
          className="w-full max-w-sm mx-auto lg:max-w-none object-contain"
        />
      </div>
    </div>
  );
};

export default AboutParagraphs;
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const SideQuests = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const sideQuestItems = [
    "2023-Now | Board Member - Toronto Product Management Association",
    "2015-2024 | Co-founder / Digital Experience Designer - The Downtown Defrost Music & Arts Festival",
    "2022-Now | In-Store Music Curator - DECIEM: The Abnormal Beauty Company",
    "2022 | Featured Artist - Wired Magazine",
    "2016-2020 | Co-founder - The Alberta Electronic Music Conference",
    "2020 | Co-founder - The Virtual Electronic Music Summit",
    "2015, 2019 | Featured Speaker - Petcha Kucha",
    "2018-2020 | Committee Member - Edmonton City Council Advisory Committee for Large-Scale Events",
    "2013-2019  | Co-founder, GM  - Night Vision + Night Vision Music Academy",
    "2018 | Content Marketing + Product Marketing - Seekbeak: 360 Virtual Tours",
    "2019 | Sound Design - DDB / Emerald Health Naturals Inc",
    "2017-2018 | Digital Advisory Board Member, Alberta Music",
    "2018 | Sound and Experience Design - Spectra (Interactive Art Exhibit)",
    "2017 |  Web Design + Strategy -  Icebox Logic Agency",
    "2014-2016 | Co-founder, Investor - Aurora Beer",
    "2012-2014 | Marketing Advisory Group - Magazines Canada",
    "2012-2014 | Fundraiser, United Way"
  ];

  return (
    <div className="font-pixel text-lg md:text-xl leading-6 space-y-4 text-white">
      <div 
        ref={introRef}
        className={cn(
          "mb-8 transition-all duration-700 ease-out",
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        In addition to my resume/work in product and marketing, I've been involved in many other professional and creative projects.
      </div>
      
      <p className="font-pixel-bold mb-6 text-white">Here are a few public ones:</p>
      
      <div className="space-y-3">
        {sideQuestItems.map((item, index) => (
          <SideQuestItem key={index} text={item} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

const SideQuestItem = ({ text, delay }: { text: string; delay: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};

export default SideQuests;
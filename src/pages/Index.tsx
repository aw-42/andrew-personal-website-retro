import HamburgerNav from "@/components/HamburgerNav";
import AboutParagraphs from "@/components/AboutParagraphs";
import SideQuests from "@/components/SideQuests";
import heroImage from "@/assets/hero-image-new.jpg";
import heroTextBg from "@/assets/hero-text-bg.jpg";
import sideQuestsBg from "@/assets/side-quests-bg.jpg";

const Index = () => {

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <HamburgerNav />
      
      {/* Hero Section - Full screen with portrait image */}
      <section 
        className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center">
          <div 
            className="inline-block px-8 py-12 md:px-12 md:py-16 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${heroTextBg})` }}
          >
            <h1 className="font-retro text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl">
              Hello
            </h1>
            <h2 className="font-retro text-4xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-2xl">
              I'm Andrew
            </h2>
            <p className="font-pixel text-xl md:text-2xl lg:text-3xl text-white leading-relaxed drop-shadow-xl">
              I'm a builder, product leader, ex-founder, and artist.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with orange gradient background */}
      <section 
        className="py-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroTextBg})` }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-white mb-12 text-center drop-shadow-lg">
            About Me
          </h2>
          
          <AboutParagraphs />
        </div>
      </section>

      <hr className="border-white/30 max-w-[800px] mx-auto" style={{ backgroundColor: 'transparent' }} />
      
      {/* Side Quests Section */}
      <section 
        className="py-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${sideQuestsBg})` }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-white mb-12 text-center drop-shadow-lg">
            Side Quests
          </h2>
          
          <SideQuests />
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="text-white py-8 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${sideQuestsBg})` }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-pixel text-lg md:text-xl leading-6 drop-shadow-lg">
            Created by Andrew, 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import HamburgerNav from "@/components/HamburgerNav";
import AboutParagraphs from "@/components/AboutParagraphs";
import SideQuests from "@/components/SideQuests";
import heroImage from "@/assets/hero-2.jpg";

const Index = () => {

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <HamburgerNav />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen relative px-4 bg-cover bg-center bg-no-repeat grid-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative z-10 h-screen flex flex-col justify-center items-center py-16 md:py-24">
          {/* Centered content container */}
          <div className="max-w-[800px] mx-auto w-full">
            {/* Hello and I'm Andrew - now in a centered layout */}
            <div className="text-center space-y-4 mb-16">
              <h1 className="font-retro text-5xl md:text-7xl lg:text-8xl text-primary text-shadow-subtle">
                Hello
              </h1>
              <h2 className="font-retro text-4xl md:text-6xl lg:text-7xl text-primary text-shadow-subtle">
                I'm Andrew
              </h2>
            </div>
            
            {/* Description */}
            <div className="text-center">
              <p className="font-pixel text-xl md:text-2xl lg:text-3xl text-primary leading-relaxed text-shadow-subtle">
                I'm a builder, product leader, ex-founder, and artist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections with gradient background */}
      <div style={{ background: 'linear-gradient(to bottom, #305F75, #2E759B)' }}>
        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-retro text-4xl md:text-6xl text-white mb-12 text-center">
              About Me
            </h2>
            
            <AboutParagraphs />
          </div>
        </section>

        <hr className="section-divider max-w-[800px] mx-auto" />
        
        {/* Side Quests Section */}
        <section className="py-16 px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-retro text-4xl md:text-6xl text-white mb-12 text-center">
              Side Quests
            </h2>
            
            <SideQuests />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-white py-8 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="font-pixel text-lg md:text-xl leading-6">
              Created by Andrew, 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
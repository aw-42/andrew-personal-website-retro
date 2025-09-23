import HamburgerNav from "@/components/HamburgerNav";
import AboutParagraphs from "@/components/AboutParagraphs";
import SideQuests from "@/components/SideQuests";
import heroImage from "@/assets/hero-2.jpg";

const Index = () => {

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'linear-gradient(to bottom, #305F75, #2E759B)' }}>
      <HamburgerNav />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen relative px-4 bg-cover bg-center bg-no-repeat grid-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative z-10 h-screen flex flex-col justify-between py-16 md:py-24">
          {/* Top Section - Hello */}
          <div className="flex justify-start">
            <h1 className="font-retro text-5xl md:text-7xl lg:text-8xl text-primary text-shadow-subtle">
              Hello
            </h1>
          </div>
          
          {/* Center Section - Main Content */}
          <div className="text-center self-center max-w-4xl">
            <h2 className="font-retro text-4xl md:text-6xl lg:text-7xl text-primary mb-6 text-shadow-subtle">
              I'm Andrew
            </h2>
          </div>
          
          {/* Bottom Section - Description */}
          <div className="text-center">
            <p className="font-pixel text-xl md:text-2xl lg:text-3xl text-primary max-w-4xl mx-auto leading-relaxed text-shadow-subtle">
              I'm a builder, product leader, ex-founder, and artist.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-white mb-12">
            About Me
          </h2>
          
          <AboutParagraphs />
        </div>
      </section>

      <hr className="section-divider" />
      
      {/* Side Quests Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-white mb-12">
            Side Quests
          </h2>
          
          <SideQuests />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-pixel">
            Created by Andrew, 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
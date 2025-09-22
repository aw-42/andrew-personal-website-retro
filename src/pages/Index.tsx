import HamburgerNav from "@/components/HamburgerNav";
import AboutParagraphs from "@/components/AboutParagraphs";
import SideQuests from "@/components/SideQuests";
import heroImage from "@/assets/hero-toronto.jpg";

const Index = () => {

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'linear-gradient(to bottom, #305F75, #2E759B)' }}>
      <HamburgerNav />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-cover bg-center bg-no-repeat grid-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-retro text-6xl md:text-8xl lg:text-9xl text-primary text-shadow-subtle mb-8">
            Hello
          </h1>
          
          {/* Subtitle */}
          <h2 className="font-retro text-3xl md:text-5xl lg:text-6xl text-primary mb-8 text-shadow-subtle">
            I'm Andrew
          </h2>
          
          {/* Description */}
          <div className="font-pixel text-lg md:text-xl lg:text-2xl text-primary max-w-3xl mx-auto leading-relaxed text-shadow-subtle">
            I'm a builder, product leader, ex-founder, and artist.
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
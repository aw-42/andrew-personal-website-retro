import HamburgerNav from "@/components/HamburgerNav";
import heroImageSplit from "@/assets/hero-image-split.jpg";
import heroBgYellow from "@/assets/hero-bg-yellow.jpg";
import sideQuestsBg from "@/assets/side-quests-bg.jpg";
const Index = () => {
  return <div className="min-h-screen relative overflow-x-hidden">
      <HamburgerNav />
      
      {/* Split-Screen Hero Section */}
      <section className="grid lg:grid-cols-2 grid-cols-1">
        {/* Left Side - Text Content with Yellow Background */}
        <div className="relative flex items-center justify-center px-8 py-16 lg:py-24 bg-cover bg-center" style={{
        backgroundImage: `url(${heroBgYellow})`
      }}>
          <div className="max-w-xl w-full space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="font-gatwick text-7xl md:text-8xl lg:text-9xl text-black leading-none mb-4">
                I'm Andrew
              </h1>
              <p className="font-roboto text-xl md:text-2xl text-black">
                I'm a builder, founder, and artist.
              </p>
            </div>

            {/* Paragraph 1 */}
            <div className="space-y-4">
              <p className="font-roboto text-base md:text-lg text-black leading-relaxed">
                Currently splitting time between scaling the <a href="http://tpma.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Toronto Product Management Association</a> as CEO and building a start-up that actively fights the addictive nature of the internet.
              </p>

              {/* Paragraph 2 */}
              <p className="font-roboto text-base md:text-lg text-black leading-relaxed">
                Periodically, I also create art and music under the alias Dunmore Park.
              </p>
            </div>

            {/* Interested Section */}
            <div className="space-y-4">
              <p className="font-roboto text-base md:text-lg text-black font-medium">
                I'm interested in connecting with:
              </p>
              <ul className="font-roboto text-base md:text-lg text-black space-y-2 list-disc list-inside">
                <li>People solving problems associated with digital addictions, well being, and productivity</li>
                <li>People building the tech ecosystem of Toronto and the GTA</li>
                <li>People creating fun, compelling, and surreal artistic experiences</li>
              </ul>
            </div>

            {/* Footer Links */}
            <div className="pt-4">
              <p className="font-roboto text-base md:text-lg text-black">
                Reach out here:{" "}
                <a href="mailto:website+andrewtwilliams2@gmail.com" className="underline hover:no-underline">Email</a>
                {" "}/{" "}
                <a href="https://x.com/andrew_reset" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">X</a>
                {" "}/{" "}
                <a href="https://www.linkedin.com/in/andrewwilliamscanada/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn</a>
              </p>
            </div>
          </div>

          {/* Links Label - Top Right */}
          <div className="absolute top-8 right-8">
            
          </div>
        </div>

        {/* Right Side - Portrait Image */}
        <div className="aspect-square bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImageSplit})`
      }} />
      </section>

      {/* Side Quests Section */}
      <section className="min-h-screen bg-cover bg-center py-16 px-8 lg:py-24 lg:px-16" style={{
        backgroundImage: `url(${sideQuestsBg})`
      }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="font-gatwick text-6xl md:text-7xl lg:text-8xl text-black mb-8">
            Side Quests
          </h2>

          {/* Intro Text */}
          <p className="font-roboto text-xl md:text-2xl text-black mb-12 max-w-4xl">
            I love a side quest. I've done many of them in addition to my primary career. Here's a few:
          </p>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Creative Column */}
            <div className="space-y-4">
              <h3 className="font-roboto font-bold text-2xl text-black mb-6">Creative</h3>
              <ul className="font-roboto text-base md:text-lg text-black space-y-3">
                <li>The Goo Photoshoot — Creative Director, Artist</li>
                <li>The Finger Question App - Creator</li>
                <li>Wired Magazine — Featured Artist</li>
                <li>In-Store Music Curator — DECIEM: The Abnormal Beauty Company</li>
                <li>Spectra: Interactive Art Exhibit — Sound Designer</li>
              </ul>
            </div>

            {/* Product/Biz Column */}
            <div className="space-y-4">
              <h3 className="font-roboto font-bold text-2xl text-black mb-6">Product/Biz</h3>
              <ul className="font-roboto text-base md:text-lg text-black space-y-3">
                <li>SignBridge App — Creator</li>
                <li>The Downtown Defrost Music & Arts Festival — Co-Founder</li>
                <li>The Alberta Electronic Music Conference — Co-Founder</li>
                <li>The Virtual Electronic Music Summit — Co-Founder</li>
                <li>Night Vision Music — Co-Founder</li>
                <li>Night Vision Music Academy — Co-Founder</li>
                <li>Aurora Beer — Investor & Co-Founder</li>
              </ul>
            </div>

            {/* Misc Column */}
            <div className="space-y-4">
              <h3 className="font-roboto font-bold text-2xl text-black mb-6">Misc</h3>
              <ul className="font-roboto text-base md:text-lg text-black space-y-3">
                <li>Speaker — "The Worst Job I've Ever Had", Fuckup Nights</li>
                <li>Speaker — "The World's Most Interesting Fruit", Pecha Kucha / Nerd Night</li>
                <li>Alberta Music — Digital Advisory Board Member</li>
                <li>Magazines Canada — Marketing Advisory Group Member</li>
                <li>Cannes Young Lions Advertising Competition - Top 3 Finalist</li>
                <li>Edmonton City Council - Large-Scale Events Advisory Board</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center" style={{ backgroundColor: '#FF1500' }}>
        <p className="font-roboto text-white text-base md:text-lg">
          Site made by Andrew, 2025
        </p>
      </footer>
    </div>;
};
export default Index;
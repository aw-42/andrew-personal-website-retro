import HamburgerNav from "@/components/HamburgerNav";
import heroImageSplit from "@/assets/hero-image-split.jpg";
import heroBgYellow from "@/assets/hero-bg-yellow.jpg";
const Index = () => {
  return <div className="min-h-screen relative overflow-x-hidden">
      <HamburgerNav />
      
      {/* Split-Screen Hero Section */}
      <section className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
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
                Currently splitting time between scaling the Toronto Product Management Association as CEO and building a start-up that actively fights the addictive nature of the internet.
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
        <div className="min-h-[50vh] lg:min-h-screen bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImageSplit})`
      }} />
      </section>
    </div>;
};
export default Index;
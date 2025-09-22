import { useState, useEffect } from "react";
import HamburgerNav from "@/components/HamburgerNav";
import TypewriterText from "@/components/TypewriterText";
import ScrollTriggeredText from "@/components/ScrollTriggeredText";
import heroImage from "@/assets/pixel-city-hero.jpg";

const Index = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <HamburgerNav />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-retro text-6xl md:text-8xl lg:text-9xl text-primary retro-glow mb-8 pixel-shadow">
            <TypewriterText 
              text="HELLO" 
              speed={150}
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          {/* Subtitle */}
          {showSubtitle && (
            <h2 className="font-retro text-2xl md:text-4xl lg:text-5xl text-secondary mb-8">
              <TypewriterText 
                text="I'M ANDREW" 
                speed={100}
                onComplete={() => setShowDescription(true)}
              />
            </h2>
          )}
          
          {/* Description */}
          {showDescription && (
            <div className="font-pixel-bold text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed pixel-border bg-card/90 p-6 pixel-shadow">
              <TypewriterText 
                text="I'm a builder, product leader, ex-founder, and artist." 
                speed={40}
              />
            </div>
          )}
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 pixel-border border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 py-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-primary retro-glow mb-12 text-center pixel-shadow">
            ABOUT ME
          </h2>
          
          <div className="space-y-8 font-pixel text-lg md:text-xl leading-relaxed">
            <ScrollTriggeredText 
              text="For 15+ years, I've helped product companies, ad agencies, and start-ups build great products, bring them to market, and grow strong teams. Today, I'm exploring new start-up ideas, consulting, and leading the Toronto Product Management Association as one of the Board."
              className="pixel-border bg-card p-6 pixel-shadow"
              speed={25}
            />
            
            <ScrollTriggeredText 
              text="Formerly, I was the Director of Product and Marketing for a pair of communication technology brands. I also served as co-founder and CPO of a company that developed professional development conferences for electronic artists (BEMOON), and a beer brand (Aurora Beer). In my career, I worked across the ad agency and publishing industries."
              className="pixel-border bg-muted p-6 pixel-shadow"
              delay={500}
              speed={25}
            />
            
            <ScrollTriggeredText 
              text="Outside of product, I create mixed-media art and music under the alias Dunmore Park. My work has been featured in WIRED and released on international record labels, alongside production and curation projects for brands like 066, 0101CM. The Abnormal Beauty Company, NIGHTEYES, and Kind Magazine."
              className="pixel-border bg-card p-6 pixel-shadow"
              delay={1000}
              speed={25}
            />
          </div>
        </div>
      </section>

      {/* Side Quests Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 py-16 bg-gradient-to-b from-card to-accent/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-accent retro-glow mb-12 text-center pixel-shadow">
            SIDE QUESTS
          </h2>
          
          <div className="font-pixel text-base md:text-lg leading-relaxed space-y-6">
            <ScrollTriggeredText 
              text="In addition to my resume/work in product and marketing, I've been involved in many other professional and creative projects."
              className="text-center text-xl font-pixel-bold text-accent mb-8"
              speed={30}
            />
            
            <div className="grid gap-4 md:gap-6">
              <ScrollTriggeredText 
                text="🎮 2023-Now | Board Member - Toronto Product Management Association"
                className="pixel-border bg-card p-4 pixel-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
                delay={200}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="🎵 2019-2024 | Co-Founder / Digital Experience Designer - The Downtown DeFrost Music & Arts Festival"
                className="pixel-border bg-muted p-4 pixel-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
                delay={400}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="🎨 2023-Now | In-Store Music Curator - 066|01CM. The Abnormal Beauty Company"
                className="pixel-border bg-card p-4 pixel-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
                delay={600}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="🚀 2018-2024 | Featured Artist - WIRED Music, Night Vision + Night Vision Music Academy"
                className="pixel-border bg-muted p-4 pixel-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
                delay={800}
                speed={40}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-pixel text-primary">
            Created by Andrew, 2025
          </p>
          <p className="font-pixel text-sm mt-2 text-secondary">
            Ready Player One?
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
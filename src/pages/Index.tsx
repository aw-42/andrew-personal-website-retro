import { useState, useEffect } from "react";
import HamburgerNav from "@/components/HamburgerNav";
import TypewriterText from "@/components/TypewriterText";
import ScrollTriggeredText from "@/components/ScrollTriggeredText";
import heroImage from "@/assets/hero-toronto.jpg";

const Index = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <HamburgerNav />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-cover bg-center bg-no-repeat grid-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-retro text-6xl md:text-8xl lg:text-9xl text-primary text-shadow-subtle mb-8">
            <TypewriterText 
              text="Hello" 
              speed={150}
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          {/* Subtitle */}
          {showSubtitle && (
            <h2 className="font-retro text-3xl md:text-5xl lg:text-6xl text-primary mb-8 text-shadow-subtle">
              <TypewriterText 
                text="I'm Andrew" 
                speed={100}
                onComplete={() => setShowDescription(true)}
              />
            </h2>
          )}
          
          {/* Description */}
          {showDescription && (
            <div className="font-pixel text-lg md:text-xl lg:text-2xl text-primary max-w-3xl mx-auto leading-relaxed text-shadow-subtle">
              <TypewriterText 
                text="I'm a builder, product leader, ex-founder, and artist." 
                speed={40}
              />
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-card py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-card-foreground mb-12">
            About Me
          </h2>
          
          <div className="space-y-6 font-pixel text-base md:text-lg leading-relaxed text-card-foreground">
            <ScrollTriggeredText 
              text="For 15+ years, I've helped product companies, ad agencies, and start-ups build great products, bring them to market, and grow strong teams. Today, I'm exploring new start-up ideas, consulting, and leading the Toronto Product Management Association as one of the Board."
              speed={25}
            />
            
            <ScrollTriggeredText 
              text="Formerly, I was the Director of Product and Marketing for a pair of communication technology brands. I also served as co-founder and CPO of a company that developed professional development conferences for electronic artists (BEMOON), and a beer brand (Aurora Beer). In my career, I worked across the ad agency and publishing industries."
              delay={500}
              speed={25}
            />
            
            <ScrollTriggeredText 
              text="Outside of product, I create mixed-media art and music under the alias Dunmore Park. My work has been featured in WIRED and released on international record labels, alongside production and curation projects for brands like 066, 0101CM. The Abnormal Beauty Company, NIGHTEYES, and Kind Magazine."
              delay={1000}
              speed={25}
            />
            
            <ScrollTriggeredText 
              text="If you're interested in getting in touch, shoot me a message on LinkedIn or X."
              delay={1500}
              speed={25}
            />
          </div>
        </div>
      </section>

      <hr className="section-divider" />
      
      {/* Side Quests Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-muted-foreground mb-12">
            Side Quests
          </h2>
          
          <div className="font-pixel text-base md:text-lg leading-relaxed space-y-4 text-muted-foreground">
            <ScrollTriggeredText 
              text="In addition to my resume/work in product and marketing, I've been involved in many other professional and creative projects."
              className="mb-8"
              speed={30}
            />
            
            <p className="font-pixel-bold mb-6">Here are a few public ones:</p>
            
            <div className="space-y-3">
              <ScrollTriggeredText 
                text="2023-Now | Board Member - Toronto Product Management Association"
                delay={200}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2019-2024 | Co-Founder / Digital Experience Designer - The Downtown DeFrost Music & Arts Festival"
                delay={400}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2023-Now | In-Store Music Curator - 0601CM. The Abnormal Beauty Company"
                delay={600}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2019 | Featured Artist - WIRED Music & Health Naturals Inc"
                delay={800}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2018-2020 | Co-Founder - The Alberta Electronic Music Conference"
                delay={1000}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2020 | Co-Founder - The Virtual Electronic Music Summit"
                delay={1200}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2018, 2019 | Featured Speaker - Pecha Kucha"
                delay={1400}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2018-2020 | Committee Member - Edmonton City Council Advisory Committee For Large-Scale Events"
                delay={1600}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2015-2019 | Co-Founder - PM - Night Vision + Night Vision Music Academy"
                delay={1800}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2018 | Content Marketing + Product Marketing - Seekbook: 360 Virtual Tours"
                delay={2000}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2019 | Sound Design / 008 / Emerald Health Naturals Inc"
                delay={2200}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2017-2018 | Digital Advisory Board Member - Alberta Music"
                delay={2400}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2016 | Sound and Experience Design - Spectro (Interactive Art Exhibit)"
                delay={2600}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2011 | Web Design + Strategy - Icebox Logic Agency"
                delay={2800}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2014-2016 | Co-Founder, Investor - Aurora Beer"
                delay={3000}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2015-2014 | Marketing Advisory Group - Magazines Canada"
                delay={3200}
                speed={40}
              />
              
              <ScrollTriggeredText 
                text="2013-2014 | Fund-raiser, United Way"
                delay={3400}
                speed={40}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
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
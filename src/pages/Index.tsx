
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Cannabis, ArrowRight, Star, Heart, Sparkles, User, Coffee, BookOpen, Mail } from 'lucide-react';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-xl min-h-[70vh] flex items-center p-6 md:p-12 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-vintage-green/20 via-vintage-orange/20 to-vintage-purple/20 z-0"></div>
          <div 
            className="absolute inset-0 z-0 opacity-15"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          ></div>
          
          <div className="vintage-paper max-w-3xl mx-auto w-full relative z-10">
            <div className="relative">
              <div className="absolute -top-14 -left-10 text-vintage-orange opacity-70">
                <Cannabis className="h-24 w-24 animate-wiggle" />
              </div>
              <div className="absolute -bottom-14 -right-10 text-vintage-green opacity-70">
                <Cannabis className="h-24 w-24 animate-float" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-vintage-brown mb-6 tracking-tight">
                Gabriel<span className="text-vintage-orange">'s</span> <br />
                <span className="text-vintage-green">Vintage</span> Vibe
              </h1>
              
              <p className="text-xl md:text-2xl text-vintage-brown/80 mb-8 font-retro">
                Grade 10 • San Beda College Alabang
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/profile">
                  <Button className="retro-button flex items-center gap-2">
                    View Profile <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Teaser */}
          <div className="retro-card flex flex-col h-full">
            <div className="bg-vintage-orange/20 rounded-lg p-4 mb-4">
              <User className="h-8 w-8 text-vintage-orange" />
            </div>
            <h2 className="text-2xl font-bold text-vintage-brown mb-3">Profile</h2>
            <p className="text-vintage-brown/70 mb-4 flex-grow">
              Get to know me better! My personal journey, education and what makes me unique.
            </p>
            <Link to="/profile" className="text-vintage-orange font-medium flex items-center hover:underline">
              View Profile <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          
          {/* Hobbies Teaser */}
          <div className="retro-card flex flex-col h-full">
            <div className="bg-vintage-green/20 rounded-lg p-4 mb-4">
              <Coffee className="h-8 w-8 text-vintage-green" />
            </div>
            <h2 className="text-2xl font-bold text-vintage-brown mb-3">Hobbies</h2>
            <p className="text-vintage-brown/70 mb-4 flex-grow">
              From basketball to taekwondo, discover the activities I'm passionate about.
            </p>
            <Link to="/hobbies" className="text-vintage-green font-medium flex items-center hover:underline">
              See My Hobbies <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          
          {/* About Teaser */}
          <div className="retro-card flex flex-col h-full">
            <div className="bg-vintage-purple/20 rounded-lg p-4 mb-4">
              <BookOpen className="h-8 w-8 text-vintage-purple" />
            </div>
            <h2 className="text-2xl font-bold text-vintage-brown mb-3">About</h2>
            <p className="text-vintage-brown/70 mb-4 flex-grow">
              Learn about my strengths, weaknesses, and the journey that made me who I am today.
            </p>
            <Link to="/about" className="text-vintage-purple font-medium flex items-center hover:underline">
              Learn More <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-16">
          <div className="vintage-paper text-center py-8">
            <Star className="h-8 w-8 text-vintage-orange mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-groovy text-vintage-brown/80 italic mb-6">
              "My strength is her kiss, and my weakness is when she doesn't chat with me."
            </blockquote>
            <p className="text-vintage-brown font-medium">— Gabriel Laroya</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-vintage-green/20 to-vintage-orange/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-vintage-brown mb-6">Let's Connect</h2>
            <p className="text-lg md:text-xl text-vintage-brown/80 mb-8 max-w-2xl mx-auto">
              Want to chat or collaborate? Reach out and let's make something happen.
            </p>
            <Link to="/contact">
              <Button className="retro-button flex items-center gap-2 mx-auto">
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;

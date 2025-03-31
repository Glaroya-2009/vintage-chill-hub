
import React from 'react';
import Layout from '@/components/Layout';
import { BookOpen, Heart, Shield, User, Coffee, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl">
        <h1 className="page-title flex items-center justify-center gap-3">
          <BookOpen className="h-8 w-8 text-vintage-brown" />
          About Me
        </h1>

        <div className="vintage-paper mb-8">
          <div className="mb-8 text-center">
            <div className="inline-block p-3 rounded-full bg-vintage-orange/20 mb-4">
              <User className="h-16 w-16 text-vintage-brown" />
            </div>
            <h2 className="text-3xl font-bold text-vintage-brown mb-2">Gabriel Laroya</h2>
            <p className="text-vintage-brown/70 text-lg">Grade 10 Student</p>
          </div>
          
          <div className="vintage-divider"></div>
          
          <p className="text-vintage-brown/80 text-lg mb-6">
            Welcome to my vintage-inspired corner of the web! I'm Gabriel, a Grade 10 student at San Beda College Alabang with a passion for basketball, martial arts, and making connections with people.
          </p>
          
          <p className="text-vintage-brown/80 mb-8">
            This space reflects my personality - laid-back yet purposeful, with a touch of nostalgic charm. I believe in the power of authentic connections and finding joy in life's simple pleasures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/50 rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-vintage-orange" />
              </div>
              <h3 className="font-semibold text-vintage-brown mb-1">Student</h3>
              <p className="text-vintage-brown/70 text-sm">
                Academic journey at San Beda College Alabang
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-vintage-green/20 flex items-center justify-center mx-auto mb-3">
                <Coffee className="h-6 w-6 text-vintage-green" />
              </div>
              <h3 className="font-semibold text-vintage-brown mb-1">Hobbyist</h3>
              <p className="text-vintage-brown/70 text-sm">
                Basketball player and Taekwondo practitioner
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-vintage-purple/20 flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-vintage-purple" />
              </div>
              <h3 className="font-semibold text-vintage-brown mb-1">Friend</h3>
              <p className="text-vintage-brown/70 text-sm">
                Dedicated to making people smile
              </p>
            </div>
          </div>
          
          <div className="bg-vintage-brown/5 rounded-lg p-6 border border-vintage-brown/20">
            <h3 className="text-xl font-semibold text-vintage-brown mb-3">Personal Philosophy</h3>
            <p className="text-vintage-brown/80 italic">
              "I believe that true strength comes from meaningful connections, and that even our weaknesses can teach us important lessons about ourselves and what we value most."
            </p>
          </div>
        </div>

        {/* Strength & Weakness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="retro-card">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-vintage-orange mr-2" />
              <h2 className="text-2xl font-bold text-vintage-brown">Strength</h2>
            </div>
            
            <div className="bg-white/50 rounded-lg p-5 mb-4">
              <h3 className="text-xl font-semibold text-vintage-brown mb-2">Kiss nya</h3>
              <p className="text-vintage-brown/80">
                The emotional connection I share with someone special gives me strength, motivation, and purpose. It reminds me that relationships and the feelings they create can be a powerful driving force.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block rounded-full bg-vintage-orange/20 p-3">
                <Star className="h-8 w-8 text-vintage-orange" />
              </div>
              <p className="text-vintage-brown/70 italic mt-2">
                "Emotional connections fuel our journey through life."
              </p>
            </div>
          </div>
          
          <div className="retro-card">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-vintage-red mr-2" />
              <h2 className="text-2xl font-bold text-vintage-brown">Weakness</h2>
            </div>
            
            <div className="bg-white/50 rounded-lg p-5 mb-4">
              <h3 className="text-xl font-semibold text-vintage-brown mb-2">Pag di nyako chinachat</h3>
              <p className="text-vintage-brown/80">
                Communication is vital to me, and I find it challenging when there's silence from someone important. This vulnerability shows how much I value staying connected with those I care about.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block rounded-full bg-vintage-red/20 p-3">
                <Star className="h-8 w-8 text-vintage-red" />
              </div>
              <p className="text-vintage-brown/70 italic mt-2">
                "Our vulnerabilities reveal what matters most to us."
              </p>
            </div>
          </div>
        </div>
        
        {/* Fun Facts */}
        <div className="vintage-paper">
          <h2 className="text-2xl font-bold text-vintage-brown mb-6 text-center">Fun Facts</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-10 w-10 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏀</span>
              </div>
              <p className="text-vintage-brown/80 text-sm">
                Started playing basketball at age 8
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-10 w-10 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🥋</span>
              </div>
              <p className="text-vintage-brown/80 text-sm">
                Achieved multiple belts in Taekwondo
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-10 w-10 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎮</span>
              </div>
              <p className="text-vintage-brown/80 text-sm">
                Enjoys retro video games
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-10 w-10 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🌱</span>
              </div>
              <p className="text-vintage-brown/80 text-sm">
                Has a collection of vintage items
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-vintage-brown/70 italic">
              "Behind every fact is a story, and I'm still writing mine every day."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

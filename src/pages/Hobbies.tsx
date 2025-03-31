
import React from 'react';
import Layout from '@/components/Layout';
import { Coffee, Award, Target, Lightbulb } from 'lucide-react';

const HobbiesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl">
        <h1 className="page-title flex items-center justify-center gap-3">
          <Coffee className="h-8 w-8 text-vintage-brown" />
          Hobbies
        </h1>

        <div className="vintage-paper mb-8">
          <h2 className="text-2xl font-bold text-vintage-brown mb-6">
            Pursuing Passions
          </h2>
          <p className="text-vintage-brown/80 mb-6">
            When not focused on academics, Gabriel dedicates his time to activities that bring joy, growth, and balance to his life. These pursuits help shape his character and provide an outlet for self-expression.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/50 rounded-lg p-5 flex items-start">
              <div className="h-12 w-12 rounded-full bg-vintage-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-2xl">🏀</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-brown mb-2">Basketball</h3>
                <p className="text-vintage-brown/70">
                  Basketball isn't just a game for Gabriel; it's a passion that teaches teamwork, discipline, and perseverance. Whether playing with friends or practicing solo, the court is where he finds joy in movement and competition.
                </p>
              </div>
            </div>
            
            <div className="bg-white/50 rounded-lg p-5 flex items-start">
              <div className="h-12 w-12 rounded-full bg-vintage-orange/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-2xl">🥋</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-brown mb-2">Taekwondo</h3>
                <p className="text-vintage-brown/70">
                  Through the practice of Taekwondo, Gabriel has developed focus, discipline, and physical strength. This martial art offers both mental and physical challenges that help him grow as an individual.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hobby Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-vintage-brown mb-6 text-center">Hobby Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-vintage-orange/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 rounded-full bg-white/50 flex items-center justify-center mb-4">
                <span className="text-3xl">🏀</span>
              </div>
              <h3 className="text-lg font-semibold text-vintage-brown mb-2">Court Skills</h3>
              <p className="text-vintage-brown/70 text-sm">
                Dribbling, shooting, and team strategy on the basketball court.
              </p>
            </div>
            
            <div className="aspect-square bg-vintage-green/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 rounded-full bg-white/50 flex items-center justify-center mb-4">
                <span className="text-3xl">🥋</span>
              </div>
              <h3 className="text-lg font-semibold text-vintage-brown mb-2">Martial Arts</h3>
              <p className="text-vintage-brown/70 text-sm">
                Forms, techniques, and the philosophy of Taekwondo.
              </p>
            </div>
            
            <div className="aspect-square bg-vintage-purple/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 rounded-full bg-white/50 flex items-center justify-center mb-4">
                <span className="text-3xl">😊</span>
              </div>
              <h3 className="text-lg font-semibold text-vintage-brown mb-2">Spreading Joy</h3>
              <p className="text-vintage-brown/70 text-sm">
                Making others smile through positivity and kindness.
              </p>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="retro-card mb-8">
          <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
            <Award className="h-6 w-6 mr-2 text-vintage-green" />
            Benefits of My Hobbies
          </h2>
          
          <div className="space-y-4 leaf-bullet">
            <li>
              <span className="font-semibold text-vintage-brown">Physical Fitness:</span> Basketball and Taekwondo keep me active and healthy.
            </li>
            <li>
              <span className="font-semibold text-vintage-brown">Mental Discipline:</span> Martial arts training improves focus and mental clarity.
            </li>
            <li>
              <span className="font-semibold text-vintage-brown">Teamwork:</span> Basketball teaches collaboration and communication skills.
            </li>
            <li>
              <span className="font-semibold text-vintage-brown">Self-Defense:</span> Taekwondo provides practical self-defense knowledge.
            </li>
            <li>
              <span className="font-semibold text-vintage-brown">Stress Relief:</span> Physical activities offer an outlet for stress and tension.
            </li>
            <li>
              <span className="font-semibold text-vintage-brown">Confidence Building:</span> Mastering new skills boosts self-esteem.
            </li>
          </div>
        </div>
        
        {/* Future Hobbies */}
        <div className="vintage-paper">
          <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
            <Lightbulb className="h-6 w-6 mr-2 text-vintage-orange" />
            Hobbies I'd Like to Explore
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="font-semibold text-vintage-brown">Music</h3>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-vintage-brown">Art</h3>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <div className="h-12 w-12 rounded-full bg-vintage-orange/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏄‍♂️</span>
              </div>
              <h3 className="font-semibold text-vintage-brown">Surfing</h3>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-vintage-brown/70 italic">
              "The journey of self-discovery continues as I explore new interests and passions."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HobbiesPage;

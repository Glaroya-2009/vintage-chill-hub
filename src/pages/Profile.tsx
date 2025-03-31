
import React from 'react';
import Layout from '@/components/Layout';
import { User, Medal, School, MapPin, Calendar } from 'lucide-react';

const ProfilePage = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl">
        <h1 className="page-title flex items-center justify-center gap-3">
          <User className="h-8 w-8 text-vintage-brown" />
          Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="retro-card flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-vintage-orange/30 flex items-center justify-center mb-4">
                <User className="h-16 w-16 text-vintage-brown" />
              </div>
              <h2 className="text-2xl font-bold text-vintage-brown mb-2">Gabriel Laroya</h2>
              <p className="text-vintage-brown/70 mb-4">Student & Vibes Enthusiast</p>
              
              <div className="vintage-divider"></div>
              
              <div className="w-full text-left">
                <div className="flex items-center mb-3">
                  <School className="h-5 w-5 text-vintage-green mr-3" />
                  <div>
                    <p className="text-sm text-vintage-brown/60">School</p>
                    <p className="text-vintage-brown font-medium">San Beda College Alabang</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <Medal className="h-5 w-5 text-vintage-green mr-3" />
                  <div>
                    <p className="text-sm text-vintage-brown/60">Grade</p>
                    <p className="text-vintage-brown font-medium">10</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-vintage-green mr-3" />
                  <div>
                    <p className="text-sm text-vintage-brown/60">Location</p>
                    <p className="text-vintage-brown font-medium">Sa bahay nyo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Details */}
          <div className="md:col-span-2">
            <div className="vintage-paper">
              <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-vintage-orange" />
                Personal Journey
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-2">Educational Path</h3>
                  <p className="text-vintage-brown/80">
                    Currently a Grade 10 student at San Beda College Alabang, Gabriel is passionate about learning and growing as an individual.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-2">Skills & Talents</h3>
                  <p className="text-vintage-brown/80 mb-4">
                    Gabriel has a unique gift for brightening people's days and bringing smiles to their faces. His natural charisma and positive energy are infectious.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/50 rounded-lg p-4 flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vintage-orange w-[95%] rounded-full"></div>
                      </div>
                      <span className="ml-2 text-vintage-brown font-medium text-sm whitespace-nowrap">Making People Smile</span>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 flex items-center">
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-vintage-green w-[85%] rounded-full"></div>
                      </div>
                      <span className="ml-2 text-vintage-brown font-medium text-sm whitespace-nowrap">Positive Vibes</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-2">Personal Philosophy</h3>
                  <p className="text-vintage-brown/80 italic">
                    "Life is about finding the perfect balance between what makes you happy and what makes others smile."
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-2">Future Goals</h3>
                  <p className="text-vintage-brown/80">
                    Gabriel aims to continue spreading positivity while pursuing excellence in both academic and personal endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="retro-card">
            <h2 className="text-2xl font-bold text-vintage-brown mb-4">Strength</h2>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-vintage-orange/20 flex items-center justify-center">
                <span className="text-3xl">💋</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-brown mb-1">Kiss nya</h3>
                <p className="text-vintage-brown/70">A powerful motivation that fuels Gabriel's day.</p>
              </div>
            </div>
            <p className="text-vintage-brown/80 italic">
              "The strength that drives me comes from the simplest yet most meaningful connections."
            </p>
          </div>
          
          <div className="retro-card">
            <h2 className="text-2xl font-bold text-vintage-brown mb-4">Weakness</h2>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-vintage-red/20 flex items-center justify-center">
                <span className="text-3xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-vintage-brown mb-1">Pag di nyako chinachat</h3>
                <p className="text-vintage-brown/70">The silent notification bar that brings anxiety.</p>
              </div>
            </div>
            <p className="text-vintage-brown/80 italic">
              "Even the strongest among us have their kryptonite, mine appears when communication falls silent."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;

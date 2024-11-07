import React from 'react';
import { Music4, Globe, DollarSign, Mail, MapPin, Star } from 'lucide-react';
import { FeatureCard } from './components/FeatureCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-purple-50">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.cbc.ca/ais/1d7700d5-54c3-4aa1-8c4a-5a6ed33cd5b5,1730734245176/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1919%2C1079%29%3BResize%3D%28620%29")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center text-shadow-lg">
            taylorswiftway.com
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-shadow">
            Own this premium domain inspired by the iconic Taylor Swift
          </p>
          <button 
            onClick={() => window.location.href = 'mailto:karenmeh3@gmail.com'}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-xl"
          >
            Contact on : karenmeh3@gmail.com
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why This Domain Is Perfect
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-rose-500" />}
              title="Premium Domain"
              description="A memorable, brandable domain perfect for Taylor Swift related ventures"
            />
            <FeatureCard 
              icon={<MapPin className="w-8 h-8 text-rose-500" />}
              title="Toronto Connection"
              description="Ideal for Toronto-based Swift-related businesses and fan communities"
            />
            <FeatureCard 
              icon={<Star className="w-8 h-8 text-rose-500" />}
              title="Endless Possibilities"
              description="Perfect for fan sites, merchandise, or Swift-inspired businesses"
            />
          </div>
        </div>
      </div>

      {/* Location Highlight */}
      <div className="py-20 px-4 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Toronto's Swift Connection
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80"
              alt="Toronto Skyline"
              className="rounded-lg shadow-xl"
            />
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Toronto, a city with a vibrant music scene and passionate Swifties, 
                makes this domain particularly valuable for local businesses and fan communities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <Music4 className="w-6 h-6 mr-3 text-rose-500" />
                  Strong music and entertainment industry presence
                </li>
                <li className="flex items-center text-gray-700">
                  <DollarSign className="w-6 h-6 mr-3 text-rose-500" />
                  Growing market for Swift-related merchandise and experiences
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Secure This Premium Domain Today
          </h2>
          <p className="text-xl mb-12">
            Don't miss this unique opportunity to own taylorswiftway.com
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:karenmeh3@gmail.com"
              className="flex items-center bg-white text-rose-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all"
            >
              <Mail className="w-6 h-6 mr-2" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
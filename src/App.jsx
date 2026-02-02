import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Send, 
  Menu, 
  X,
  Sparkles,
  Shield,
  Zap,
  Volume2
} from 'lucide-react';
import parisImg from './img/paris.png';
import cretaceImg from './img/crétacé.png';
import florenceImg from './img/florence.png';
import teaserAudio from './img/teaser.mp3';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Bonjour ! Je suis Chronos. Quelle époque vous tente ?' },
    { type: 'user', text: 'Est-ce que le Crétacé est dangereux ?' },
    { type: 'bot', text: 'Nos capsules sont 100% sécurisées avec champs de force.' }
  ]);

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { type: 'user', text: chatInput }]);
      setChatInput('');
      
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          type: 'bot', 
          text: 'Merci pour votre question ! Un de nos experts temporels vous répondra bientôt.' 
        }]);
      }, 1000);
    }
  };

  const toggleAudio = () => {
    const audio = document.getElementById('teaser-audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (currentPage === 'paris') {
    return <ParisPage setCurrentPage={setCurrentPage} />;
  }
  if (currentPage === 'cretace') {
    return <CretacePage setCurrentPage={setCurrentPage} />;
  }
  if (currentPage === 'florence') {
    return <FlorencePage setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header/Navbar */}
      <header className="relative z-50 glass-effect fixed w-full top-0 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold gradient-text">TimeTravel Agency</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#accueil" className="hover:text-cyan-400 transition-colors">Accueil</a>
              <a href="#destinations" className="hover:text-pink-400 transition-colors">Destinations</a>
              <a href="#ia-assistant" className="hover:text-purple-400 transition-colors">IA Assistant</a>
              <a href="#reservation" className="hover:text-cyan-400 transition-colors">Réservation</a>
              <button onClick={toggleAudio} className="ml-4 p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg transition-all">
                <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#accueil" className="block hover:text-cyan-400 transition-colors">Accueil</a>
              <a href="#destinations" className="block hover:text-pink-400 transition-colors">Destinations</a>
              <a href="#ia-assistant" className="block hover:text-purple-400 transition-colors">IA Assistant</a>
              <a href="#reservation" className="block hover:text-cyan-400 transition-colors">Réservation</a>
              <button onClick={toggleAudio} className="flex items-center gap-2 text-white">
                <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
                Teaser Audio
              </button>
            </div>
          )}
          <audio id="teaser-audio" src={teaserAudio} loop />
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80)',
            filter: 'brightness(0.3)'
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Le temps n'est plus <span className="gradient-text">une limite.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Explorez l'histoire. Vivez le passé. Paris, le Crétacé, Florence.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Réserver votre voyage
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Feature Icons */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-lg p-6">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">100% Sécurisé</h3>
              <p className="text-sm text-gray-400">Champs de force quantique</p>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <Zap className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instantané</h3>
              <p className="text-sm text-gray-400">Voyage en quelques secondes</p>
            </div>
            <div className="glass-effect rounded-lg p-6">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expérience Unique</h3>
              <p className="text-sm text-gray-400">Guides experts temporels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="relative py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Nos Destinations <span className="gradient-text">Phares</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Voyagez à travers les époques et vivez l'histoire comme jamais auparavant
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Paris 1889 */}
            <div className="group glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
              <div className="h-64 bg-cover bg-center relative">
                <img src={parisImg} alt="Paris 1889" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">Paris 1889</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Inauguration de la Tour Eiffel et Exposition Universelle.
                </p>
                <button onClick={() => setCurrentPage('paris')} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Détails
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Le Crétacé */}
            <div className="group glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
              <div className="h-64 bg-cover bg-center relative">
                <img src={cretaceImg} alt="Le Crétacé" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">Le Crétacé</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Safari préhistorique au milieu des géants.
                </p>
                <button onClick={() => setCurrentPage('cretace')} className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Détails
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Florence 1504 */}
            <div className="group glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
              <div className="h-64 bg-cover bg-center relative">
                <img src={florenceImg} alt="Florence 1504" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">Florence 1504</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Rencontrez Léonard de Vinci et Michel-Ange.
                </p>
                <button onClick={() => setCurrentPage('florence')} className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Détails
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ia-assistant" className="relative py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Chronos IA</span> - Votre Assistant Temporel
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Posez vos questions sur n'importe quelle époque, notre IA vous répond instantanément
          </p>

          <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-purple-500/30">
            {/* Chat Messages */}
            <div className="space-y-4 mb-6 h-80 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'glass-effect border border-cyan-500/30'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-400 font-semibold">Chronos IA</span>
                      </div>
                    )}
                    <p className="text-sm md:text-base">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Field */}
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Posez votre question..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="reservation" className="relative py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Planifiez votre <span className="gradient-text">saut temporel</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Remplissez le formulaire et préparez-vous à l'aventure de votre vie
          </p>

          <div className="glass-effect rounded-2xl p-8 shadow-2xl border-2 border-pink-500/30">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Destination Dropdown */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Destination
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors">
                  <option value="" className="bg-gray-900">Sélectionnez une destination</option>
                  <option value="paris" className="bg-gray-900">Paris 1889</option>
                  <option value="cretace" className="bg-gray-900">Le Crétacé</option>
                  <option value="florence" className="bg-gray-900">Florence 1504</option>
                </select>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Date de départ
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <Calendar className="absolute right-4 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Valider
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10 glass-effect">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold gradient-text">TimeTravel Agency</span>
          </div>
          <p className="text-gray-400">
            Copyright © 2050 TimeTravel Agency. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Les voyages temporels sont soumis aux lois de la Commission Chrono-Spatiale Internationale.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Page Paris 1889
function ParisPage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="glass-effect border-b border-white/10 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
              Retour
            </button>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold gradient-text">TimeTravel Agency</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <img src={parisImg} alt="Paris 1889" className="w-full h-96 object-cover" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Paris <span className="gradient-text">1889</span>
            </h1>

            {/* Description */}
            <div className="glass-effect rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Inauguration de la Tour Eiffel</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Assistez à l'un des moments les plus emblématiques de l'histoire française : l'inauguration de la Tour Eiffel lors de l'Exposition Universelle de 1889.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Vivez l'effervescence de Paris à la Belle Époque, déambulez dans les pavillons de l'Exposition Universelle, et montez les 1 710 marches de la toute nouvelle Tour Eiffel aux côtés de Gustave Eiffel lui-même.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Découvrez les innovations technologiques de l'époque, rencontrez les artistes et intellectuels du moment, et imprégnez-vous de l'atmosphère unique de cette période charnière de la modernité.
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Informations pratiques</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Époque : 31 mars - 6 mai 1889</li>
                  <li>• Durée recommandée : 3-5 jours</li>
                  <li>• Langue : Français (traduction disponible)</li>
                  <li>• Guide temporel inclus</li>
                </ul>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Points forts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Inauguration de la Tour Eiffel</li>
                  <li>• Exposition Universelle</li>
                  <li>• Paris Belle Époque</li>
                  <li>• Rencontre avec Gustave Eiffel</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Réserver cette destination
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Page Le Crétacé
function CretacePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="glass-effect border-b border-white/10 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
              Retour
            </button>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold gradient-text">TimeTravel Agency</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <img src={cretaceImg} alt="Le Crétacé" className="w-full h-96 object-cover" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Le <span className="gradient-text">Crétacé</span>
            </h1>

            {/* Description */}
            <div className="glass-effect rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Safari Préhistorique</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Embarquez pour le plus grand safari de tous les temps : une expédition au cœur du Crétacé, il y a 66 à 145 millions d'années.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Observez les majestueux dinosaures dans leur habitat naturel depuis nos capsules temporelles ultra-sécurisées avec champs de force quantique. Tyrannosaures, Tricératops, Vélociraptors... découvrez ces créatures légendaires comme personne ne les a jamais vues.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nos paléontologues experts vous accompagnent pour une immersion totale dans cet écosystème fascinant. Une expérience inoubliable en toute sécurité !
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Informations pratiques</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Époque : -145 à -66 millions d'années</li>
                  <li>• Durée recommandée : 2-4 jours</li>
                  <li>• Protection : Capsule sécurisée</li>
                  <li>• Paléontologue expert inclus</li>
                </ul>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Points forts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Observation des T-Rex</li>
                  <li>• Safari Tricératops</li>
                  <li>• Forêts préhistoriques</li>
                  <li>• 100% sécurisé</li>
                </ul>
              </div>
            </div>

            {/* Warning */}
            <div className="glass-effect rounded-xl p-6 mb-8 border-2 border-cyan-500/30">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Sécurité Maximale</h3>
                  <p className="text-gray-300 text-sm">
                    Toutes nos excursions au Crétacé se font depuis des capsules temporelles équipées de champs de force quantique. Vous êtes protégés à 100% tout en profitant d'une vue panoramique exceptionnelle.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Réserver cette destination
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Page Florence 1504
function FlorencePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="glass-effect border-b border-white/10 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
              Retour
            </button>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold gradient-text">TimeTravel Agency</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <img src={florenceImg} alt="Florence 1504" className="w-full h-96 object-cover" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Florence <span className="gradient-text">1504</span>
            </h1>

            {/* Description */}
            <div className="glass-effect rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">Renaissance Italienne</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Plongez au cœur de la Renaissance italienne et rencontrez les plus grands génies de l'humanité : Léonard de Vinci et Michel-Ange.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Visitez l'atelier de Léonard de Vinci, observez Michel-Ange sculptant le David, déambulez dans les rues de Florence à l'apogée de sa splendeur artistique. Assistez aux discussions philosophiques dans les cours des Médicis.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cette période unique où art, science et humanisme se rencontrent vous offre une expérience culturelle incomparable. Découvrez les chefs-d'œuvre en cours de création et échangez avec les maîtres de la Renaissance.
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Informations pratiques</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Époque : Année 1504</li>
                  <li>• Durée recommandée : 4-7 jours</li>
                  <li>• Langue : Italien (traduction incluse)</li>
                  <li>• Historien de l'art expert</li>
                </ul>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Points forts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Rencontre avec Léonard de Vinci</li>
                  <li>• Atelier de Michel-Ange</li>
                  <li>• Palais des Médicis</li>
                  <li>• Florence Renaissance</li>
                </ul>
              </div>
            </div>

            {/* Special Feature */}
            <div className="glass-effect rounded-xl p-6 mb-8 border-2 border-pink-500/30">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-pink-400">Expérience VIP</h3>
                  <p className="text-gray-300 text-sm">
                    Option exclusive : participez à un banquet privé au Palazzo Vecchio et assistez à une démonstration artistique avec les maîtres de la Renaissance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105">
              Réserver cette destination
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

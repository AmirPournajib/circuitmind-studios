import './App.css';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <motion.div
      className="min-h-screen font-sans text-white scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <nav className="bg-white text-black px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-xl font-bold">CIRCUITMIND STUDIOS</div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 items-center text-sm font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection('contact')} className="border border-black px-4 py-1 font-semibold hover:bg-black hover:text-white transition">CONTACT</button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Services</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 font-semibold border border-black hover:bg-black hover:text-white">CONTACT</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative h-[90vh] bg-fixed bg-cover bg-center flex items-center px-10"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <motion.div className="max-w-xl relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerStagger}>
          <motion.h1 className="text-4xl sm:text-5xl font-extrabold mb-4" variants={fadeInUp}>Empower your future</motion.h1>
          <motion.p className="text-lg mb-6 text-white/90" variants={fadeInUp}>Unlock potential with AI</motion.p>
          <motion.button
            variants={fadeInUp}
            onClick={() => scrollToSection('services')}
            className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded"
          >
            VIEW SERVICES
          </motion.button>
        </motion.div>
      </header>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-white text-black py-24 px-8 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-bold text-blue-900 uppercase mb-2">Empowering Innovation</p>
            <h2 className="text-3xl font-extrabold mb-4">Transforming ideas into reality</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              CIRCUITMIND STUDIOS empowers individuals and businesses to thrive in the AI landscape.
              Through hands-on ML education, personalized career coaching, and rapid proof-of-concept development,
              we equip you with the tools needed for success.
            </p>
            <Link to="/#contact" className="underline text-gray-800 font-medium hover:text-blue-600">
              Get in touch
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img src="/about-office.jpg" alt="Office" className="rounded-lg shadow-md" />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="bg-[#f1f5f9] text-black py-24 px-8 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12 text-center" variants={fadeInUp}>
            <p className="text-sm font-bold text-blue-900 uppercase mb-2">Empower your growth</p>
            <h2 className="text-3xl font-extrabold">Transformative learning and development</h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerStagger}>
            <Link to="/workshops/ml" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="/ml-workshop.jpg" alt="ML" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex justify-between">
                  Hands-on ML workshops <span>›</span>
                </h3>
                <p className="text-gray-700">Interactive workshops designed for real-world AI impact.</p>
              </div>
            </Link>

            <Link to="/coaching" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="/career-coaching.jpg" alt="Career Coaching" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex justify-between">
                  Career Coaching <span>›</span>
                </h3>
                <p className="text-gray-700">Level up your AI, tech, and product career with expert guidance.</p>
              </div>
            </Link>

            <Link to="/poc" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="/poc-dev.jpg" alt="PoC Dev" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex justify-between">
                  Rapid PoC Development <span>›</span>
                </h3>
                <p className="text-gray-700">Build prototypes fast. Validate ideas with real tools.</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="bg-white text-black py-24 px-8 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl font-extrabold mb-4" variants={fadeInUp}>Let’s Talk</motion.h2>
          <motion.p className="text-lg mb-8 text-gray-700" variants={fadeInUp}>
            Whether you're ready to start your AI journey or have questions, we're here to help.
          </motion.p>
          <motion.form
            className="grid gap-6 text-left"
            variants={fadeInUp}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <textarea rows="5" placeholder="Your Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            <button type="submit" className="bg-blue-800 text-white font-semibold px-6 py-3 rounded hover:bg-blue-900 transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default App;

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      className="min-h-screen font-sans text-white scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <nav className="bg-white text-black px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold">CIRCUITMIND STUDIOS</div>
        <div className="flex gap-6 items-center">
          <ul className="flex gap-6 items-center text-sm font-medium">
            <li><button onClick={() => scrollToSection('hero')} className="hover:text-blue-600">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-600">About</button></li>
            <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-600">Services</button></li>
          </ul>
          <button className="border border-black px-4 py-1 font-semibold hover:bg-black hover:text-white transition">
            CONTACT
          </button>
        </div>
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
          <motion.button onClick={() => scrollToSection('services')} variants={fadeInUp} className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded">
            VIEW SERVICES
          </motion.button>
        </motion.div>
      </header>

      {/* About Section */}
      <motion.section id="about" className="bg-white text-black py-24 px-8 md:px-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerStagger}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-bold text-blue-900 uppercase mb-2">Empowering Innovation</p>
            <h2 className="text-3xl font-extrabold mb-4">Transforming ideas into reality</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              CIRCUITMIND STUDIOS empowers individuals and businesses to thrive in the AI landscape. Through hands-on ML education, personalized career coaching, and rapid proof-of-concept development, we equip you with the tools needed for success.
            </p>
            <a href="#contact" className="underline text-gray-800 font-medium hover:text-blue-600">Get in touch</a>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img src="/about-office.jpg" alt="Office" className="rounded-lg shadow-md" />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section id="services" className="bg-[#f1f5f9] text-black py-24 px-8 md:px-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerStagger}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12 text-center" variants={fadeInUp}>
            <p className="text-sm font-bold text-blue-900 uppercase mb-2">Empower your growth</p>
            <h2 className="text-3xl font-extrabold">Transformative learning and development</h2>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerStagger}>
            <a href="/workshops">
              <motion.div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition" variants={fadeInUp}>
                <img src="/ml-workshop.jpg" alt="ML Workshop" className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex justify-between">Hands-on ML workshops <span>›</span></h3>
                  <p className="text-gray-700">Dive into the world of machine learning with our interactive workshops.</p>
                </div>
              </motion.div>
            </a>
            <a href="/career">
              <motion.div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition" variants={fadeInUp}>
                <img src="/career-coaching.jpg" alt="Career Coaching" className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex justify-between">Career coaching <span>›</span></h3>
                  <p className="text-gray-700">Elevate your career with personalized coaching sessions.</p>
                </div>
              </motion.div>
            </a>
            <motion.div className="bg-white rounded-lg shadow-md overflow-hidden" variants={fadeInUp}>
              <img src="/poc-dev.jpg" alt="PoC Development" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex justify-between">Rapid PoC development <span>›</span></h3>
                <p className="text-gray-700">Transform your ideas into proof of concepts swiftly with our expertise.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
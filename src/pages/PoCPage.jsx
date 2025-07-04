// src/pages/PoCPage.jsx
import { Link, useNavigate } from 'react-router-dom';

export default function PoCPage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="text-black font-sans">
      {/* Top Nav */}
      <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold">CIRCUITMIND STUDIOS</div>
        <div className="flex gap-6 items-center text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <button
            onClick={goToContact}
            className="border border-black px-4 py-1 font-semibold hover:bg-black hover:text-white"
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-start">
        <img src="/poc-dev.jpg" alt="PoC Development" className="rounded shadow-md" />
        <div>
          <p className="uppercase text-blue-900 text-sm font-bold mb-2">Rapid PoC Development</p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Bring your product ideas to life quickly with our Rapid Proof-of-Concept development service.
            We help founders and product teams validate their concepts using the latest AI tools and agile methods.
            From ideation to working prototypes, we focus on speed, iteration, and delivering real user value.
          </p>
          <button onClick={goToContact} className="underline text-gray-700 font-medium">
            Schedule appointment
          </button>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's build together</h2>
        <p className="text-lg mb-6">Talk to us about your vision — we'll bring it to life.</p>
        <button
          onClick={goToContact}
          className="border px-6 py-3 font-semibold hover:bg-white hover:text-blue-900 transition"
        >
          GET IN TOUCH
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm py-6 px-6 flex justify-start gap-10">
        <button onClick={goToContact} className="hover:underline">Schedule Appointment</button>
        <button onClick={goToContact} className="hover:underline">Complete Intake</button>
      </footer>
    </div>
  );
}

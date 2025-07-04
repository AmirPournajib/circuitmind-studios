// src/pages/WorkshopPage.jsx
import { Link, useNavigate } from 'react-router-dom';

export default function WorkshopPage() {
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
        <img src="/ml-workshop.jpg" alt="ML Workshop" className="rounded shadow-md" />
        <div>
          <p className="uppercase text-blue-900 text-sm font-bold mb-2">Hands-on ML Workshops</p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Unlock the potential of machine learning through our hands-on workshops designed for individuals and teams.
            Whether you're a beginner or looking to deepen your knowledge, our sessions cater to all skill levels.
            Participants engage in practical exercises and real-world applications using state-of-the-art AI tools.
            Our experienced instructors guide you through key concepts, ensuring you build a solid foundation in machine
            learning. Join us for an immersive learning experience that empowers you to harness the power of AI in your
            projects and career.
          </p>
          <button onClick={goToContact} className="underline text-gray-700 font-medium">Schedule appointment</button>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's talk</h2>
        <p className="text-lg mb-6">We would love to hear from you!</p>
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

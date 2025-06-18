import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 pt-24 pb-0 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-down mb-6">
        Let's Connect
      </h2>
      <p className="text-gray-400 mb-12 max-w-xl text-center animate-fade-up">
        I'd love to hear from you — whether you want to collaborate or just say hi!
      </p>

      {/* Contact Cards */}
      <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mb-12 px-2 animate-fade-up">
        <div className="bg-[#111827] p-6 rounded-xl border border-cyan-600 shadow-md hover:shadow-cyan-500/30 transition duration-300">
          <p className="text-gray-300 mb-1">📛 <span className="font-semibold text-white">Name:</span></p>
          <p className="text-xl font-bold text-cyan-400">Aryan Sharma</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-pink-600 shadow-md hover:shadow-pink-500/30 transition duration-300">
          <p className="text-gray-300 mb-1">📱 <span className="font-semibold text-white">Phone:</span></p>
          <p className="text-xl font-bold text-pink-400">9518403808</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-yellow-600 shadow-md hover:shadow-yellow-500/30 transition duration-300">
          <p className="text-gray-300 mb-1">📧 <span className="font-semibold text-white">Email:</span></p>
          <a href="mailto:arsharma2951@gmail.com" className="text-xl font-bold text-yellow-400 hover:underline">
            arsharma2951@gmail.com
          </a>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-green-600 shadow-md hover:shadow-green-500/30 transition duration-300">
          <p className="text-gray-300 mb-1">📍 <span className="font-semibold text-white">Location:</span></p>
          <p className="text-xl font-bold text-green-400">
            Gharaunda, Karnal, Haryana 132114
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-cyan-600 animate-fade-up">
        <iframe
          title="Aryan's Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13794.996263029033!2d76.97212639999999!3d29.693162100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4f67c7a2d469%3A0x9a3dc35cb0c780ce!2sGharaunda%2C%20Haryana%20132114!5e0!3m2!1sen!2sin!4v1718623309871!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

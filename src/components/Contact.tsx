import React from "react";
import { Mail, Github, Linkedin, Scroll, Sword } from "lucide-react";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact" className="py-20 coc-container">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Join My Clan</h2>
        <div className="section-divider mb-12"></div>
        <div className="coc-card max-w-3xl mx-auto p-8 rounded-lg">
          <div className="flex justify-center mb-8">
            <div className="achievement-badge w-24 h-24 hover-float">
              <Sword className="w-16 h-16 text-black glow-animation" />
            </div>
          </div>

          <p className="text-yellow-400 text-xl mb-8">
            Ready to embark on an epic development journey together?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 z-20 relative">
            <a
              href="mailto:your.email@example.com"
              className="coc-card p-6 rounded-lg hover:scale-105 transition-transform hover-pulse"
            >
              <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4 glow-animation" />
              <span className="text-white block">Email</span>
              <span className="text-yellow-400 text-sm">Join the Battle</span>
            </a>
            <a
              href="https://github.com/rohitmanohar2108"
              target="_blank"
              rel="noopener noreferrer"
              className="coc-card p-6 rounded-lg hover:scale-105 transition-transform hover-pulse"
            >
              <Github className="w-12 h-12 text-yellow-400 mx-auto mb-4 glow-animation" />
              <span className="text-white block">GitHub</span>
              <span className="text-yellow-400 text-sm">View Arsenal</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
              target="_blank"
              rel="noopener noreferrer"
              className="coc-card p-6 rounded-lg hover:scale-105 transition-transform hover-pulse"
            >
              <Linkedin className="w-12 h-12 text-yellow-400 mx-auto mb-4 glow-animation" />
              <span className="text-white block">LinkedIn</span>
              <span className="text-yellow-400 text-sm">Connect Forces</span>
            </a>
          </div>

          <div className="coc-card p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <p className="text-gray-300 text-lg italic">
              "Victory comes to those who code with passion and deploy with
              precision!"
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-7">
          © {currentYear} <span className="hero-subtitle">Rohit Manohar</span>. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;

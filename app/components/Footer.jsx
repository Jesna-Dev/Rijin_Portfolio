

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-yellow-100 via-white to-yellow-100 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Me</h3>
          <p>
            I am a passionate front-end developer creating visually appealing and interactive web experiences. Let’s build something amazing together!
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#Home" className="hover:text-gray-900 transition-colors">Home</a>
            </li>
            <li>
              <a href="#AboutMe" className="hover:text-gray-900 transition-colors">About</a>
            </li>
            <li>
              <a href="#Experience" className="hover:text-gray-900 transition-colors">Projects</a>
            </li>
            {/* <li>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <p>Email: <a href="mailto:yourmail@example.com" className="hover:text-gray-900 transition-colors">yourmail@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-900 transition-colors">+1 234 567 890</a></p>
          <p>Location: Kerala, India</p>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-yellow-500 pt-6 text-sm text-gray-700">
        &copy; {new Date().getFullYear()} rijin v reji. All rights reserved.
      </div>
    </footer>
  );
}

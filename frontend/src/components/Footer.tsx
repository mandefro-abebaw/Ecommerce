import { FaInstagram, FaTelegram, FaFacebook, FaTwitter, FaLinkedin, FaPinterest,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-14">

        {/* E-Shop Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">MelorinaE-Shop</h2>
          <p className="text-sm">
            Your trusted online marketplace for quality products.
          </p>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
          <p className="text-sm">Email: mandefroabebaw3@gmail.com</p>
          <p className="text-sm">Phone: +251 921 57 8636</p>
          <div className="flex gap-2 mt-4 text-xl">
            <a href="https://www.instagram.com/melorina_1?igsh=MTJ4cGp5ajQ5Y21ybA==" className="hover:text-white"><FaInstagram /></a>
            <a href="https://t.me/Siparia" className="hover:text-white"><FaTelegram /></a>
            <a href="https://www.facebook.com/mandefroabebaw" className="hover:text-white"><FaFacebook /></a>
            <a href="https://x.com/manirmas6532new" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
            <a href="https://www.pinterest.com/mandefroabebaw" className="hover:text-white"><FaPinterest /></a>
            <a href="https://www.youtube.com/mandefro-q3q" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>

        {/* MelorinaEcommerce */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">MelorinaE-shop</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">What is MelorinaE-shop</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Demo</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Resources</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Guides</a></li>
            <li><a href="#" className="hover:text-white">Tutorials</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Ecosystem */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Ecosystem</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Marketplace</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
            <li><a href="#" className="hover:text-white">Partners</a></li>
            <li><a href="#" className="hover:text-white">Apps</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Support</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Contact Support</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Report a Bug</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
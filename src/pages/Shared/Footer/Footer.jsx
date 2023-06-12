import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/lv.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-32">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="mb-8">
            <h4 className="text-2xl font-bold flex items-center dark:text-gray-400">
              <img src={logo} className="w-8 h-8 mr-2" alt="logo" />
              LinguaVerse
            </h4>
            <p className="text-sm leading-loose text-gray-600 dark:text-gray-400 mt-4">
              We provide various ways to stay connected with LinguaVerse Summer Camp even after the camp ends. Get updates on future events, access exclusive resources, and join our alumni network to continue your language learning journey.
            </p>
            <div className="flex mt-6">
              <a href="#" className="mr-2 text-gray-600 dark:text-gray-400 hover:text-gray-500">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="mr-2 text-gray-600 dark:text-gray-400 hover:text-gray-500">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="mr-2 text-pink-500 hover:text-pink-600">
                <FaDribbble className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-500">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mb-8">
            <h5 className="text-lg font-bold mb-4 dark:text-gray-400">Upcoming Events</h5>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500">
                  French Language
                  <span className="text-gray-500"> - Limited spots available!</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">
                   Spanish Language
                  <span className="text-gray-500"> - Early bird registration now open!</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">
                 German Language
                  <span className="text-gray-500"> - Join us for exciting cultural activities!</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4 dark:text-gray-400">Contact</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-loose mb-2">
              Address: Feni, Bangladesh
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-loose">
              Phone: +1234567890
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-loose">
              Email: info@linguaverse.com
            </p>
          </div>

          <div className="mb-8">
            <h5 className="text-lg font-bold mb-4 dark:text-gray-400">Useful Links</h5>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">Github</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">Free Products</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-center space-x-2">
          <div className="flex items-center">
            <img src={logo} className="w-8 h-8 mr-2" alt="" />
            <span className="text-lg font-bold dark:text-gray-400">LinguaVerse</span>
          </div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © 2023 designed and developed by Fab Rupom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

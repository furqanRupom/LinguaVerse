import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../../assets/lv.png'
const Footer = () => {
    return (
      <footer className="relative  pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-2xl flex    flex-col">Stay Connected with
              <div className="flex items-center">
              <img src={logo} className="w-12" alt="logo" /> LinguaVerse
                </div>
             </h4>
              <h5 className="text-base mt-0 mb-2 ">
              we provide various ways to stay connected with Languaverse Summer Camp even after the camp ends. Get updates on future events, access exclusive resources, and join our alumni network to continue your language learning journey.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FaFacebook />
                </button>
                <button className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FaTwitter />
                </button>
                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FaDribbble />
                    </button>
                <button className="bg-white text-gray-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FaInstagram />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-sm  mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                    </li>
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                    </li>
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                    </li>
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-sm  mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                    </li>
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                    </li>
                    <li>
                      <a className=" hover:text-gray-400  block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-col lg:flex-row items-center md:justify-between justify-center ">
            <div className="w-full  xl:w-[55%] px-4 mx-auto text-center ">

              <div className="flex flex-col md:flex-row items-center">

            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img className="w-12" src={logo} alt="" />
      <span className="ml-3 text-xl">LinguaVerse</span>
    </a>
    <p className=" text-xs sm:text-sm  text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 LinguaVerse —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">designed and developed by Fab Rupom</a>
    </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
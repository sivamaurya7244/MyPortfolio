import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <ul className='flex space-x-4'>
                                                <li>
                                                    <a href="https://www.facebook.com/share/15z3FQichX/" target="_blank">
                                                        <FaFacebook className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/in/siva-kant-maurya-5789b9287" target="_blank">
                                                        <FaLinkedinIn className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/shivam_maurya7244?igsh=b2twYTByZzIxa3cy" target="_blank">
                                                        <FaInstagram className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                                </li>
                                                <li>
                                                    <a href="https://github.com/sivamaurya7244" target="_blank">
                                                        <FaGithub className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a>
                                                </li>
                                            </ul>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 My Portfolio. All rights reserved.
              </p>
              <p className="text-sm">Devloped by ❤️ Siva</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
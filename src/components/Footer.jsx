import React from "react";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="my-5 bg-gray-100 p-4">
      <div>
        <img src="footerlogo.webp" alt="" />
      </div>
      <div className="links flex justify-between mt-7">
        <div className="company">
          <h1 className="font-semibold text-xl">Company</h1>
          <ul className="mt-3 text-gray-500 text-sm">
            <li>About us</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Anti-discrimination policy</li>
            <li>UC impact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl">For customers</h1>
          <ul className="mt-3 text-gray-500 text-sm">
            <li>UC reviews</li>
            <li>Catergories near you</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl">For parterner</h1>
          <ul className="mt-3 text-gray-500 text-sm">
            <li>Register as a professional</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Social links</h1>
          <div className="flex gap-2">
            <div className="border-gray-700 border-2 rounded-full h-8 w-8 flex place-items-center bg-white">
              <RiTwitterLine className="w-5 h-5 mx-auto" />
            </div>
            <div className="border-gray-700 border-2 rounded-full h-8 w-8 flex place-items-center bg-white">
              <TiSocialFacebookCircular className="w-5 h-5 mx-auto" />
            </div>
            <div className="border-gray-700 border-2 rounded-full h-8 w-8 flex place-items-center bg-white">
              <FaInstagram className="w-5 h-5 mx-auto" />
            </div>
            <div className="border-gray-700 border-2 rounded-full h-8 w-8 flex place-items-center bg-white">
              <TiSocialLinkedinCircular className="w-5 h-5 mx-auto" />
            </div>
          </div>
          <div className="appstores"></div>
        </div>
      </div>
      <div className=" border-t border-gray-400 mt-3 pt-16">
        <span className="text-gray-500">
          © Copyright 2022 Urban Company. All rights reserved. | CIN:
          U74140DL2014PTC274413
        </span>
      </div>
    </div>
  );
};

export default Footer;

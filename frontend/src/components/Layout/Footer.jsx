import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us to get news{" "}
          <br />
          about events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAkCAMAAABCFAMdAAAA0lBMVEX///8iMVUAyJZYY3/Hy9Q5RmcvPV8pOFvm6Ozc3uTT1t2Ql6ny8/UKypri5OnEyNGHj6N7hJmepbU2RGWXnq+yuMQ/TGt0fZROWndeaYNpc4vs7fDW2d+Di59IVHKvtMG17+Dj+fNg3b3y/Pot0aia6dWM5s8czqFkb4ikqrm9wcxP2bbZ9++p7Ntr38LV7OiQtbhpqKZEcX9JkJBEeILL9OpBgoZMh4yx4dg5Z3dQnJk0X3JPpJzV4eMuVGpUuqhIwKgsSmU1yadZyLGLz8OtxcnfVLenAAAELElEQVRYhc2X22KjNhCGxdkGDNiAORnjxIkPeDdtt5u229O22/b9X6lohNBI4O1NE2duDDNC8zHzS8KEjO1+N+F8A3bRF3e3Zpiw/UXX9ftbU4wNuHR9PxF6tzs87m5Vy/0DcOm7UeT9kUUe3r0+leDSH9XARee2ONyQSwUTgdsIUJRlJ/nvMNfT63M9iuyS+O+Or8ZVme5s5NwvcLeCdOVFyTnsViPmUgUWRoalrYtkLnk3XrGm3kDOuiq3jp0vU3mKdJnb1opeuaXWWRwpbAeh72+Stdab8+1XuDYGH6YtfQGQDd7TRgz2HO5dh8Lb9pkqQsrhsdpHSYgQ0neasA8LxKWsidRBA9e8aK6FvFrCaY0pL/G4pyI1ipcoy35I/z0a8RFzvZe5zppkNquOyWitvC8FNInM1vLgiE3Ba9u1MmCTGFv4bUSaZ97HH65x7WSuFkYUbXfZwGw2bUAAXCWVSZXY9Nqlg2FA7IVVkGYiM9Rr3VT0OqED6NgNfYelyLOb4PrxK1wsFxdyzctQ4ved0xxrXtxTrxw37r0z4JqJGTz2lCPmHcAWHzEXwlo8K1whHXEebk+0ZF2VRPeobeityV4ilx9t+4K5vZPe1OzS9FqUCFq5+IC4fsZcPylcZNmNMMTtjCE0tCGmMAMKCfpBC7RkEDl+CVDG2ZT3HWpU/ItP17g+Rer4XJYoJEsAV7UTSeWX4Pc0WA1OpnrNKfCs1B704y9oul8lLs1SwdaoDdQSkGypjW1LVqJNQ3ljaLsjnPNhm7FMKdPh+PsVLgBWjwpLAVsBWKaNbQnaR+uMKRHwbOyt+b7oSGS/Ya7PmAsCIZHNUlpJm+iBhG1DMo/pB7fSnAQjxE/rHNLHaOuf24jrD8z1J7iUEw7AcjSnDfCQcnQOw8pA5S2vgIG1tvTK7jWuB8alqZK0ZGcGsmHSy0bJ6OLMhyrAdjECWxX95uPhxrvOf3BNtlJz+IYT0Ts6Md0vtKxnmGfFXKD016Sxp8CoDqPhHflSMRGX8wVxfRkKKdY1Auv2gmbum+xjZAv+gl7a9TlsvdPghP23SxyaZlr0Eypg8Gp565sZKkN7jeuvIbBVuyN9Q1CLmbR85bgmk94xWBWjWC/eFrmcv4fz8fj0jwD2psCwLofPHr9A3mFnr/BGQp9zVI2FYjabLZQUP9K5dk/3l8v94RkHHLWTbB9L+GSxhxZ4O6AZaCmGW+4tghy2j5ieCsIC/tiWffk2mAsfVTiQENUo2Jz4bZIZxkndS4IkK4wy2ched7UsSq/pWh4s6y65adTyzjKjA6JeX/hzL8Yf6TiQk5HFAPZytsIyCa4ErFEjXx6sEfouqiuBfPyX6uXBuqOTCdholcCs//vgrCafe3EwiuCac3/Cv0k8z2umIoSL/w1adxCPvtHehPlRNiW9/8v+BXphQyWnmOdyAAAAAElFTkSuQmCC"
            alt=""
            style={{ filter: "invert(1)" }}
            // style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>Your True Companion at NIT Raipur</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Undirected. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span>Contact: +91 70040 37716(Rohit Kumar)</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

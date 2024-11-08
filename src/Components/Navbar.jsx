import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { DropdownMenu } from "./DropdownMenu";
import { Button_Black } from "./Button";

import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {

  

  return (
    <nav className=" p-[15px] rounded-[10px] -border-border border-[1px] lg:w-[980px] w-[90%] flex justify-between fixed top-[20px] -bg-white z-50">
      <div className="flex gap-[25px] items-center md:justify-between">
        <div className="flex gap-[13px] -text-navbar">
          <a href="">
            <RiTwitterXLine />
          </a>
          <a href="">
            <IoLogoGithub />
          </a>
          <a href="">
            <FaWhatsapp />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
        <div className=" gap-[25px] text-[14px] font-medium -text-navbar hidden lg:flex md:flex">
          <Link to="/#about">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#work">Work</Link>
          <Link to="/#testimonials">Testimonials</Link>
        </div>
      </div>
      <Button_Black
        text={"Contact"}
        to={"/#contact"}
        className={"hidden lg:block md:block"}
      />
      <div className="lg:hidden md:hidden">
        <DropdownMenu />
      </div>
    </nav>
  );
};

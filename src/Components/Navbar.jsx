import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { DropdownMenu } from "./DropdownMenu";
import { Button_Black } from "./Button";

import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <nav className=" p-[15px] rounded-[10px] -border-border border-[1px] smd:w-[85%] md: lg:w-[980px] w-[90%] flex justify-between fixed top-[20px] -bg-white z-50 transition-all duration-300 ease">
      <div className="flex gap-[25px] items-center md:justify-between">
        <div className="flex gap-[13px] -text-navbar">
          <a href="https://x.com/rnya040903" target="_blank">
            <RiTwitterXLine />
          </a>
          <a href="https://github.com/rnyamakye" target="_blank">
            <IoLogoGithub />
          </a>
          <a href="https://wa.me/233257152860" target="_blank">
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-nyamekye-7b1380246/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className=" gap-[25px] text-[14px] font-medium -text-navbar hidden lg:flex md:flex">
          <Link smooth to="/#about">
            About
          </Link>
          <Link smooth to="/#services">
            Services
          </Link>
          <Link smooth to="/#work">
            Work
          </Link>
          <Link smooth to="/#testimonials">
            Testimonials
          </Link>
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

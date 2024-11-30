import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../App.css";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="">
      <button className="dropdown-container bg-slate-800 p-2 rounded-full ">
        <RxHamburgerMenu
          className="md:text-4xl lg:text-4xl sm:text-2xl"
          onClick={toggleDropdown}
          style={{ display: isOpen ? "none" : "block" }}
        />
        <IoClose
          className="md:text-4xl sm:text-2xl -text--white-100"
          onClick={closeDropdown}
          style={{ display: isOpen ? "block" : "none" }}
        />
        <div
          className={`dropdown-menu absolute mt-0 sm:w-full -right-[0%] justify-center sm:py-10 text-white text-center flex flex-col gap-5 my-4 duration-500 ease-in-out px-5 ${
            isOpen ? "active" : "inactive"
          }`}
          ref={menuRef}
        >
          <div className="relative -text-brown gap-3 text-white ">
            <Link
              smooth
              to="/#about"
              className="sm:block px-4 py-2 md:hidden hover:-text-black"
              onClick={closeDropdown}
            >
              About
            </Link>
            <Link
              smooth
              to="/#services"
              className="sm:block px-4 py-2 md:hidden hover:-text-black"
              onClick={closeDropdown}
            >
              Services
            </Link>
            <Link
              smooth
              to="/#work"
              className="sm:block px-4 py-2 md:hidden hover:-text-black"
              onClick={closeDropdown}
            >
              Work
            </Link>
            <Link
              smooth
              to="/#testimonials"
              className="sm:block px-4 py-2 md:hidden hover:-text-black"
              onClick={closeDropdown}
            >
              Testimonials
            </Link>
            <Link
              smooth
              to="/#contact"
              className="sm:block px-4 py-2 md:hidden hover:-text-black"
              onClick={closeDropdown}
            >
              Contact
            </Link>
          </div>
        </div>
      </button>
    </div>
  );
};

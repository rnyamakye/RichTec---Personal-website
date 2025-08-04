import { Button_Black } from "./Button";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

export const Popover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(null);
  const menuRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(true);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isPopoverOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isPopoverOpen]);

  return (
    <div>
      <div className="flex">
        <Button_Black
          text={"About Me "}
          arrow={<FaArrowRight />}
          onclick={togglePopover}
          className={`${isPopoverOpen ? "hidden" : "block"}`}
        />
        <Button_Black
          text={"About Me"}
          arrow={<FaArrowRight />}
          onclick={closePopover}
          className={`${isPopoverOpen ? "block" : "hidden"}`}
        />
      </div>

      <aside
        className={`popoverOverlay duration-100 ease-in-out ${
          isPopoverOpen ? "active" : "inactive"
        }`}
        ref={menuRef}
        onClick={closePopover}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={` popover fixed -bg-white rounded-[10px] left-0 top-[50px] md:top-[10%] md:left-[10%] lg:top-[5%] lg:left-[20%] w-[90%] md:w-[70%] md:rounded-[15px] mx-[5%] h-fit md:h-[500px] lg:w-[650px] lg:h-[500px] py-[40px] px-[20px] lg:px-[30px] lg:-translate-x-1/2 lg:-translate-y-1/2 opacity-100 transition-all duration-500 ease-in-out flex flex-col lg:flex-row md:flex-row gap-[30px] z-[100] ${
            isPopoverOpen ? "active " : "inactive"
          }`}
        >
          <div className="flex flex-row lg:flex-col md:flex-col gap-[20px] justify-between lg:gap-[100px]">
            <div className=" flex flex-col gap-[20px] lg:gap-[20px]">
              <img
                src="/Cover-Image_colored.jpg"
                alt="cover-image-colored"
                loading="lazy"
                decoding="async"
                className=" w-full lg:w-[200px]  lg:h-[200px] object-cover rounded-[8px] lg:rounded-[20px] object-top"
              />
              <div className="flex gap-[10px] -text-brown text-[15px] lg:text-[24px]">
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
            </div>
            <div className="">
              <span className="flex items-center gap-[10px] ">
                <BsTelephone className="text-[13px] font-bold" />
                <p className="opacity-50 text-[13px]">+233257152860</p>
              </span>
              <span className="flex items-center gap-[10px]">
                <LiaTelegram className="text-[14px]" />
                <p className="opacity-50 text-[14px]">rnyamekye32@gmail.com</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[25px] lg:text-[32px] font-semibold">
              About Me
            </h1>
            <p className="overflow-y-auto h-[300px] md:h-[350px]">
              Hello, my name is Richard Nyamekye and I am a web developer. I am
              a creative and detail-oriented individual with a passion for
              creating visually stunning and user-friendly websites. With
              several years of experience in the industry, I have developed a
              strong skill set in website design, development, and maintenance.
              I am committed to staying up-to-date with the latest design trends
              and technologies to ensure that my clients receive the highest
              quality websites that meet their unique needs and goals. In my
              free time, I enjoy exploring new design tools and techniques.
            </p>
          </div>
          <button
            className="absolute top-[10px] right-[15px]"
            onClick={closePopover}
          >
            <IoMdClose className="size-[20px]" />
          </button>
        </div>
      </aside>
    </div>
  );
};

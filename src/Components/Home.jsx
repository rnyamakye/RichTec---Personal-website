import { useState, useRef, useEffect } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ServicesTabs } from "./ServicesTabs";
import "../App.css";
import { Carousel } from "./Carousel";
import { Form } from "./Form";
import { FaArrowRight } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { Popover } from "./popover";
import "../App.css";

import { Button_Black, Button_White } from "./Button";

export default function Home() {
  return (
    <main className="mt-[170px] lg:mt-[170px] flex flex-col gap-[120px] items-center z-10">
      <header className=" w-[90%] lg:w-[1080px] lg:h-fit h-[800px] " id="about">
        <div className="flex flex-col gap-[120px] lg:gap-[70px] lg:flex-row items-center">
          <div className="flex-col flex gap-[10px] lg:w-1/2 lg:gap-[20px] lg:leading-7">
            <h2 className="-text-brown font-medium">Hello there 👋</h2>
            <h1 className="text-[34px] font-[500] lg:leading-snug">
              This is Richard, A Web Designer{" "}
              <span className="-text-brown">
                with Creative Expertise & Years of Experience.
              </span>
            </h1>
            <p className="text-[15px]">
              I'm a passionate web designer with years of experience in creating
              clean, user-friendly designs. I'm committed to delivering
              high-quality work that meets the unique needs of each client.
              Let's work together to bring your vision to life in no time.
            </p>
            <div className="flex gap-[10px]">
              <Popover />
              <Button_White
                text={"See My Work"}
                to={"/#work"}
                arrow={<FaArrowRight />}
              />
            </div>
          </div>
          <div className="">
            <div className="relative lg:translate-x-[30px] translate-y-[20px] lg:w-[400px] w-[380px] h-[380px] -bg-black rounded-full lg:h-[400px] lg:top-[30px]">
              <img
                src="/Cover-image-png.png"
                alt="cover-image"
                className="w-[280px] h-[472px] lg:h-[500px] object-cover lg:w-[300px] relative -top-[92px] -right-[28px] lg:-right-[25px] lg:-top-[105px]  rounded-b-full lg:-rotate-[6deg] -rotate-[6deg] "
              />
            </div>
          </div>
        </div>
      </header>
      <div className="border-b-[1px] pt-[100px] lg:pt-0 -border-border shadow-customShadow w-full"></div>
      <section
        className=" w-[90%] lg:w-[1080px] flex flex-col gap-[15px] lg:gap-[50px]"
        id="services"
      >
        <div className="text-center gap-[10px] flex flex-col">
          <h1 className="text-[32px] lg:text-[50px]">My Services</h1>
          <h2 className="text-[15px] -text-brown lg:text-[20px]">
            Check Out All Services below then Click the Get Started Button to
            Proceed.
          </h2>
        </div>
        <div>
          <ServicesTabs />
        </div>
      </section>
      <div className="border-b-[1px]  -border-border shadow-customShadow w-full"></div>
      <section id="work" className="w-[90%] lg:w-[1080px] ">
        <div className="flex flex-col gap-[30px] lg:gap-[50px]">
          <div className="text-center flex flex-col gap-[10px] ">
            <h1 className="text-[30px] lg:text-[50px]">My Work</h1>
            <h2 className="text-[15px] -text-brown lg:text-[20px] ">
              Check Out a Collection of Projects I've Worked On
            </h2>
          </div>
          <div className="relative">
            <ProjectCard />
          </div>
        </div>
      </section>
      <div className="border-b-[1px]  -border-border shadow-customShadow w-full"></div>
      <section className="w-[90%] lg:w-[1080px]" id="testimonials">
        <div className="flex-col flex gap-[40px]">
          <div className="text-center flex-col flex gap-[10px] items-center">
            <h1 className="text-[30px] lg:text-[50px]">Happy Client</h1>
            <h2 className="text-[15px] -text-brown lg:text-[20px] lg:w-[45%]">
              Here's what my satisfied Clients have to say about their
              experience working with me!
            </h2>
          </div>
          <Carousel />
        </div>
      </section>
      <div className="border-b-[1px]  -border-border shadow-customShadow w-full"></div>
      <footer
        className="w-[90%] lg:w-[1080px] flex flex-col gap-[50px] lg:gap-[100px] items-center mb-[50px]"
        id="contact"
      >
        <div className=" justify-center items-center flex-col flex  md:flex-row lg:flex-row gap-[30px] lg:gap-[40px] md:gap-[30px]">
          <div className="w-full lg:w-[480px] md:w-1/3">
            <img
              src="/Cover-Image_colored.jpg"
              alt="cover-image-colored"
              className="h-[351px] w-full lg:w-full lg:h-[600px] md:w-full md:h-[500px] object-cover rounded-[8px] object-top"
            />
          </div>
          <div className="flex flex-col lg:w-2/3 gap-[30px] lg:gap-[30px]">
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[35px] lg:text-[50px] lg:font-medium">
                Work With Me!
              </h1>
              <h2 className="text-[16px] lg:text-[18px]">
                Let's Connect and Discuss your Web Design Project Today!
              </h2>
            </div>
            <div className="flex-col flex gap-[30px]">
              <div className="flex gap-[13px] -text-brown text-[24px] lg:text-[24px]">
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
              <Form />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start lg:px-[20px] w-full">
          <p className="text-[12px]">© 2024 - Designed by Richard Nyamekye</p>
        </div>
      </footer>
    </main>
  );
}
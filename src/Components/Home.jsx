import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ServicesTabs } from "./ServicesTabs";
import "../App.css";
import { Carousel } from "./Carousel";
import { Form } from "./Form";
import ProjectCard from "./ProjectCard";
import { Button_Black, Button_White } from "./Button";

export default function Home() {
  return (
    <main className="pt-[100px] flex flex-col items-center">
      <header className="pt-[70px] w-[90%] flex flex-col gap-[20px]" id="about">
        <div className="flex-col flex gap-[10px]">
          <h2 className="-text-brown font-medium">Hello there 👋</h2>
          <h1 className="text-[34px] font-[500] leading-10">
            This is Richard, A Web Designer with Creative Expertise & Years of
            Experience.
          </h1>
          <p className="text-[15px]">
            I'm a passionate web designer with years of experience in creating
            clean, user-friendly designs. I'm committed to delivering
            high-quality work that meets the unique needs of each client. Let's
            work together to bring your vision to life in no time.
          </p>
          <div className="flex gap-[10px]">
            <Button_Black text={"About Me"} />
            <Button_White text={"See My Work"} />
          </div>
        </div>
        <div className="h-[538px]">
          <img
            src="/Cover-Image.jpg"
            alt="cover-image"
            className="h-[500px] object-cover w-[102%]"
          />
        </div>
      </header>
      <section className=" w-[90%] h-[800px] flex flex-col gap-[15px] -border-b-border border-b ">
        <div className="text-center gap-[10px] flex flex-col">
          <h1 className="text-[32px]">My Services</h1>
          <h2 className="text-[15px] -text-brown">
            Check Out All Services below then Click the Get Started Button to
            Proceed.
          </h2>
        </div>
        <div>
          <ServicesTabs />
        </div>
      </section>
      <section
        id="work"
        className="w-[90%] py-[60px] -border-b-border border-b"
      >
        <div>
          <div className="text-center flex flex-col gap-[10px] ">
            <h1 className="text-[30px] ">My Work</h1>
            <h2 className="text-[15px] -text-brown">
              Check Out a Collection of Projects I've Worked On
            </h2>
          </div>
          <div className="relative">
            <ProjectCard />
          </div>
        </div>
      </section>
      <section className="w-[90%] py-[60px] -border-b-border border-b">
        <div className="flex-col flex gap-[40px]">
          <div className="text-center flex-col flex gap-[10px]">
            <h1 className="text-[30px]">Happy Client</h1>
            <h2 className="text-[15px] -text-brown">
              Here's what my satisfied Clients have to say about their
              experience working with me!
            </h2>
          </div>
          <Carousel />
        </div>
      </section>
      <footer className="w-[90%] py-[60px] -border-b-border border-b flex-col flex gap-[20px]">
        <div>
          <img
            src="/Cover-Image_colored.jpg"
            alt="cover-image-colored"
            className="h-[351px] w-full object-cover rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <div>
            <h1 className="text-[35px]">Work With Me!</h1>
            <h2 className="text-[16px]">
              Let's Connect and Discuss your Web Design Project Today!
            </h2>
          </div>
          <div className="flex-col flex gap-[30px]">
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
            <Form />
          </div>
        </div>
        <p className="text-[12px]">© 2024 - Designed by Richard Nyamekye</p>
      </footer>
    </main>
  );
}

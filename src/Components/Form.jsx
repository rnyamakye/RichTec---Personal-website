import { Button_Black } from "./Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x2u2tri", "template_atwkta1", form.current, {
        publicKey: "Q9Oc4bdc8IbQl5xEZ",
      })
      .then(
        () => {
          setSuccessMessage(alert("Your message has been sent successfully!"));
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage(
            alert("Failed to send your message. Please try again.")
          );
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      action=""
      className="flex flex-col text-[15px] lg:text-[18px] gap-[15px] lg:gap-[20px]"
    >
      <div className="flex gap-[10px] lg:gap-[15px]">
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className="-bg-tabs p-[15px] w-1/2 shadow-customShadow rounded-[8px] lg:rounded-[10px]"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className="-bg-tabs p-[15px] w-1/2 rounded-[8px] shadow-customShadow lg:rounded-[10px]"
        />
      </div>
      <textarea
        name="message"
        id=""
        placeholder="Message"
        className="-bg-tabs p-[15px] w-full h-[200px] rounded-[8px]"
      ></textarea>
      <button
        type="submit"
        value="Send"
        className={
          "w-full lg:w-full lg:p-5 lg:text-[18px] justify-center px-[20px] py-[12px] -bg-black -text-white rounded-[8px] text-[15px] shadow-customShadow font-semibold flex gap-[5px] items-center hover:opacity-80 transition-all duration-300 ease-in-out"
        }
      >
        {" "}
        Send Message
      </button>
    </form>
  );
};

import { Button_Black } from "./Button";

export const Form = () => {
  return (
    <form action="" className="flex flex-col gap-[10px]">
      <div className="flex gap-[10px]">
        <input
          type="text"
          placeholder="Name"
          className="-bg-tabs p-[15px] w-1/2 rounded-[8px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="-bg-tabs p-[15px] w-1/2 rounded-[8px]"
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Message"
        className="-bg-tabs p-[15px] w-full h-[200px] rounded-[8px]"
      ></textarea>
      <Button_Black text={"Send Message"} />
    </form>
  );
};

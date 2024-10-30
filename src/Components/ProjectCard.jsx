export const ProjectCard = () => {
  const projects = [
    {
      title: "Health-conscious Parent",
      description:
        "Amet minim molit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis enim velit. Exercitation veniam consequat",
      date: "",
      type: "",
    },
  ];
  return (
    <div className="relative group overflow-hidden">
      <img
        src="/Cover-Image.jpg"
        alt="Project Cover"
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 -bg-black/0 transition-all duration-300 ease-in-out hover:bg-[linear-gradient(to_bottom,_rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.9))]">
        <div className="absolute inset-0 -bg-black/10 transition-all duration-300 group-hover:opacity-50 transform origin-bottom scale-y-0  group-hover:scale-y-50 "></div>
      </div>
    </div>
  );
};

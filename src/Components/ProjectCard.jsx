import { TbCalendar } from "react-icons/tb";
import { BsTag } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const projects = [
    {
      title: "Event Website",
      description:
        "An event website is a platform designed to promote and manage events such as conferences, seminars, and more",
      date: "Oct 30, 2024",
      type: "Web Design",
      image: "/event-website-image.jpg",
    },
    {
      title: "Membership Website",
      description:
        "An event website is a platform designed to promote and manage events such as conferences, seminars, and more",
      date: "Oct 30, 2024",
      type: "Web Design",
      image: "/Membership-website-image.jpg",
    },
    {
      title: "NonProfit Website",
      description:
        "An event website is a platform designed to promote and manage events such as conferences, seminars, and more",
      date: "Oct 30, 2024",
      type: "Web Design",
      image: "/nonProfit-website-image.jpg",
    },
    {
      title: "Blog Website",
      description:
        "An event website is a platform designed to promote and manage events such as conferences, seminars, and more",
      date: "Oct 30, 2024",
      type: "Web Design",
      image: "/blog-image.jpg",
    },
    {
      title: "E-commerce Website",
      description:
        "An event website is a platform designed to promote and manage events such as conferences, seminars, and more",
      date: "Oct 30, 2024",
      type: "Web Design",
      image: "/ecommerce-image.jpg",
      link: "https://ecommerce-tutorial-38m7.vercel.app/"
    },
    {
      title: "Agency Website",
      description:
        "An event website is a platform designed to promote and manage events such as conferences, seminars, and more",
      date: "Oct 30, 2024",
      type: "Web Design",
      image: "/Agency-image.jpg",
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-[20px]">
        {projects.map((project, index) => (
          <Link target="_blank" to={project.link} key={index} className="relative group overflow-hidden">
            <img
              src={project.image}
              alt={project.image}
              className="h-[300px] md:h-[400px] w-full lg:h-[380px] lg:rounded-[15px] object-cover rounded-[8px]"
            />
            <div className="absolute inset-0 -bg-black/20 transition-all duration-300 ease-in-out hover:bg-[linear-gradient(to_bottom,_rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_01))] rounded-[8px]">
              <div className="absolute h-1/2 w-full bottom-0 transition-all duration-200 transform origin-bottom  group-hover:scale-y-100 object-cover text-opacity-100 px-[20px] -text-white flex flex-col justify-center ">
                <h1 className=" text-[30px] absolute bottom-[20px] group-hover:bottom-[105px] transition-all duration-500 ease-in-out">
                  {project.title}
                </h1>
                <div className="absolute bottom-0 group-hover:bottom-[20px] transition-all duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-[1] text-opacity-100 -text-white flex flex-col gap-[10px]">
                  <p className="text-[15px] font-thin leading-tight">
                    {project.description}
                  </p>
                  <div className="flex gap-[10px]">
                    <div className="flex gap-[5px]">
                      <TbCalendar />
                      <p className="text-[12px]">{project.date}</p>
                    </div>
                    <div className="flex gap-[5px]">
                      <BsTag /> <p className="text-[12px]">{project.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

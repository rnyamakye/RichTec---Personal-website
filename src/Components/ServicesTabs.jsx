import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { Button_Tab } from "./Button";
import { BsVectorPen } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { FiCloud } from "react-icons/fi";

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      heading: "Web Design",
      icon: <CgWebsite />,
      content:
        "Sleek, modern web designs that captivate and engage your audience.",
      imageUrl: "/Wed-design.jpg",
    },
    {
      id: 2,
      heading: "Logo Design",
      icon: <BsVectorPen />,
      content:
        "Unique, memorable logos that define your brand with lasting impact.",
      imageUrl: "/logo-design.jpg",
    },
    {
      id: 3,
      heading: "Website Maintenance",
      icon: <FiServer />,
      content:
        "Reliable website maintenance to keep your online presence updated and secure.",
      imageUrl: "/web-maintenance.jpg",
    },
    {
      id: 4,
      heading: "Website Hosting",
      icon: <FiCloud />,
      content: "Fast, secure website hosting for a seamless online experience.",
      imageUrl: "/web-hosting.jpg",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(activeTab === id ? id : id);
  };

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[30px] md:flex-col w-full items-center lg:flex-row">
      <div className="flex flex-col gap-[10px] relative md:w-[90%]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`services-tabs rounded-[8px] border-[1px] -border-border shadow-customShadow p-[15px] -bg-tabs gap-[10px] flex flex-col cursor-pointer duration-500 z-10 ${
              activeTab === tab.id ? "active" : "inactive"
            } border-tabs-border`}
            onClick={() => handleTabClick(tab.id)}
          >
            <h1
              className={`text-[18px] flex items-center gap-[10px] ${
                activeTab === tab.id ? "active" : "inactive"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.heading}
            </h1>
            <div className="flex">
              {activeTab === tab.id && (
                <div
                  className={`-bg-black -text-white text-[15px] gap-[15px] flex flex-col z-0`}
                >
                  <p>{tab.content}</p>
                  <Button_Tab text={"Get Started"} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="md:w-[90%] w-full lg:w-1/2 flex items-start">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className=" w-full lg:w-full h-[250px] rounded-[10px]"
              >
                <img
                  src={tab.imageUrl}
                  alt={`Image for ${tab.heading}`}
                  className="w-full h-full lg:w-full lg:h-[400px] md-full md:h-[400px] object-cover rounded-[15px]"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

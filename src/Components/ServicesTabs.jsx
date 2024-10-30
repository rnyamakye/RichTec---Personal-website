import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { Button_Tab } from "./Button";
import { BsVectorPen } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { CiCloud } from "react-icons/ci";

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

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
      icon: <CiCloud />,
      content: "Fast, secure website hosting for a seamless online experience.",
      imageUrl: "/web-hosting.jpg",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-[10px] relative">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`services-tabs rounded-[8px] border-[1px] -border-border shadow-customShadow p-[15px] -bg-tabs gap-[10px] flex flex-col cursor-pointer duration-500 z-10 ${
            activeTab === tab.id ? "active" : "inactive"
          } border-tabs-border`}
          onClick={() => handleTabClick(tab.id)}
        >
          <h1
            className={` text-[18px] flex items-center gap-[10px]  ${
              activeTab === tab.id ? "active" : "inactive"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.heading}
          </h1>
          {activeTab === tab.id && (
            <div
              className={`-bg-black -text-white text-[15px] gap-[15px] flex flex-col z-0 
              }`}
            >
              <p className="">{tab.content}</p>
              <Button_Tab text={"Get Started"} />
              <img
                src={tab.imageUrl}
                alt={`Image for ${tab.heading}`}
                className="absolute -bottom-[230px] w-[100%] left-0 h-[200px] object-cover rounded-[10px]"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

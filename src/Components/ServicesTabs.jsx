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
    <div className="flex flex-col gap-[20px] lg:gap-[30px] md:gap-[30px] md:flex-row w-full items-center lg:items-start lg:flex-row ">
      <div className="flex flex-col lg:w-[70%] gap-[10px] md:gap-[20px] relative md:w-[90%]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`services-tabs rounded-[8px] border-[1px] -border-border shadow-customShadow p-[15px] md:p-[20px] -bg-tabs gap-[10px] flex flex-col cursor-pointer duration-500 ${
              activeTab === tab.id ? "active" : "inactive"
            } border-tabs-border`}
            onClick={() => handleTabClick(tab.id)}
          >
            <h1
              className={`text-[18px] flex items-center gap-[10px]  ${
                activeTab === tab.id ? "active" : "inactive"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.heading}
            </h1>
            <div className="flex">
              {activeTab === tab.id && (
                <div
                  className={`-bg-black -text-white text-[15px] gap-[15px] md:gap-[20px] lg:gap-[20px] flex flex-col`}
                >
                  <p className="w-[90%]">{tab.content}</p>
                  <Button_Tab text={"Get Started"} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="md:w-[100%] w-full md:h-[450px] lg:w-full flex  items-start lg:h-[50px]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className=" w-full lg:w-full h-[250px] lg:h-[full] rounded-[10px] md:h-full "
              >
                <img
                  src={tab.imageUrl}
                  alt={`Image for ${tab.heading}`}
                  className="w-full h-full lg:w-full lg:h-[450px] md:h-full object-cover rounded-[15px]"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

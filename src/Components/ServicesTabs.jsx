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
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[30px] md:gap-[30px] md:flex-row w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 items-center lg:items-start">
      {/* Hidden images for preloading */}
      <div className="hidden">
        {tabs.map((tab) => (
          <img
            key={`preload-${tab.id}`}
            src={tab.imageUrl}
            alt=""
            loading="eager"
            decoding="async"
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 gap-[10px] md:gap-[20px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`services-tabs rounded-[8px] border-[1px] shadow-customShadow ${
              activeTab === tab.id
                ? "p-[8px] md:p-[12px] gap-[3px] active"
                : "p-[12px] md:p-[15px] gap-[5px] inactive"
            } flex flex-col cursor-pointer duration-500 border-tabs-border`}
            onClick={() => handleTabClick(tab.id)}
          >
            <h1
              className={`${
                activeTab === tab.id ? "text-[18px]" : "text-[16px]"
              } flex items-center gap-[10px] ${
                activeTab === tab.id ? "active" : "inactive"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.heading}
            </h1>
            {activeTab === tab.id && (
              <p className="text-[15px] max-w-md">{tab.content}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex-1 h-[250px] md:h-[450px] lg:h-[450px] flex items-start">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="w-full h-full rounded-[10px] overflow-hidden relative group"
              >
                <img
                  src={tab.imageUrl}
                  alt={`Image for ${tab.heading}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[15px]"
                />
                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] flex items-center justify-center">
                  <Button_Tab text={"Get Started"} />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

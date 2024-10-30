import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const cards = [
    {
      name: "Samuel Greene",
      title: "Health-conscious Parent",
      src: "/client-1.jpg",
      review:
        "'Amet minim molit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis enim velit. Exercitation veniam consequat'",
    },
    {
      name: "David Fletcher",
      title: "Organic Food Enthusiast",
      src: "/public/client-1.jpg",
      review:
        "'Amet minim molit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis enim velit. Exercitation veniam consequat'",
    },
    {
      name: "Sophia Barnes",
      title: "Professional Chef and Culinary Expert",
      src: "/client-2.jpg",
      review:
        "'Amet minim molit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis enim velit. Exercitation veniam consequat'",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === cards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="overflow-x-hidden flex-col flex gap-5">
        <div className={`flex flex-col gap-8`}>
          <div
            className={`flex gap-5 transition-transform duration-300 ease-in-out`}
            style={{
              transform: `translateX(-${
                currentIndex * (viewportWidth <= 600 ? 100 : 50)
              }%)`,
              scrollSnapType: "x mandatory",
              // overflowX: "auto",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="-bg--lime-green border -border-border shadow-customShadow flex-col flex gap-5 p-7 rounded-2xl flex-shrink-0 w-[95%] lg:w-[500px] lg:h-[350px] md:w-[500px] md:h-[350px] lg:p-16 smd:p-16 md:p-16 -text--green-900"
                style={{
                  scrollSnapAlign: "start",
                }}
              >
                <p className="text-[18px]">{card.review}</p>
                <div className="flex gap-3 ">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="size-[60px] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{card.name}</p>
                    <p>{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 -text--white-100">
          <button
            className="-text-white -bg-black w-[40px] h-[40px] rounded-full -bg--green-700 flex justify-center items-center"
            onClick={goToPrevious}
          >
            <FaChevronLeft />
          </button>
          <button
            className="-bg-black -text-white w-[40px] h-[40px] rounded-full -bg--green-700 flex justify-center items-center"
            onClick={goToNext}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

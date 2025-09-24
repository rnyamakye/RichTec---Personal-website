import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const cards = [
    {
      name: "Emmanuel",
      title: "Pencil artist",
      src: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d210eed2c8fc3419da3dabab82686ff6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d2c6278b&x-expires=1758895200&x-signature=Q2TjuaCFt1oNR1Fyjtp6q9C8eWM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
      review:
        "Working with Richard was a game-changer for my business. He took my vision and transformed it into a stunning website that not only looks great but also functions seamlessly.",
      rating: 5, // Default rating
    },

    {
      name: "The great Abanga Foundation",
      title: "Non-Profit Organization",
      src: "https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-1/527520708_1235720798572941_4166336557709576708_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=bySbug9tbH8Q7kNvwE2s2bf&_nc_oc=AdknpfzjWO7uWt71cphEpDhvL3xmrBuLE-fC4YyuuRzNIn4i1A_CHYUNdCP9c3HcXXQ&_nc_zt=24&_nc_ht=scontent.facc5-1.fna&_nc_gid=unl7SA7F_2bIMjXbC9RSXw&oh=00_Afbd4l_z_aoRKT_JbMBwZFwqLJpPjCCgytFY7iYbeMOFTg&oe=68D9DAE7",
      review:
        "Richard's work for my business exceeded my expectations in every way. He not only delivered a beautiful website but also provided insightful advice on content strategy and SEO best practices.",
      rating: 5, // Default rating
    },
    // {
    //   name: "Sophia Barnes",
    //   title: "Professional Chef and Culinary Expert",
    //   src: "/client-2.jpg",
    //   review:
    //     "'Richard's work for my business exceeded my expectations in every way. He not only delivered a beautiful website but also provided insightful advice on content strategy and SEO best practices.'",
    //   rating: 4, // Default rating
    // },
    // {
    //   name: "Sophia Barnes",
    //   title: "Professional Chef and Culinary Expert",
    //   src: "/client-2.jpg",
    //   review:
    //     "'Richard's work for my business exceeded my expectations in every way. He not only delivered a beautiful website but also provided insightful advice on content strategy and SEO best practices.'",
    //   rating: 4, // Default rating
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [reviews, setReviews] = useState(cards); // State to manage reviews and ratings

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
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

  const handleRatingChange = (index, newRating) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].rating = newRating;
    setReviews(updatedReviews);
  };

  return (
    <div>
      <div className="relative flex flex-col gap-5 px-4 mx-auto overflow-hidden max-w-7xl md:px-6 lg:px-8">
        <div className={`flex flex-col gap-8 `}>
          <div
            className={`flex gap-5 md:gap-3 lg:gap-8 px-2 transition-transform duration-300 ease-in-out`}
            style={{
              transform: `translateX(-${
                currentIndex *
                (viewportWidth <= 480 ? 100 : viewportWidth <= 768 ? 70 : 40)
              }%)`,
              scrollSnapType: "x mandatory",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="-bg--lime-green border -border-border shadow-customShadow flex-col flex gap-5 p-7 rounded-2xl flex-shrink-0 w-[99%] h-[300px] lg:w-[500px] lg:h-[350px] smd:w-[400px] md:w-[350px] md:h-[380px] md:p-10"
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div className="flex gap-3 ">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="size-[60px] rounded-full object-cover"
                  />
                  <div>
                    <p className="md:text-[18px] text-[15px]">{card.name}</p>
                    <p className="md:text-[13px] text-[12px] opacity-50">
                      {card.title}
                    </p>
                  </div>
                </div>
                <p className="md:text-[15px] text-[12px]">{card.review}</p>

                <div className="absolute flex justify-start mt-2 bottom-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => handleRatingChange(index, star)}
                      className={`w-3 h-3 cursor-pointer ${
                        star <= card.rating
                          ? "-text-brown opacity-50"
                          : "-text-tabs"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.634l-6 5.848L19.335 24 12 20.896 4.665 24l1.335-8.518L0 9.634l7.332-.479z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-0 space-x-1">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "-bg-tabs" : "-bg-brown"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-5 -text-white ">
          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              className="-text-white -bg-black/20 w-[26px] h-[26px] rounded-full -bg--green-700 flex justify-center items-center absolute bottom-[50%] z-10"
              onClick={goToPrevious}
            >
              <FaChevronLeft />
            </button>
          )}
          {/* Next Button */}
          {currentIndex < reviews.length - 1 && (
            <button
              className="-bg-black/20 -text-white w-[26px] h-[26px] rounded-full -bg--green-700 flex justify-center items-center z-10 absolute bottom-[50%] right-0 "
              onClick={goToNext}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

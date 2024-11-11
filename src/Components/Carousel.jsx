import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const cards = [
    {
      name: "Emmanuel",
      title: "Pencil artist",
      src: "/client-1.jpg",
      review:
        "'Working with Richard was a game-changer for my business. He took my vision and transformed it into a stunning website that not only looks great but also functions seamlessly.'",
      rating: 5, // Default rating
    },
    {
      name: "David Fletcher",
      title: "Organic Food Enthusiast",
      src: "/client-1.jpg",
      review:
        "'I was impressed with how quickly Richard understood my business needs and delivered a tailored solution.'",
      rating: 5, // Default rating
    },
    {
      name: "Sophia Barnes",
      title: "Professional Chef and Culinary Expert",
      src: "/client-2.jpg",
      review:
        "'Richard's work for my business exceeded my expectations in every way. He not only delivered a beautiful website but also provided insightful advice on content strategy and SEO best practices.'",
      rating: 4, // Default rating
    },
    {
      name: "Sophia Barnes",
      title: "Professional Chef and Culinary Expert",
      src: "/client-2.jpg",
      review:
        "'Richard's work for my business exceeded my expectations in every way. He not only delivered a beautiful website but also provided insightful advice on content strategy and SEO best practices.'",
      rating: 4, // Default rating
    },
    {
      name: "Sophia Barnes",
      title: "Professional Chef and Culinary Expert",
      src: "/client-2.jpg",
      review:
        "'Richard's work for my business exceeded my expectations in every way. He not only delivered a beautiful website but also provided insightful advice on content strategy and SEO best practices.'",
      rating: 4, // Default rating
    },
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
      <div className="overflow-hidden flex-col flex gap-5 relative">
        <div className={`flex flex-col gap-8 `}>
          <div
            className={`flex gap-5 md:gap-3 lg:gap-8 px-2 transition-transform duration-300 ease-in-out`}
            style={{
              transform: `translateX(-${
                currentIndex *
                (viewportWidth <= 480 ? 100 : viewportWidth <= 768 ? 70 : 49)
              }%)`,
              scrollSnapType: "x mandatory",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="-bg--lime-green border -border-border shadow-customShadow flex-col flex gap-5 p-7 rounded-2xl flex-shrink-0 w-[99%] lg:w-[500px] lg:h-[350px] smd:w-[400px] md:w-[350px] md:h-[350px] lg:p-16 smd:p-16 md:p-16"
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
                    <p className="text-[18px]">{card.name}</p>
                    <p className="text-[13px] opacity-50">{card.title}</p>
                  </div>
                </div>
                <p className="text-[15px]">{card.review}</p>

                <div className="flex justify-start mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => handleRatingChange(index, star)}
                      className={`w-3 h-3 cursor-pointer ${
                        star <= card.rating ? "-text-tabs" : "text-gray-300"
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

        <div className="flex justify-center space-x-2 mt-4">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "-bg-brown"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-5 -text--white-100">
          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              className="-text-white -bg-black w-[30px] h-[30px] rounded-full -bg--green-700 flex justify-center items-center absolute bottom-[200px] -left-[px] z-10"
              onClick={goToPrevious}
            >
              <FaChevronLeft />
            </button>
          )}
          {/* Next Button */}
          {currentIndex < reviews.length - 1 && (
            <button
              className="-bg-black -text-white w-[30px] h-[30px] rounded-full -bg--green-700 flex justify-center items-center z-10 absolute right-0 bottom-[200px]"
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

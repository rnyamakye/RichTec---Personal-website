import { useState } from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  placeholder = "/placeholder.jpg",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !hasError && (
        <div className={`${className} bg-gray-200 animate-pulse`} />
      )}
      <img
        src={hasError ? placeholder : src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;

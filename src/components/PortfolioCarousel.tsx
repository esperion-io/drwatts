import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface PortfolioCarouselProps {
  images: PortfolioImage[];
  autoPlayInterval?: number;
  className?: string;
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  images,
  autoPlayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, images.length, autoPlayInterval]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, isAutoPlaying]);

  // Image loading optimization
  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  }, []);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
      img.onload = () => handleImageLoad(src);
    };

    // Preload current, next, and previous images
    const indicesToPreload = [
      currentIndex,
      (currentIndex + 1) % images.length,
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    ];

    indicesToPreload.forEach(index => {
      if (images[index] && !loadedImages.has(images[index].src)) {
        preloadImage(images[index].src);
      }
    });
  }, [currentIndex, images, loadedImages, handleImageLoad]);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-2xl p-8 flex items-center justify-center h-96">
        <p className="text-blue-700">No portfolio images available</p>
      </div>
    );
  }

  return (
    <div 
      className={`relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-2xl overflow-hidden h-96 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Portfolio image carousel"
      tabIndex={0}
    >
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        aria-live="polite"
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="w-full h-full flex-shrink-0 relative"
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                loadedImages.has(image.src) ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index === currentIndex ? 'eager' : 'lazy'}
              onLoad={() => handleImageLoad(image.src)}
            />
            
            {/* Image overlay with title and description */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </div>
            
            {/* Loading placeholder */}
            {!loadedImages.has(image.src) && (
              <div className="absolute inset-0 bg-blue-200 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 ${
                index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}

      {/* Auto-play control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        type="button"
      >
        {isAutoPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </button>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Image {currentIndex + 1} of {images.length}: {images[currentIndex]?.title}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
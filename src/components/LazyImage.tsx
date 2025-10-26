import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=='
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef && loading === 'lazy') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.01
        }
      );
      
      observer.observe(imageRef);
    } else {
      setImageSrc(src);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef!);
      }
    };
  }, [imageRef, src, loading]);

  useEffect(() => {
    setImageRef(imgRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={() => {
        setImageSrc(placeholder);
      }}
    />
  );
};

export default LazyImage;
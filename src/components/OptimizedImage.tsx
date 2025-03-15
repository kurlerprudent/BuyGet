// components/OptimizedImage.tsx
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width, height, className }) => {
  const [isWebpSupported, setIsWebpSupported] = useState(false);

  useEffect(() => {
    const checkWebpSupport = async () => {
      if (typeof window !== 'undefined') {
        const webpSupport = await new Promise<boolean>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve(img.width > 0 && img.height > 0);
          img.onerror = () => resolve(false);
          img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAWAAwP3FxY0QAA/v/ANSWjbQAAAAAA';
        });
        setIsWebpSupported(webpSupport);
      }
    };

    checkWebpSupport();
  }, []);

  const webpSrc = isWebpSupported ? src.replace(/\.(png|jpg|jpeg)$/, '.webp') : src;

  return (
    <Image
      src={webpSrc}
      alt={alt}
      width={width}
      height={height}
      style={{maxWidth: '100%', height: 'auto'}} // Add this line
      className={className}
      loading="lazy"
    />
  );
};

export default OptimizedImage;
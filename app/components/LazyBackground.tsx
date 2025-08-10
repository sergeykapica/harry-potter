"use client";

import { useEffect, useRef, useState } from "react";

interface LazyBackgroundProps {
  src: string;
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LazyBackground({
  src,
  placeholder = "",
  className = "",
  children,
}: LazyBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Загружаем картинку в памяти и ждём её загрузки
  useEffect(() => {
    if (shouldLoad && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [shouldLoad, src]);

  return (
    <div ref={ref} className={`${className} relative overflow-hidden`}>
      {/* placeholder */}
      {placeholder && (
        <div
          className={`absolute inset-0 blur-lg scale-105 transition-opacity duration-500 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* основное изображение */}
      {shouldLoad && (
        <div
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat bg-top-[20px] transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      )}

      {/* контент */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
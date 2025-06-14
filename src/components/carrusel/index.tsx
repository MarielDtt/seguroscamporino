"use client"
import Image from 'next/image';
import { useEffect, useState } from "react";

type ImagenCarrusel = {
  id: number;
  img: string;
};

const imagenes: ImagenCarrusel[] = [
  { id: 1, img: "/Seguro_Automotor.jpg" },
  { id: 2, img: "/Seguro_Hogar.jpg" },
  { id: 3, img: "/Seguro_Motovehiculo.jpg" },
  { id: 4, img: "/Seguro_Accidentes.jpg" },
];

const Carrusel = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideWidth = 380;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prev => {
        if (prev + 1 >= imagenes.length) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
      <div className="relative flex items-center overflow-hidden">
        <div
          className='flex gap-8'
          style={{
            width: `${slideWidth * imagenes.length}px`,
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            transition: 'transform 0.5s ease'
          }}
        >
          {imagenes.map((item) => (
            <Image
              key={item.id}
              src={item.img}
              alt={`logo ${item.id}`}
              width={364}
              height={285}
              className="block"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrusel;

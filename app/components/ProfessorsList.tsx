'use client';

import Image from "next/image";
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import Link from 'next/link';
import {
  Professors,
} from '@/app/lib/definitions';

export function ProfessorItem({ professor }: { professor: Professors }) {
  return (
    <div className="swiper-slide text-center">
      <Link href={`/professor/${professor.id}`} className="inline-block w-[150px] h-[150px] rounded-full border-[3px] border-yellow-1 overflow-hidden">
        <Image
          className="w-full h-full object-cover object-top"
          src={professor.image_url}
          alt={professor.name}
          width={150}
          height={150}
        />
      </Link>
      <Link href={`/professor/${professor.id}`} className="text-blue-1">
        <h4 className="mt-2 mb-1">{professor.name}</h4>
      </Link>
      <p className="text-[15px] text-fog-grey-2">{professor.subject}</p>
    </div>
  );
}

export default function ProfessorsList({professors}: { professors: Professors[] }) {

    useEffect(() => {
    
        const professorsSwiper = new Swiper('.professors-slider', {
            loop: true,
            slidesPerView: 1,
            breakpoints: {
                500: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
            },
        });

        return () => {
            professorsSwiper.destroy(true, true);
        };
    }, []);
    

  return (
    <>
        {professors.map((professor) => (
            <ProfessorItem key={professor.id} professor={professor} />
        ))}
    </>
  );
}
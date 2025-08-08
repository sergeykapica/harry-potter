'use client';

import Image from "next/image";
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function ProfessorsSection() {

    useEffect(() => {

        let professorsSwiper: Swiper | null = null;

        professorsSwiper = new Swiper('.professors-slider', {
            loop: true,
            slidesPerView: 6,
            breakpoints: {
                768: {
                slidesPerView: 3,
                },
            },
        });

        return () => {
            professorsSwiper?.destroy(true, true);
        };
    }, []);

    return (
        <section className="professors-section">

            <div className="container">
                <h2 className="section__headline">Lorem Ipsum</h2>
                <p className="section__description">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                <div className="swiper professors-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide text-center">
                            <a href="#!">
                            <Image
                                className="w-[150px] h-[150px] object-cover object-top inline-block rounded-full border-[3px] border-yellow-1"
                                src="/professors/dab3d1f464ee0488f6b765af61d3c65f.jpg"
                                alt="Professor 1"
                                width={150}
                                height={150}
                            />
                            </a>
                            <a href="#!" className="text-blue-1"><h4 className="mt-2 mb-1">Альбус Дамблдор</h4></a>
                            <p className="text-[14px] text-fog-grey-2">Директор</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
  )
}
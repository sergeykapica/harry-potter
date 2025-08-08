'use client';

import Image from "next/image";
import { useEffect } from 'react';
import Parallax from 'parallax-js';
import FlyingObject from './FlyingObject';
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

Swiper.use([Navigation, Pagination, Thumbs]);

const snitchOptions = {
  type: "snitch",
  duration: 15,
  repeat: -1,
  ease: `rough({
    template:none.inOut,
    strength: 1,
    points:20,
    taper:none,
    randomize:true,
    clamp:false
  })`,
  path: 'M 3 4 Q 4 5 5 4 Q 4 5 3 4 Q 4 4 5 4 T 17 2 Q 17 8 11 8 Q 3 6 4 1 T 16 9 Q 17.5 5 19 1 Q 11 2.5 3 4',
  imagePath: "/snitch.png",
  motionPath: {
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
  },
  viewBox: "2.9 -0.488889 16.2 9.589",
};

snitchOptions.motionPath.path = "#flight-path" + snitchOptions.type;
snitchOptions.motionPath.align = "#flight-path" + snitchOptions.type;
snitchOptions.timelines = [
  { rotation: -65, duration: 0.1, seconds: 0.8 },
  { rotation: 65, duration: 0.1, seconds: 2 },
  { rotation: 45, duration: 0.1, seconds: 3 },
  { rotation: 180, duration: 0.1, seconds: 3 },
  { rotation: 0, duration: 0.1, seconds: 4.5 },
  { rotation: 220, duration: 0.1, seconds: 6.5 },
  { rotation: 80, duration: 0.1, seconds: 8 },
  { rotation: 0, duration: 0.1, seconds: 15 },
];

const catOptions = {
  type: "cat",
  duration: 15,
  repeat: -1,
  ease: `none`,
  path: 'M 16.297 8.439 L 10.658 8.426 L 12.563 8.426 Q 12.903 5.918 13.321 4.307 C 13.616 3.595 13.662 3.471 15.799 3.487 L 16.39 3.498 C 16.204 3.493 16.018 3.488 15.832 3.483 Q 15.1665 3.4985 14.501 3.514 T 13.51 3.885 Q 13.4245 4.102 13.339 4.319 T 12.782 6.858 Q 12.6735 7.64 12.565 8.422 C 11.9303 8.4273 11.2957 8.4327 10.661 8.438 L 16.297 8.438',
  imagePath: "/cat.png",
  motionPath: {
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
  },
  viewBox: "8.9 2.08355 7.409 7.016",
  yoyo: true,
};

catOptions.motionPath.path = "#flight-path" + catOptions.type;
catOptions.motionPath.align = "#flight-path" + catOptions.type;
catOptions.timelines = [
  { seconds: 2, pause: true, pauseDuration: 2 },
  { seconds: 2,  rotation: 45, duration: 0.5 },
  { seconds: 2.5, pause: true, pauseDuration: 2 },
  { seconds: 3, scaleX: -1, rotation: -45, duration: 0.1 },
  { seconds: 6, scaleX: -1, rotation: 0, duration: 0.1 },
  { seconds: 7.5, scaleX: -1, pause: true, pauseDuration: 2 },
  { seconds: 7.5, scaleX: 1, duration: 0.1 },
  { seconds: 12, scaleX: -1, duration: 0.1 },
];

const carOptions = {
  type: "car",
  duration: 15,
  repeat: -1,
  ease: `none`,
  path: 'M-2.92-6.925A1 1 0 0024.997-7.051L-2.92-6.925',
  motionPath: {
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
  },
  viewBox: "8.9 2.08355 7.409 7.016",
  yoyo: true,
  imagesList: [
    '/forda1.png',
    '/forda2.png',
    '/forda3.png',
  ],
};

carOptions.motionPath.path = "#flight-path" + carOptions.type;
carOptions.motionPath.align = "#flight-path" + carOptions.type;
carOptions.timelines = [
  { seconds: 0, imageItem: 1 },
  { seconds: 4, imageItem: 2 },
  { seconds: 5.5, imageItem: 3 },
];

const owlOptions = {
  type: "owl",
  duration: 15,
  repeat: -1,
  ease: `none`,
  path: 'M-1.853-1.255C.708.6183 1.416 1.2367 2.124 1.855 3.016 2.824 4.316 2.9 5.156 1.557 6.33 1.218 7.477 2.722 8.904 2.263 9.847 1.142 11.0967 1.9403 12.193 1.804 13.323 1.787 14.453 1.77 15.583 1.753 17.622 1.091 17.163 2.705 19.761 2.165S23.719 4.225 22.345 6.907Q15.889 6.902 14.257 6.469C13.2713 6.435 12.2857 6.401 11.3 6.367Q10.1785 5.615 9.836 4.259 8.932 3.029 7.858 1.316C6.001.677 4.746.231 3.769 1.159S2.846 4.464 1.971 4.94Q.62 6.265-1.776 5.959L-3.691 3.865C-2.184 2.289-4.476-2.415-1.802-1.255',
  imagePath: "/owl.png",
  motionPath: {
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
  },
  viewBox: "-0.729 -0.1 17.48 7.74",
};

owlOptions.motionPath.path = "#flight-path" + owlOptions.type;
owlOptions.motionPath.align = "#flight-path" + owlOptions.type;
owlOptions.timelines = [
  { seconds: 0, rotation: -25, duration: 0.5 },
  { seconds: 7, rotation: 25, scaleX: -1, duration: 0.2 },
];

export default function HeroSection() {

  useEffect(() => {
    const scenes = document.querySelectorAll('.scene');
    const instances = [];

    scenes.forEach((scene) => {
      const instance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: true,
      });
      instances.push(instance);
    });

    // Очистка при размонтировании
    return () => {
      instances.forEach((instance) => instance.disable());
    };
  }, []);

  useEffect(() => {

    let thumbsSwiper: Swiper | null = null;
    let mainSwiper: Swiper | null = null;

    thumbsSwiper = new Swiper('.thumbs-slider', {
      spaceBetween: 20,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    });

    mainSwiper = new Swiper('.slider-1', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      mainSwiper?.destroy(true, true);
      thumbsSwiper?.destroy(true, true);
    };
  }, []);

  return (
    <section className="hero-section">

      <div className="swiper slider-1">

          <div className="swiper-wrapper">

            <div className="swiper-slide relative pt-[205px] pb-[135px] overflow-hidden">
              <div className="swiper-slide-bg">
                <Image
                  className="object-cover w-full h-full z-[-1]"
                  src="/c254a83b531488214cb9dabe78a47263.png"
                  alt="Slide 1"
                  fill
                />
              </div>
              <div className="container relative z-30">

                <div className="inline-block w-full">
                  <div className="float-right sm:w-[280px] pt-[30px] pb-[50px] px-5 bg-black/30">
                      <h2 className="text-lg text-fog-grey-1 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                      <p className="text-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div className="container absolute left-1/2 bottom-0 -translate-x-1/2 scene z-20">
                <Image
                  data-depth="0.3"
                  className="absolute bottom-0 left-0 -translate-x-[50px] translate-y-[100px]"
                  src="/hp1.png"
                  alt="Character 1"
                  width={500}
                  height={500}
                />
              </div>
              <FlyingObject options={snitchOptions}/>
            </div>

            <div className="swiper-slide relative pt-[205px] pb-[135px] overflow-hidden">
              <div className="swiper-slide-bg">
                <Image
                  className="object-cover w-full h-full z-[-1]"
                  src="/20230212024511_993168d9f_1920xH.webp"
                  alt="Slide 2"
                  fill
                />
              </div>
              <div className="container relative z-30">
                <div className="inline-block w-full">
                  <div className="float-right sm:w-[280px] pt-[30px] pb-[50px] px-5 bg-black/30">
                      <h2 className="text-lg text-fog-grey-1 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                      <p className="text-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div className="container absolute left-1/2 bottom-0 -translate-x-1/2 scene">
                <Image
                  data-depth="0.3"
                  className="absolute bottom-0 left-0 translate-y-[100px]"
                  src="/hp2.png"
                  alt="Character 2"
                  width={400}
                  height={400}
                />
              </div>
              <FlyingObject options={catOptions}/>
            </div>

            <div className="swiper-slide relative pt-[205px] pb-[135px] overflow-hidden">
              <div className="swiper-slide-bg">
                <Image
                  className="object-cover w-full h-full z-[-1]"
                  src="/hogwarts-4.webp"
                  alt="Slide 3"
                  fill
                />
              </div>
              <div className="container relative z-30">
                <div className="inline-block w-full">
                  <div className="float-right sm:w-[280px] pt-[30px] pb-[50px] px-5 bg-black/30">
                      <h2 className="text-lg text-fog-grey-1 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                      <p className="text-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div className="container absolute left-1/2 bottom-0 -translate-x-1/2 scene z-20">
                <Image
                  data-depth="0.3"
                  className="absolute bottom-0 left-0 -translate-x-[50px] translate-y-[100px]"
                  src="/hp3.png"
                  alt="Character 3"
                  width={460}
                  height={460}
                />
              </div>
              <FlyingObject options={carOptions}/>
            </div>

            <div className="swiper-slide relative pt-[205px] pb-[135px] overflow-hidden">
              <div className="swiper-slide-bg">
                <Image
                  className="object-cover w-full h-full z-[-1]"
                  src="/1672130224_idei-club-p-nottingemskii-zamok-dizain-krasivo-61.jpg"
                  alt="Slide 4"
                  fill
                />
              </div>
              <div className="container relative z-30">
                <div className="inline-block w-full">
                  <div className="float-right sm:w-[280px] pt-[30px] pb-[50px] px-5 bg-black/30">
                      <h2 className="text-lg text-fog-grey-1 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                      <p className="text-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div className="container absolute left-1/2 bottom-0 -translate-x-1/2 scene">
                <Image
                  data-depth="0.3"
                  className="absolute bottom-0 left-0 translate-y-[50px]"
                  src="/hp4.png"
                  alt="Character 4"
                  width={400}
                  height={400}
                />
              </div>
              <FlyingObject options={owlOptions}/>
            </div>

          </div>

          <div className="swiper-pagination"></div>
          <div className="swiper-button-next translate-x-[calc(100%+50px)]"></div>
          <div className="swiper-button-prev -translate-x-[calc(100%+50px)]"></div>

      </div>

      <div className="thumbs-block relative">

        <div className="container mb-5">

          <div className="swiper thumbs-slider">

            <div className="swiper-wrapper">

              <div className="swiper-slide relative">
                <div className="swiper-slide-bg"></div>
                <Image
                    className="object-cover w-full h-[158px]"
                    src="/c254a83b531488214cb9dabe78a47263_2.png"
                    alt="Thumbs Slide 1"
                    width={210}
                    height={158}
                  />
                  <div className="bg-white/20 p-[10px] absolute bottom-0 inset-x-0">
                    <p className="text-xs text-fog-grey-1">Lorem ipsum is placeholder text commonly used in the graphic</p>
                  </div>
              </div>

              <div className="swiper-slide relative">
                <div className="swiper-slide-bg"></div>
                <Image
                    className="object-cover w-full h-[158px]"
                    src="/20230212024511_993168d9f_1920xH_2.webp"
                    alt="Thumbs Slide 1"
                    width={210}
                    height={158}
                  />
                  <div className="bg-white/20 p-[10px] absolute bottom-0 inset-x-0">
                    <p className="text-xs text-fog-grey-1">Lorem ipsum is placeholder text commonly used in the graphic</p>
                  </div>
              </div>

              <div className="swiper-slide relative">
                <div className="swiper-slide-bg"></div>
                <Image
                    className="object-cover w-full h-[158px]"
                    src="/hogwarts-4_2.webp"
                    alt="Thumbs Slide 1"
                    width={210}
                    height={158}
                  />
                  <div className="bg-white/20 p-[10px] absolute bottom-0 inset-x-0">
                    <p className="text-xs text-fog-grey-1">Lorem ipsum is placeholder text commonly used in the graphic</p>
                  </div>
              </div>

              <div className="swiper-slide relative">
                <div className="swiper-slide-bg"></div>
                <Image
                    className="object-cover w-full h-[158px]"
                    src="/1672130224_idei-club-p-nottingemskii-zamok-dizain-krasivo-61_2.jpg"
                    alt="Thumbs Slide 1"
                    width={210}
                    height={158}
                  />
                  <div className="bg-white/20 p-[10px] absolute bottom-0 inset-x-0">
                    <p className="text-xs text-fog-grey-1">Lorem ipsum is placeholder text commonly used in the graphic</p>
                  </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
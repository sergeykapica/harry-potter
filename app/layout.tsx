import type { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderMenu from './components/HeaderMenu';
import LazyBackground from "./components/LazyBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Гарри Поттер - фанатский сайт",
  description: "Здесь обитает дух Вселенной Гарри Поттера.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="header">
          <div className="container pt-[10px] text-fog-grey-1">
            <div className="inline-block w-full">
              <div className="text-center lg:text-left lg:float-right flex justify-center lg:justify-start">
                <a href="#!" className="mr-[28px]">+7 (450) 434-34-34</a>
                <Link href="#section-contact" className="flex items-center gap-3">
                  Напишите нам
                  <Image
                    src="/feather-svgrepo-com.svg"
                    alt="Owl"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={175}
                    height={95}
                  />
                </Link>
                <div className="flex items-center gap-[45px]">
                  <HeaderMenu/>
                  <Link href="/#section-contact" className="button-1 !hidden lg:!inline-block">Связаться</Link>
                </div>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="footer">
            <LazyBackground
              src="/footer-top-bg.jpg"
              className="footer__top pt-[40px] pb-[35px]"
            >
            <div className="container grid md:grid-cols-4 gap-5 md:gap-[35px] text-[14px]">
              <div className="text-center md:text-left">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={175}
                    height={95}
                    className="inline-block"
                  />
                </Link>
                <p className="text-grey-1">Вселенная Гарри Поттера — это волшебный мир, скрытый от обычных людей (маглов), где живут маги, волшебницы, магические существа и духи.</p>
              </div>
              <div className="pt-[30px] flex justify-center">
                <div className="block">
                  <h3 className="text-xl text-white mb-3">Навигация</h3>
                  <ul className="text-grey-1 space-y-2">
                    <li><Link href="/">Главная</Link></li>
                    <li><Link href="/#section-hogwarts">Хогвартс</Link></li>
                    <li><Link href="/#section-faculties">Факультеты</Link></li>
                    <li><Link href="/#section-professors">Преподаватели</Link></li>
                    <li><Link href="/#section-books">Книги</Link></li>
                    <li><Link href="/privacy">Политика конфиденциальности</Link></li>
                  </ul>
                </div>
              </div>
              <div className="pt-[30px] flex justify-center text-center md:text-left">
                <div className="block">
                  <h3 className="text-xl text-white mb-3">Авторство</h3>
                  <p className="text-grey-1">Джоан Роулинг — британская писательница, ставшая всемирно известной благодаря серии книг о Гарри Поттере. Она является единственным автором этих произведений, полностью придумав и разработав их сюжет, персонажей и магический мир.</p>
                </div>
              </div>
              <div className="pt-[30px] flex justify-center">
                <div className="block">
                  <h3 className="text-xl text-white mb-3">Мы в соц. сетях</h3>
                  <ul className="flex justify-center md:justify-start items-center footer__socials space-x-2 mb-4">
                    <li>
                      <Link href="/">
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <circle cx={512} cy={512} r={512} className="group-hover:fill-yellow-1 fill-[#1da1f2] transition-colors duration-150" />
                          <path
                            d="M778 354.8c-18.8 8.3-38.9 13.9-60.1 16.5 21.6-13 38.2-33.5 46-57.9-20.2 11.8-42.7 20.4-66.5 25.2-19.1-20.4-46.2-33.2-76.4-33.2-57.8 0-104.7 46.9-104.7 104.6 0 8.3 1 16.3 2.7 23.9-87-4.1-164.2-45.9-215.8-109.1-9.1 15.4-14.2 33.2-14.2 52.7 0 36.4 18.5 68.4 46.6 87.2-17.2-.6-33.3-5.3-47.4-13.1v1.3c0 50.8 36 93.1 84 102.7-8.8 2.4-18.1 3.6-27.6 3.6-6.7 0-13.1-.6-19.5-1.8 13.4 41.6 52 71.9 98 72.7-35.7 28.1-81.1 44.8-129.8 44.8-8.3 0-16.6-.5-24.9-1.4 46.6 29.7 101.5 47 160.8 47C621.7 720.5 727 561 727 422.9c0-4.4 0-8.9-.3-13.4 20.4-14.7 38.3-33.2 52.3-54.2l-1-.5z"
                            style={{ fill: "#fff" }}
                          />
                        </svg>

                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <svg
                          width="36px"
                          height="36px"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group"
                        >
                          <circle
                            cx={24}
                            cy={24}
                            r={20}
                            className="group-hover:fill-yellow-1 fill-[#3B5998] transition-colors duration-150"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                            fill="white"
                          />
                        </svg>

                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 48 48"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="group bg-white rounded-full"
                          >
                            <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <g
                                id="Color-"
                                transform="translate(-300.000000, -260.000000)"
                                fill="#CC2127" className="group-hover:fill-yellow-1 transition-colors duration-150"
                              >
                                <path
                                  d="M324.001411,260 C310.747575,260 300,270.744752 300,284.001411 C300,293.826072 305.910037,302.270594 314.368672,305.982007 C314.300935,304.308344 314.357382,302.293173 314.78356,300.469924 C315.246428,298.522491 317.871229,287.393897 317.871229,287.393897 C317.871229,287.393897 317.106368,285.861351 317.106368,283.59499 C317.106368,280.038808 319.169518,277.38296 321.73505,277.38296 C323.91674,277.38296 324.972306,279.022755 324.972306,280.987123 C324.972306,283.180102 323.572411,286.462515 322.852708,289.502205 C322.251543,292.050803 324.128418,294.125243 326.640325,294.125243 C331.187158,294.125243 334.249427,288.285765 334.249427,281.36532 C334.249427,276.10725 330.707356,272.170048 324.263891,272.170048 C316.985006,272.170048 312.449462,277.59746 312.449462,283.659905 C312.449462,285.754101 313.064738,287.227377 314.029988,288.367613 C314.475922,288.895396 314.535191,289.104251 314.374316,289.708238 C314.261422,290.145705 313.996119,291.21256 313.886047,291.633092 C313.725172,292.239901 313.23408,292.460046 312.686541,292.234256 C309.330746,290.865408 307.769977,287.193509 307.769977,283.064385 C307.769977,276.248368 313.519139,268.069148 324.921503,268.069148 C334.085729,268.069148 340.117128,274.704533 340.117128,281.819721 C340.117128,291.235138 334.884459,298.268478 327.165285,298.268478 C324.577174,298.268478 322.138649,296.868584 321.303228,295.279591 C321.303228,295.279591 319.908979,300.808608 319.615452,301.875463 C319.107426,303.724114 318.111131,305.575587 317.199506,307.014994 C319.358617,307.652849 321.63909,308 324.001411,308 C337.255248,308 348,297.255248 348,284.001411 C348,270.744752 337.255248,260 324.001411,260"
                                  id="Pinterest"
                                ></path>
                              </g>
                            </g>
                          </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <svg
                        width="36px"
                        height="36px"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group"
                      >
                        <circle
                          cx={24}
                          cy={24}
                          r={20}
                          fill="#FF0000"
                          className="group-hover:fill-yellow-1 transition-colors duration-150"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z"
                          fill="white"
                        />
                      </svg>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/#section-contact" className="button-3">Связаться</Link>
                </div>
              </div>
            </div>
          </LazyBackground>
          <div className="footer__bottom py-5 bg-[#12151a]">
            <div className="container text-center text-[14px]">
                <p className="text-grey-1">Все права защищены 2025 &copy; | Created by Marsel Firsov</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

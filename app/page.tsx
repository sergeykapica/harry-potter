import Image from "next/image";
import HeroSection from './components/HeroSection';
import ProfessorsSection from './components/ProfessorsSection';
import CreateRequestForm from './components/CreateRequestForm';
import Link from 'next/link';
import LazyBackground from "./components/LazyBackground";

export default function Home() {

  return (
    <>
      <HeroSection/>
      <section className="section pb-[35px] lg:pb-[70px]" id="section-hogwarts">
        <div className="container">
          <h2 className="section__headline">Хогвартс</h2>
          <p className="section__description">Легендарная школа чародейства и волшебства, скрытая в горах Шотландии.</p>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="relative md:w-1/2 h-[300px] md:h-auto">
              <Image
                data-depth="0.3"
                className="object-cover w-full h-full absolute"
                src="/982c85dc1da2437c26f61eb98abe50b1.jpg"
                alt="About Hogwarts"
                fill
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl">Хогвартс</h3>
              <p className="mt-[10px] mb-[15px] text-grey-2">Древний замок, окутанный туманами и легендами, где каждый камень хранит историю магии.</p>
              <p className="text-grey-1 mb-[15px]">В Хогвартсе воздух пропитан чарами: лестницы живут своей жизнью, картины разговаривают, а в коридорах можно встретить призраков былых времён. Под сводами Большого зала мерцают сотни свечей, а потолок отражает небо за окнами. Здесь ученики не просто учатся магии — они становятся частью древней традиции, которая передаётся из поколения в поколение.</p>
              <p className="text-grey-1 mb-[35px]">Глубокие подземелья, тайные ходы и запретный лес таят в себе чудеса и опасности, открывающиеся лишь тем, кто осмелится их искать. Хогвартс — это не просто школа, это живое сердце волшебного мира.</p>
              <Link href="/hogwarts" className="button-2">Читать подробнее</Link>
            </div>
          </div>
        </div>
      </section>

      <section  id="section-faculties">
        <LazyBackground
          src="/section-faculties-bg-2.png"
          className="section section__faculties section__darked py-[120px]"
        >
          <div className="container">
              <h2 className="section__headline">Факультеты</h2>
              <p className="section__description">Четыре уникальных дома, в которых ученики учатся, живут и развиваются, объединяясь по общим ценностям и качествам характера: смелость, мудрость, амбиции и верность.</p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="text-center bg-black/70 p-6 rounded-lg border-[3px] border-yellow-1 border-double">
                  <Image
                  data-depth="0.3"
                  className="object-cover inline-block w-[250px] h-[312px]"
                  src="/5e89889df44a4a0782851eba00012434-removebg-preview.png"
                  alt="Gryffindor"
                  width={250}
                  height={250}
                />
                <p className="text-white mt-5">Гриффиндор славится своей храбростью и отвагой. Его ученики ценят честь, смелость и готовность идти навстречу опасности ради благородной цели. Символ — лев, а цвета факультета — алый и золотой.</p>
                </div>

                <div className="text-center bg-black/70 p-6 rounded-lg border-[3px] border-yellow-1 border-double">
                  <Image
                  data-depth="0.3"
                  className="object-cover inline-block w-[250px] h-[312px]"
                  src="/423-4230183_download-slytherin-crest-png-harry-potter-slytherin-logo__1_-removebg-preview.png"
                  alt="Slytherin"
                  width={250}
                  height={250}
                />
                <p className="text-white mt-5">Слизерин известен хитростью, честолюбием и умением добиваться своего. Здесь ценят решительность, лидерство и изобретательность. Символ — змей, а цвета факультета — изумрудный и серебряный.</p>
                </div>

                <div className="text-center bg-black/70 p-6 rounded-lg border-[3px] border-yellow-1 border-double">
                  <Image
                  data-depth="0.3"
                  className="object-cover inline-block w-[250px] h-[312px]"
                  src="/ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-bd51c96db914701a0c85b34806e00fa6.png"
                  alt="Ravenclaw"
                  width={250}
                  height={250}
                />
                <p className="text-white mt-5">Когтевран — факультет мудрости, остроумия и стремления к знаниям. Его ученики отличаются любознательностью и умением мыслить нестандартно. Символ — орёл, а цвета факультета — синий и бронзовый.</p>
                </div>

                <div className="text-center bg-black/70 p-6 rounded-lg border-[3px] border-yellow-1 border-double">
                  <Image
                  data-depth="0.3"
                  className="object-cover inline-block w-[250px] h-[312px]"
                  src="/escudo-gryffindor-png-hufflepuff-house-11563000685lwbmbe5zf8__1_-removebg-preview.png"
                  alt="Huflflepuff"
                  width={250}
                  height={250}
                />
                <p className="text-white mt-5">Пуффендуй ценит трудолюбие, доброту и справедливость. Здесь учатся верные и честные маги, готовые прийти на помощь каждому. Символ — барсук, а цвета факультета — жёлтый и чёрный.</p>
                </div>
              </div>
          </div>
        </LazyBackground>
      </section>
      <ProfessorsSection/>
      <section id="section-books">
        <LazyBackground
          src="/alnwick-castle-wide1.png"
          className="section section__books section__darked py-[120px]"
        >
          <div className="container">
              <h2 className="section__headline">Книги</h2>
              <p className="section__description">Знаменитая серия Дж. К. Роулинг о приключениях юного волшебника, его друзьях и борьбе со злом в мире магии.</p>
              <div className="flex flex-col justify-center gap-[30px] lg:gap-0 lg:block relative lg:h-[460px] text-center">
                <Link
                  href="/texts/harry-potter-and-the-philisopher-stone"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 left-0 lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754668761.png"
                    alt="Book 1"
                    width={250}
                    height={250}
                    priority
                  />
                </Link>
                <Link
                  href="/texts/harry-potter-and-the-chamber-of-secrets"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 lg:left-[120px] lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754669394.png"
                    alt="Book 2"
                    width={250}
                    height={250}
                  />
                </Link>
                <Link
                  href="/texts/harry-potter-and-the-prisoner-of-azkaban"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 lg:left-[240px] lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754669430.png"
                    alt="Book 3"
                    width={250}
                    height={250}
                  />
                </Link>
                <Link
                  href="/texts/harry-potter-and-the-goblet-of-fire"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 lg:left-[360px] lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754669592.png"
                    alt="Book 4"
                    width={250}
                    height={250}
                  />
                </Link>
                <Link
                  href="/texts/harry-potter-and-the-order-of-phoenix"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 lg:left-[480px] lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754669488.png"
                    alt="Book 5"
                    width={250}
                    height={250}
                  />
                </Link>
                <Link
                  href="/texts/harry-potter-and-the-half-blood-prince"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 lg:left-[600px] lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754669511.png"
                    alt="Book 6"
                    width={250}
                    height={250}
                  />
                </Link>
                <Link
                  href="/texts/harry-potter-and-the-dealthy-hallows"
                >
                  <Image
                    className="inline-block object-cover lg:absolute top-0 lg:left-[720px] lg:hover:-translate-x-[120px] transition duration-150 cursor-pointer"
                    src="/1754669533.png"
                    alt="Book 7"
                    width={250}
                    height={250}
                  />
                </Link>
              </div>
          </div>
        </LazyBackground>
      </section>
      <section className="py-[100px]" id="section-contact">

        <div className="container flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="section__headline !text-left !mb-5">Задать вопрос</h2>
            <CreateRequestForm/>
          </div>
          <div className="relative md:w-1/2 h-[370px] md:h-auto">
            <div className="bg-black/50 absolute inset-0 z-10 flex justify-center items-center text-white p-5">
              <ul>
                <li className="flex items-center gap-2 mb-4">
                  <Image
                    src="/crystal-ball-svgrepo-com.svg"
                    alt="Crystal Ball"
                    width={50}
                    height={50}
                  />
                  <p>Хогсмид, Волшебное графство, ул. Барда Бидля, дом 100</p>
                </li>
                <li>
                  <a href="tel:+74433433433" className="flex items-center gap-4 mb-4">
                  <Image
                    src="/magic-wand-svgrepo-com.svg"
                    alt="Wondering"
                    width={40}
                    height={40}
                  />
                  +7 (443) 343-34-33
                  </a>
                </li>
                <li>
                  <a href="mailto:magic@harrypotter.com" className="flex items-center gap-2">
                  <Image
                    src="/owl-svgrepo-com.svg"
                    alt="Owl"
                    width={50}
                    height={50}
                  />
                  magic@harrypotter.com
                  </a>
                </li>
              </ul>
            </div>
            <Image
                src="/Ie8IaC358jI7ani5qMThDcILRw_3_VLUFk0JnIcbrzQ.webp"
                alt="Form image"
                fill
              />
          </div>
        </div>

      </section>
    </>
  );
}

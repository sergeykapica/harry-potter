import Image from "next/image";
import HeroSection from './components/HeroSection';
import ProfessorsSection from './components/ProfessorsSection';

export default function Home() {

  return (
    <>
      <HeroSection/>
      <section className="section pb-[35px] lg:pb-[70px]">
        <div className="container">
          <h2 className="section__headline">Lorem Ipsum</h2>
          <p className="section__description">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="relative lg:w-1/2 h-[300px] lg:h-auto">
              <Image
                data-depth="0.3"
                className="object-cover w-full h-full absolute"
                src="/982c85dc1da2437c26f61eb98abe50b1.jpg"
                alt="About Hogwarts"
                width={1000}
                height={1000}
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-lg">Lorem Ipsum</h3>
              <p className="mt-[10px] mb-[15px] text-grey-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-grey-1 mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-grey-1 mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#!" className="button-2">Читать подробнее</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section__faculties section__darked py-[120px]">
        <div className="container">
            <h2 className="section__headline">Lorem Ipsum</h2>
            <p className="section__description">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

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
              <p className="text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
              <p className="text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
              <p className="text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
              <p className="text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
        </div>
      </section>
      <ProfessorsSection/>
    </>
  );
}

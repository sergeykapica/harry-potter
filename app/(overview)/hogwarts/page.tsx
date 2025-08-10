import Breadcrumbs from '@/app/components/breadcrumbs';
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хогвартс",
  description: "Древний замок, окутанный туманами и легендами, где каждый камень хранит историю магии.",
  openGraph: {
    title: "Хогвартс",
    description: "Древний замок, окутанный туманами и легендами, где каждый камень хранит историю магии.",
  },
};

export default async function Page() {
    
    return (
        <>
            <div className='relative pt-[200px] pb-[100px]'>
                <div className='section__detail-bg'></div>
                <div className="container relative text-center">
                    <Breadcrumbs
                        breadcrumbs={[
                            {
                                label: 'Главная',
                                href: '/',
                            },
                            {
                                label: `Хогвартс`,
                                href: `/hogwarts/`,
                                active: true,
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='container py-[50px]'>
                <h1 className="text-4xl font-bold mb-10">Хогвартс — Школа Чародейства и Волшебства</h1>

                <div className="flex flex-col md:flex-row gap-10 mb-20">
                    <div className="md:w-1/2">
                        <p className="mb-8 text-lg leading-relaxed">
                            Хогвартс — это легендарная школа магии, расположенная в уединённом уголке Шотландии, скрытая от глаз магглов с помощью мощных заклинаний и чар. Основанная более тысячи лет назад четырьмя великими волшебниками — Годриком Гриффиндором, Салазаром Слизерином, Хельгой Хаффлпаф и Ровеной Когтевран — школа стала символом магического образования и силы.
                        </p>

                        <p className="mb-8 text-lg leading-relaxed">
                            Архитектура Хогвартса поражает своей величественностью и загадочностью — огромный замок с высокими башнями, живописными залами, скрытыми коридорами и лестницами, которые постоянно меняют своё расположение. Внутри замка находятся многочисленные классы, библиотека с тысячами редких книг, залы для приёмов и знаменитый Большой Зал, где проходят торжественные обеды и праздники.
                        </p>
                    </div>
                    <div className="relative md:w-1/2 h-[300px] md:h-auto">
                        <Image
                            className="object-cover"
                            src="/hog.jpg"
                            alt="About Hogwarts"
                            fill
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mb-8 gap-10 items-start">
                    <div className="relative md:w-1/2 grid grid-cols-2">
                        <Image
                            className="object-cover h-[250px]"
                            src="/d46feab9d1eebb7352075505f760b9f6.jpg"
                            alt="About Hogwarts 2"
                            width={720}
                            height={720}
                        />
                        <Image
                            className="object-cover h-[250px]"
                            src="/6_great_hall.jpg"
                            alt="About Hogwarts 3"
                            width={720}
                            height={720}
                        />
                        <Image
                            className="object-cover col-span-2 h-[250px]"
                            src="/c2aa44148b35257bcfc3e89fe5d760550d2ea905r1-1500-500v2_hq.jpg"
                            alt="About Hogwarts 4"
                            width={720}
                            height={720}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="mb-8 text-lg leading-relaxed">
                            В Хогвартсе обучают широкому спектру магических дисциплин: зельеварению, заклинаниям, трансфигурации, травологии, защите от тёмных искусств, уходу за магическими существами и многим другим. Обучение проходит в атмосфере строгих правил, но также и творческого поиска, где каждый ученик может раскрыть свои уникальные способности.
                        </p>

                        <p className="mb-8 text-lg leading-relaxed">
                            Особое значение имеет система факультетов — Гриффиндор, Слизерин, Когтевран и Хаффлпаф — которые распределяют учеников по чертам характера и талантам. Каждый факультет имеет свой уникальный дух, традиции и герб, а также собственных наставников. Факультеты регулярно соревнуются друг с другом, что поддерживает дух здоровой конкуренции и единства.
                        </p>
                    </div>
                </div>

                <p className="mb-8 text-lg leading-relaxed">
                    Школа окружена магическим лесом, озёрами и волшебными существами — от хиппогрифов и фениксов до троллей и драконов, что делает жизнь учеников не только учебной, но и насыщенной приключениями. Также Хогвартс защищён сложной системой заклинаний, которые оберегают его от посягательств со стороны тёмных сил.
                </p>

                <p className="mb-8 text-lg leading-relaxed">
                    Важной частью жизни Хогвартса являются различные магические события и традиции, такие как Зимний Бал, Турнир Трёх Волшебников и, конечно, легендарные квиддичные матчи, которые собирают учеников и преподавателей на поле, вызывая бурю эмоций и радости.
                </p>

                <p className="mb-8 text-lg leading-relaxed">
                    Ученики живут в уютных спальнях внутри замка, где царит дружеская атмосфера, поддержка и взаимопомощь. Многие выпускники Хогвартса становятся знаменитыми волшебниками, а сама школа служит местом формирования будущих защитников магического мира.
                </p>

                <p className="mb-8 text-lg leading-relaxed">
                    Хогвартс — не просто школа, это место, где переплетаются история, магия и судьбы сотен учеников, место, которое вдохновляет на великие дела и учит верить в себя даже в самых трудных ситуациях.
                </p>

                <Image
                    className="object-cover w-full"
                    src="/hog2.jpeg"
                    alt="About Hogwarts 5"
                    width={720}
                    height={720}
                />
            </div>
        </>
    );
}
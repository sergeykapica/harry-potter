import Breadcrumbs from '@/app/components/breadcrumbs';
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
                                label: `Политика конфиденциальности`,
                                href: `/privacy/`,
                                active: true,
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='container py-[50px]'>
                <h1 className="text-3xl font-semibold mb-6">Политика конфиденциальности</h1>

                <p className="mb-4 text-lg leading-relaxed">
                    Добро пожаловать на наш фанатский сайт о Гарри Поттере! Мы уважаем вашу приватность и стремимся защищать ваши персональные данные.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Сбор информации</h2>
                <p className="mb-4 text-base leading-relaxed">
                    Мы не собираем личную информацию без вашего согласия. При регистрации или подписке на новости вы можете добровольно предоставить имя и адрес электронной почты.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Использование информации</h2>
                <p className="mb-4 text-base leading-relaxed">
                    Собранные данные используются исключительно для улучшения работы сайта и рассылки новостей, связанных с Гарри Поттером. Мы не передаем ваши данные третьим лицам.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Файлы cookie</h2>
                <p className="mb-4 text-base leading-relaxed">
                    Сайт может использовать cookies для улучшения пользовательского опыта и аналитики. Вы можете отключить cookies в настройках браузера, однако это может повлиять на функциональность сайта.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Безопасность данных</h2>
                <p className="mb-4 text-base leading-relaxed">
                    Мы предпринимаем все необходимые меры для защиты ваших данных от несанкционированного доступа и утечки.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Контакты</h2>
                <p className="mb-4 text-base leading-relaxed">
                    Если у вас есть вопросы по поводу политики конфиденциальности, вы можете связаться с нами по электронной почте: <a href="mailto:magic@harrypotter.com" className="text-blue-600 underline">magic@harrypotter.com</a>.
                </p>
            </div>
        </>
    );
}
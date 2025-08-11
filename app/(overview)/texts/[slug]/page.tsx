import fs from "fs";
import path from "path";
import Breadcrumbs from '@/app/components/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from "next";
import Link from 'next/link';

const bookList = {
    'harry-potter-and-the-philisopher-stone': 'Гарри Поттер и философский камень',
    'harry-potter-and-the-chamber-of-secrets': 'Гарри Поттер и тайная комната',
    'harry-potter-and-the-prisoner-of-azkaban': 'Гарри Поттер и узник Азкабана',
    'harry-potter-and-the-goblet-of-fire': 'Гарри Поттер и кубок огня',
    'harry-potter-and-the-order-of-phoenix': 'Гарри Поттер и орден феникса',
    'harry-potter-and-the-half-blood-prince': 'Гарри Поттер и принц полукровка',
    'harry-potter-and-the-dealthy-hallows': 'Гарри Поттер и дары смерти',
};

// Динамическая генерация метаданных
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {

  const {slug} = await params;
  const bookName = bookList[slug];

  return {
    title: `Книга - ${bookName}`,
    description: `Книга о волшебном мире и его обитателях - ${bookName}`,
    openGraph: {
      title: `Книга - ${bookName}`,
      description: `Книга о волшебном мире и его обитателях - ${bookName}`,
      images: ['/65_f7b6aced-59ec-4d5c-ba31-e34dcdbc9525_800x.webp'],
    },
  };
}

export default async function Page({ params, searchParams }: { 
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string }>;
}) {
  const properties = await params;
  const pageParams = await searchParams;
  const slug = properties.slug;
  const page = parseInt(pageParams?.page || "1", 10) || 1;
  const pageSize = 20000;

  // Путь к файлу
  const filePath = path.join(process.cwd(), "public", "texts", `${slug}.txt`);
  const bookName = bookList[slug];

  if (!fs.existsSync(filePath) || !bookName) {
    notFound();
  }

  // Читаем файл
  const content = fs.readFileSync(filePath, "utf-8");

  // Пагинация
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageContent = content.slice(start, end);

  // Всего страниц
  const totalPages = Math.ceil(content.length / pageSize);

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
                            label: `Книга: ${bookName}`,
                            href: `/texts/${slug}`,
                            active: true,
                        },
                    ]}
                />
            </div>
        </div>
        <div className="container py-[50px]">
            <h1 className="mb-4 text-3xl">Страница {page} из {totalPages}</h1>
            <pre className="whitespace-pre-wrap">{pageContent}...</pre>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-between mt-5">
                <div>
                    {page > 1 && (
                    <Link href={`?page=${page - 1}`} className="mr-5">
                        ← Предыдущая
                    </Link>
                    )}
                    {page < totalPages && (
                    <Link href={`?page=${page + 1}`}>
                        Следующая →
                    </Link>
                    )}
                </div>

                {/* Форма ввода номера страницы */}
                <form
                action=""
                method="get"
                className="ml-5"
                >
                <input
                    type="number"
                    name="page"
                    min={1}
                    max={totalPages}
                    defaultValue={page}
                    className="w-[50px] mr-5 text-base outline-0 border-0 border-b bg-transparent py-1"
                />
                <button type="submit" className="button-2 cursor-pointer">Перейти</button>
                </form>
            </div>
        </div>
    </>
  );
}
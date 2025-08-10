import { fetchProfessorById } from '@/app/lib/data';
import Breadcrumbs from '@/app/components/breadcrumbs';
import { notFound } from 'next/navigation';
import Image from "next/image";
import { Metadata } from "next";

// Динамическая генерация метаданных
export async function generateMetadata(props: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {

  const params = await props.params;
  const professorResult = await fetchProfessorById(params.id);

  if (!professorResult || professorResult.length === 0) {
    return { title: "Профессор не найден" };
  }

  const professor = professorResult[0];

  return {
    title: `Профессор - ${professor.name}`,
    description: `Информация о профессоре ${professor.name}`,
    openGraph: {
      title: `Профессор - ${professor.name}`,
      description: `Информация о профессоре ${professor.name}`,
    },
  };
}

export default async function Page(props: {
    params: Promise<{ id: string }>;
}) {
    const params = await props.params;
    const id = params.id;
    const professorResult = await fetchProfessorById(id);

    if (!professorResult || professorResult.length === 0) {
        notFound();
    }

    const professor = professorResult[0];

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
                                label: `Профессор: ${professor.name}`,
                                href: `/professor/${id}`,
                                active: true,
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='container flex flex-col md:flex-row items-start gap-[50px] py-[50px]'>
                <div className='w-full md:w-1/2'>
                    <Image
                        className="w-full object-cover object-top rounded-lg max-h-[400px] md:max-h-none"
                        src={professor.image_url}
                        alt={professor.name}
                        width={600}
                        height={600}
                    />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-2xl'>{professor.name}</h1>
                    <p className='text-grey-2 text-base my-2'>{professor.subject}</p>
                    <div className='text-grey-1' dangerouslySetInnerHTML={{ __html: professor.description }} />
                </div>
            </div>
        </>
    );
}
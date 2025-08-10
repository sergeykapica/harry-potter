import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <div className='bg-grey-1 h-[160px]'></div>
            <div className="flex flex-col items-center justify-center gap-2 py-[100px]">
                <h2 className="text-3xl font-semibold">
                    404
                </h2>
                <p>Книга не найдена.</p>
                <Link
                    href="/"
                    className="button-2 mt-4"
                >
                    Вернуться назад
                </Link>
            </div>
        </>
    );
}
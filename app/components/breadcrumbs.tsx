import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="block">
      <ol className='flex flex-col sm:flex-row justify-center text-xl md:text-2xl'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={breadcrumb.active ? 'text-yellow-1' : 'text-white'}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 hidden sm:inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

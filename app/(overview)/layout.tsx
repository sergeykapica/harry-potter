export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='section__detail'>
      {children}
    </section>
  );
}

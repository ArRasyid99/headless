import ClientLayout from "../client-layout";

async function getPage(slug: string) {
const res = await fetch(
  `http://bojamengaji.local/wp-json/wp/v2/pages?slug=${slug}`,
  { next: { revalidate: 60 } }
);

  if (!res.ok) return null;

  const data = await res.json();
  return data[0];
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPage(slug);

  if (!page) return <h1>Page not found</h1>;

  return (
   <ClientLayout>
     <main>
    {/* 1. Header Halaman */}
      <header className="bg-gray-50 border-b py-5">
        <div className="px-20">
          <h1 className="text-2xl md:text3xl font-semibold">
            {page.title.rendered}
          </h1>
          <p className="text-gray-500">
            Terakhir diperbarui: {new Date(page.date).toLocaleDateString('id-ID')}
          </p>
        </div>
      </header>

      {/* 2. Area Konten Utama */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div 
          className="prose prose-lg prose-slate max-w-none 
            /* Menghias link agar berwarna biru */
            prose-a:text-blue-600 hover:prose-a:text-blue-500
            /* Menghias list agar memiliki bullet point */
            prose-li:marker:text-blue-500
            /* Menghias kutipan (blockquote) */
            prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-1"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }} 
        />
      </article>
    </main>
   </ClientLayout>
  );
}

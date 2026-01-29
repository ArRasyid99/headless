import DonasiCard from "@/components/donasi/donasi-card";


export default function Donasi() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT CONTENT */}
        <section className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Mulai <span className="text-yellow-500">Investasi Akhirat</span> Anda Hari Ini
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            Tidak perlu menunggu kaya untuk bersedekah. Mulailah dari yang sedikit
            namun istiqomah. Allah Maha Melihat setiap butir kebaikan yang kita tanam.
          </p>

          <div className="rounded-xl bg-yellow-50 border border-yellow-100 p-5 max-w-xl">
            <p className="text-sm text-gray-700">
              💡 <strong>Tahukah Anda?</strong><br />
              “Barangsiapa membangun masjid karena mengharap ridha Allah,
              maka Allah akan membangunkan untuknya (rumah) seperti itu di surga.”
            </p>
            <span className="mt-2 block text-xs text-gray-500">(HR. Bukhari)</span>
          </div>
        </section>

        {/* RIGHT CARD */}
        <DonasiCard />
      </div>
    </main>
  );
}

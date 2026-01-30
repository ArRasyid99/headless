import { bankList } from "@/lib/bank";
import BankItem from "./bank-item";
import Image from "next/image";
import Link from "next/link";


export default function DonasiCard() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      
 

      {/* TABS */}
      <div className="flex border-b text-xl py-2">
        <Tab active>Daftar Rekening</Tab>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-gray-800">Transfer Manual</h3>

        <p className="text-sm text-gray-500">
          Silakan transfer ke salah satu rekening berikut.
          
        </p>

        {/* BANK LIST */}
        <div className="space-y-5">
          {bankList.map((bank) => (
            <BankItem key={bank.id} bank={bank} />
          ))}
        </div>

        {/* INFO */}
        <div className="rounded-xl bg-yellow-50 border border-yellow-100 py-4  p-4 text-sm text-gray-700">
          <p className="font-semibold mb-2">  ⚠️ <strong>Perhatian</strong></p>
          <p> Setelah melakukan transfer, dimohon untuk melakukan konfirmasi dengan mengirim bukti transfer melalui WhatsApp Admin.
          </p>
       </div>
        <div className="py-5">
           <Link
              href="https://api.whatsapp.com/send/?phone=6285156245768&text&type=phone_number&app_absent=0"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#00ff2f]
                hover:bg-[#00cd03]
                px-5 py-3
                text-xs text-white
              "
            >
              <Image
                src="/icons/wa.svg"
                alt=""
                width={16}
                height={16}
                loading="lazy"
              />
              Konfirmasi
            </Link>
        </div>
       
      </div>
    </div>
  );
}

function Tab({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`flex-1 py-3 font-semibold ${
        active
      }`}
    >
      {children}
    </button>
  );
}

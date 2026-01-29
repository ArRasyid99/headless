import { bankList } from "@/lib/bank";
import BankItem from "./bank-item";

export default function DonasiCard() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      
 

      {/* TABS */}
      <div className="flex border-b text-xl">
        <Tab active>Daftar Rekening</Tab>
       
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-gray-800">Transfer Manual</h3>

        <p className="text-sm text-gray-500">
          Silakan transfer ke salah satu rekening berikut.
          
        </p>

        {/* BANK LIST */}
        <div className="space-y-3">
          {bankList.map((bank) => (
            <BankItem key={bank.id} bank={bank} />
          ))}
        </div>

        {/* INFO */}
        <div className="rounded-xl bg-yellow-50 border border-yellow-100 p-4 text-sm text-gray-700">
          ⚠️ <strong>Penting:</strong><br />
          Setelah transfer manual, mohon konfirmasi bukti transfer ke WhatsApp Admin.
          <br />
          <a
            href="#"
            className="inline-block mt-2 font-medium text-yellow-600 hover:underline"
          >
            Konfirmasi via WhatsApp →
          </a>
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
      className={`flex-1 py-3 font-medium ${
        active
          ? "text-yellow-600 border-b-2 border-yellow-500"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

"use client";

import { Bank } from "@/lib/bank";
import { toast } from "sonner";

export default function BankItem({ bank }: { bank: Bank }) {
  const copyRekening = async () => {
    try {
      await navigator.clipboard.writeText(bank.rekening);

      toast.success("Berhasil disalin", {
        description: `Rekening ${bank.name}`,
        duration: 2000,
      });
    } catch {
      toast.error("Gagal menyalin rekening");
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border bg-gray-50 px-4 py-3">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-gray-800">
          {bank.name}
        </p>
        <p className="text-sm font-mono text-gray-700">
          {bank.rekening}
        </p>
        <p className="text-xs text-gray-400">
          a.n {bank.atasNama}
        </p>
      </div>

      <button
        onClick={copyRekening}
        className="shrink-0 rounded-md border px-3 py-1 text-xs hover:bg-gray-100"
      >
        Salin
      </button>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import quotesData from "@/lib/quotedata";

export function QuotesRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotesData.length);
    }, 10000); // ganti setiap 5 detik

    return () => clearInterval(timer);
  }, []);

  const quote = quotesData[index];

  return (
    <section className="quotes">
      <div key={index} className="quotes-content fade">
        <p className="quotes-source mb-5">{quote.source}</p>

        <p className="font-arabic mb-2 max-w-prose mx-auto text-center leading-loose">{quote.arabic}</p>

        <p className="quotes-translation">
          {quote.translation}
        </p>

        <p className="quotes-ref">({quote.reference})</p>
      </div>
    </section>
  );
}

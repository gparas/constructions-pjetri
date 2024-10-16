"use client";

import { useState } from "react";
import ChevronDownIcon from "@/icons/chevron-down";
import { FaqProps } from "./types";

const Faq = ({ faqs }: FaqProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const toggle = (index: number) =>
    setExpanded(expanded === index ? null : index);

  return (
    <section className="my-12">
      <div className="container md:max-w-2xl">
        <h2 className="mb-6 lg:text-center">Συχνές Ερωτήσεις</h2>
        {faqs.map((faq, index) => {
          const isExpanded = expanded === index;
          return (
            <div key={index} className={`py-4 ${index !== 0 && "border-t"}`}>
              <div
                className="flex items-center justify-between gap-3 py-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <p className="text-lg font-semibold text-gray-800">
                  {faq.title}
                </p>
                <ChevronDownIcon
                  width={24}
                  height={24}
                  className="transition-transform flex-shrink-0"
                  style={{
                    ...(isExpanded && { transform: "rotate(180deg)" }),
                  }}
                />
              </div>
              <p className={`mb-4 ${!isExpanded ? "hidden" : "block"}`}>
                {faq.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;

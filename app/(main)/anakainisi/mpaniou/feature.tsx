import MoneyIcon from "@/icons/money";
import PlumbingIcon from "@/icons/plumbing";
import SquareMeterIcon from "@/icons/square-meter";
import TrophyIcon from "@/icons/trophy";
import React from "react";

const FEATURES = [
  {
    icon: TrophyIcon,
    title: "Εμπειρία και Αξιοπιστία",
    description:
      "Χρόνια εμπειρίας και εξειδίκευση στον τομέα των ανακαινίσεων μπάνιου.",
  },
  {
    icon: PlumbingIcon,
    title: "Υψηλής ποιότητας υλικά",
    description:
      "Χρησιμοποιούμε υψηλής ποιότητας υλικά, για μέγιστη αξιοπιστία και αντοχή",
  },
  {
    icon: SquareMeterIcon,
    title: "Εξατομίκευση",
    description:
      "Διαμορφώνουμε τον χώρο σας σύμφωνα με τις προτιμήσεις και τις ανάγκες σας",
  },
  {
    icon: MoneyIcon,
    title: "Σταθερή Τιμή",
    description: "Μόνο 4.000€ για την πλήρη ανακαίνιση χωρίς επιπλέον χρεώσεις",
  },
];

const Feature = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <Icon
                  width={72}
                  height={72}
                  className="mx-auto mb-4 text-primary"
                />
                <h2 className="mb-2 text-lg">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;

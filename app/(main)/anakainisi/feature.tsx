import RenovationIcon from "@/icons/renovation";
import React from "react";

const FEATURES = [
  {
    percent: 20,
    title: "Αύξηση Αξίας Ακινήτου",
    description: "Έως και 20% αύξηση στην αξία του ακινήτου σας.",
  },
  {
    percent: 30,
    title: "Εξοικονόμηση Ενέργειας",
    description: "Εξοικονομήστε έως και 30% στους λογαριασμούς ενέργειας",
  },
  {
    percent: 100,
    title: "Ενίσχυση της Ποιότητας Ζωής",
    description: "Βελτιώστε το περιβάλλον διαβίωσης ή εργασίας",
  },
];

const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center mb-12 text-center gap-2">
          <RenovationIcon
            width={72}
            height={72}
            className="fill-primary mx-auto"
          />
          <p className="text-gray-500">Ανακαινίστε και Κερδίστε</p>
          <h2>Τα Πλεονεκτήματα μιας Ανακαίνισης</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-primary text-3xl font-bold mb-2">
                {feature.percent}%
              </div>
              <h3 className="mb-2 text-lg">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;

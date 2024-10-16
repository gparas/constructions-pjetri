import cn from "classnames";
import { FeaturesProps } from "./types";

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="my-12">
      <div className="container">
        <div
          className={cn("grid grid-cols-1 text-center", {
            "sm:grid-cols-2 lg:grid-cols-4 gap-8": features.length === 4,
            "md:grid-cols-3 gap-8 lg:gap-16": features.length === 3,
          })}
        >
          {features.map((feature, index) => {
            return (
              <div key={index}>
                {typeof feature.icon === "string" ? (
                  <div className="text-primary text-3xl font-bold mb-2">
                    {feature.icon}
                  </div>
                ) : (
                  feature.icon({
                    width: 64,
                    height: 64,
                    className: "text-primary mx-auto mb-2",
                  })
                )}
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

export default Features;

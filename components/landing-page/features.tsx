import cn from "classnames";
import { FeaturesProps } from "./types";

const Features = ({ title, subtitle, features }: FeaturesProps) => {
  return (
    <section className="my-12">
      <div className="container">
        {title && (
          <header className="flex flex-col items-center mb-12 text-center gap-2">
            {title && <h2>{title}</h2>}
            {subtitle && <p className="text-lg">{subtitle}</p>}
          </header>
        )}
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
                <h3 className="mb-2 text-lg">{feature.title}</h3>
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

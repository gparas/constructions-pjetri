import { StepsProps } from "./types";

const Steps = ({ title, description, steps }: StepsProps) => {
  return (
    <section className="my-12 py-12 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 w-full lg:w-10/12 mx-auto">
          <div className="lg:col-span-3">
            <h2 className="mb-3">{title}</h2>
            <p className="text-lg md:text-xl mb-4">{description}</p>
          </div>
          <div className="flex flex-col gap-8 lg:col-start-5 lg:col-span-3">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-primary text-2xl font-bold">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

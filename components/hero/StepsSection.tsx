import StepCard from "./StepCard";
import steps from "../../data/steps.json";

export default function StepsSection() {
  return (
    <>
      <div className="wrapper bg-white">
        <section className="container-fluid pt-container pb-container  relative z-10">
          <h1 className="text-responsive-5xl font-bold mb-card">
            Let's do it <strong> together</strong>
          </h1>

          <section className="grid gap-card grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step: any, index: number) => {
              return (
                <StepCard data={step} index={index} key={`step-${index}`} />
              );
            })}
          </section>
        </section>
      </div>
    </>
  );
}

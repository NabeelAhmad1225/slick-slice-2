import Head from "next/head";
import { useEffect, useState } from "react";
import QuoteClientInformation, {
  ClientInformation,
} from "../../../components/get-a-quote/QuoteClientInformation";
import QuoteProjectIdea, {
  ProjectIdea,
} from "../../../components/get-a-quote/QuoteProjectIdea";
import QuoteProjectScope, {
  ProjectScope,
} from "../../../components/get-a-quote/QuoteProjectScope";
import QuoteStep from "../../../components/get-a-quote/QuoteStep";
import QuoteServiceType, {
  ProjectServices,
} from "../../../components/get-a-quote/QuoteServiceType";
import QuoteStepContent from "../../../components/get-a-quote/QuoteStepContent";

export default function GetAQuote() {
  const steps = ["Services", "Idea", "Scope", "Information"];

  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(15);
  const [translateX, setTranslateX] = useState({
    transform: "translateX(0%)",
  });

  function updateProgress(number: number) {
    setCurrentStep(number);
    setProgress((100 / steps.length) * number);

    let index = number - 1;
    setTranslateX({
      transform: `translateX(${index * 100 * -1}%)`,
    });
  }

  const [services, setServices] = useState<null | ProjectServices>(null);
  const [idea, setIdea] = useState<null | ProjectIdea>(null);
  const [scope, setScope] = useState<null | ProjectScope>(null);
  const [clientInfo, setClientInfo] = useState<null | ClientInformation>(null);

  useEffect(() => {
    // console.log({ ...services, ...idea, ...scope, ...clientInfo });
  }, [services, idea, scope, clientInfo]);

  return (
    <>
      <Head>
        <title> Get A Quote - Slick Slice </title>
      </Head>

      <div className="wrapper container-fluid mt-card mb-card">
        <section className="relative w-full mx-auto flex gap-card justify-evenly max-w-screen-lg">
          <progress
            value={progress}
            max="100"
            className="w-full absolute left-0 top-5 sm:top-7 h-1 z-0"
          ></progress>

          {steps.map((step, index) => {
            return (
              <QuoteStep
                key={`step-${index}`}
                label={step}
                number={index + 1}
                onStepChange={updateProgress}
                currentStep={currentStep}
              />
            );
          })}
        </section>
      </div>

      <div className="wrapper w-screen overflow-hidden">
        <section className="screen container w-screen h-fit overflow-x-hidden ">
          <div
            className="slider w-full flex transition-all duration-500 ease-in-out   "
            style={translateX}
          >
            <QuoteStepContent isActive={currentStep == 1}>
              <QuoteServiceType
                step={1}
                currentStep={currentStep}
                onSubmit={setServices}
                onNext={updateProgress}
              />
            </QuoteStepContent>

            <QuoteStepContent isActive={currentStep == 2}>
              <QuoteProjectIdea
                step={2}
                currentStep={currentStep}
                onSubmit={setIdea}
                onNext={updateProgress}
                onBack={updateProgress}
              />
            </QuoteStepContent>

            <QuoteStepContent isActive={currentStep == 3}>
              <QuoteProjectScope
                step={3}
                currentStep={currentStep}
                onSubmit={setScope}
                onNext={updateProgress}
                onBack={updateProgress}
              />
            </QuoteStepContent>

            <QuoteStepContent isActive={currentStep == 4}>
              <QuoteClientInformation
                step={4}
                currentStep={currentStep}
                onSubmit={setClientInfo}
                onNext={(event) => {}}
                onBack={updateProgress}
              />
            </QuoteStepContent>
          </div>
        </section>
      </div>
    </>
  );
}

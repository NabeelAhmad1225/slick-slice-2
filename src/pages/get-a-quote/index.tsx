import Head from "next/head";
import { useEffect, useState } from "react";
import QuoteClientInformation, {
  ClientInformation,
} from "../../../components/get-a-quote/QuoteClientInformation";
import QuoteProjectIdea, {
  ProjectIdea,
} from "../../../components/get-a-quote/QuoteProjectIdea";
import QuoteStep from "../../../components/get-a-quote/QuoteStep";
import QuoteServiceType, {
  ProjectServices,
} from "../../../components/get-a-quote/QuoteServiceType";
import QuoteStepContent from "../../../components/get-a-quote/QuoteStepContent";
import { useRouter } from "next/router";

export default function GetAQuote() {
  const steps = ["Services", "Information"];

  const router = useRouter();
  const { id } = router.query;

  console.log("idddd", id);

  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(50);
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
  const [clientInfo, setClientInfo] = useState<null | ClientInformation>(null);

  useEffect(() => {
    console.log({ ...services, ...clientInfo });
  }, [services, clientInfo]);

  return (
    <>
      <Head>
        <title> Get A Quote - Slick Slice </title>
      </Head>

      {/* <div className="wrapper container-fluid mt-card mb-card">
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
      </div> */}

      <div className="wrapper w-screen ">
        <section className=" container-fluid  w-screen h-fit ">
          <div
            className="slider w-full flex transition-all duration-500 ease-in-out"
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
              <QuoteClientInformation
                step={2}
                currentStep={currentStep}
                onSubmit={setClientInfo}
                onNext={(event) => {}}
                onBack={updateProgress}
                services={services}
              />
            </QuoteStepContent>
          </div>
        </section>
      </div>
    </>
  );
}

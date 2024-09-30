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

// import { compileWelcomeTemplate, sendMail } from "../../lib/mail";

export default function GetAQuote() {
  // Update steps array to exclude "Scope"
  const steps = ["Services", "Idea", "Information"];

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
  const [clientInfo, setClientInfo] = useState<null | ClientInformation>(null);

  useEffect(() => {
    console.log({ ...services, ...idea, ...clientInfo });
  }, [services, idea, clientInfo]);

  const send = async () => {
    console.log("Nabeel");
    if (!idea || !services || !clientInfo) {
      console.log("Missing information. Please complete all fields.");
      return;
    }

    const emailBody = `
    <h3>New Quote Request</h3>
    <p><strong>Full Name:</strong> ${clientInfo.full_name}</p>
    <p><strong>Email:</strong> ${clientInfo.email}</p>
    <p><strong>Phone:</strong> ${clientInfo.phone}</p>
    <p><strong>Country:</strong> ${clientInfo.country}</p>
    <p><strong>NDA Signed:</strong> ${clientInfo.nda ? "Yes" : "No"}</p>
    <p><strong>Project Description:</strong> ${idea.description}</p>
    <p><strong>Services Requested:</strong> ${services.services.join(", ")}</p>
  `;

  console.log("Emailll" , clientInfo.email , clientInfo)
    const data = {
      from: clientInfo.email,
      subject: "Service Request",
      body: emailBody,
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        console.log("Email sent successfully");
      } else {
        const errorData = await res.json();
        console.log("Failed to send email:", errorData.message);
        console.log("Response Status:", res.status); // Log the response status
        console.log("Response Body:", errorData); // Log the entire response body
      }
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

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
              <QuoteProjectIdea
                step={2}
                currentStep={currentStep}
                onSubmit={setIdea}
                onNext={updateProgress}
                onBack={updateProgress}
              />
            </QuoteStepContent>

            <QuoteStepContent isActive={currentStep == 3}>
              <QuoteClientInformation
                step={3}
                currentStep={currentStep}
                onSubmit={setClientInfo}
                onNext={(event) => {}}
                sendEmail={send}
                onBack={updateProgress}
              />
              {/* {currentStep === 3 && (
              <div className="w-full flex justify-end mt-10">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={send}
                >
                  Submit
                </button>
              </div>
            )} */}
            </QuoteStepContent>
          </div>
        </section>
      </div>
    </>
  );
}

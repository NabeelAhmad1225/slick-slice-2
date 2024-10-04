import { ChangeEvent, useEffect, useState } from "react";
import { services } from "../../data/services.js";
import QuoteStepActions from "./QuoteStepActions";
import { QuoteStepContentForm } from "./QuoteStepContent";
import { sendError } from "next/dist/server/api-utils";

import { useRouter } from "next/router";
export interface ProjectServices {
  services: string[];
}

interface Props extends QuoteStepContentForm {
  onSubmit: (body: ProjectServices | null) => void;
}

export default function QuoteServiceType({
  onSubmit,
  onNext,
  currentStep,
  step,
}: Props) {
  const router = useRouter();
  const { id } = router.query;

  const [selectServices, setSelectedServices] = useState<string[]>([]);
  const [error, setError] = useState("");

  const [currentService, setCurrentService] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const service = services.find((service) => service.id === id);

      if (service) {
        setCurrentService(service);
      }
    }
  }, [id]);

  console.log('currentService' , currentService)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedServices([...selectServices, event.target.value]);
      console.log("selectedService :>> ", selectServices);
    } else {
      setSelectedServices(
        selectServices.filter((service) => service != event.target.value)
      );
    }
  };

  function onclickSubmitForm(event: any) {
    event.preventDefault();

    const form: HTMLFormElement = event.target;

    if (selectServices.length > 0) {
      onSubmit({ services: selectServices });
      onNext(step + 1);
      setError("");
    } else {
      onSubmit(null);
      setError("Please select at least 1 or more service(s)");
    }
  }

  return (
    <>
      <form noValidate={true} onSubmit={onclickSubmitForm}>
        <header className="mb-box ">
          <strong className=" text-responsive-3xl">
            {currentService?.label}
          </strong>
          <p className="text-error text-responsive-base">{error}</p>
        </header>

        <section className="flex w-full justify-center items-center flex-col gap-5 mt-10">
          {/* Display the nested services if the current service is found */}
          {currentService?.nestedServices?.map((nestedService: string, index: number) => {
            return (
              <article key={index} className="  sm:w-[750px] w-72 ">
                <input
                  type="checkbox"
                  name="services"
                  id={nestedService}
                  value={nestedService}
                  checked={selectServices.includes(nestedService)}
                  onChange={handleOnChange}
                  className="hidden peer"
                />

                <label
                  htmlFor={nestedService}
                  className="grid place-items-center rounded-md border-2 border-[#adb2c055]  card peer-[.hidden]:peer-checked:bg-[#49c2fa1c] peer-[.hidden]:peer-checked:border-accent-2 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105"
                >
                  <span className="font-body text-body sm:text-responsive-xl text-responsive-base  capitalize">
                    {nestedService}
                  </span>
                </label>
              </article>
            );
          })}
        </section>

        <QuoteStepActions noBack isActive={currentStep === step} />
      </form>
    </>
  );
}
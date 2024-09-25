import { ChangeEvent, useState } from "react";
import { services } from "../../data/services.js";
import QuoteStepActions from "./QuoteStepActions";
import { QuoteStepContentForm } from "./QuoteStepContent";
import { sendError } from "next/dist/server/api-utils";
// import ServiceCard from "../services/ServiceCard.jsx";
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
  let query = (router?.query?.selectedService ?? "").toString();

  const [selectServices, setSelectedServices] = useState<string[]>([query]);
  const [error, setError] = useState("");

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
          <h2 className=" text-responsive-2xl">
            What services would you like?
          </h2>
          <p className="text-error text-responsive-base">{error}</p>
        </header>

        <section className="grid grid-auto-col-200 gap-card">
          {services.map((service) => {
            return (
              <article key={service.id} className="">
                <input
                  type="checkbox"
                  name="services"
                  id={service.id}
                  value={service.id}
                  checked={selectServices.includes(service.id)}
                  onChange={handleOnChange}
                  className="hidden peer"
                />

                <label
                  htmlFor={service.id}
                  className="grid place-items-center rounded-md border-2 border-[#adb2c055] card peer-[.hidden]:peer-checked:bg-[#49c2fa1c] peer-[.hidden]:peer-checked:border-accent-2 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105"
                >
                  <img
                    src={service.svg}
                    alt={service.label}
                    className="w-20 h-auto "
                  />
                  <span className="font-body text-body text-responsive-base mt-box capitalize">
                    {service.label}
                  </span>
                </label>
              </article>
            );
          })}
        </section>

        <QuoteStepActions noBack isActive={currentStep == step} />
      </form>
    </>
  );
}

import { ChangeEvent, useState } from "react";
import Textarea from "../inputs/Textarea";
import QuoteStepActions from "./QuoteStepActions";
import { QuoteStepContentForm } from "./QuoteStepContent";

export interface ProjectIdea {
  idea: string;
  description: string;
}

interface Props extends QuoteStepContentForm {
  onSubmit: (body: ProjectIdea | null) => void;
}

export default function QuoteProjectIdea({
  onSubmit,
  onNext,
  onBack,
  currentStep,
  step,
}: Props) {
  const ideaOptions = [
    "Build Something New",
    "Improve Existing Project",
    "Extend My Team",
  ];
  const [idea, setIdea] = useState("");

  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  const handleOnChangeForIdeas = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setIdea(event.target.value);
    }
  };

  function onclickSubmitForm(event: any) {
    event.preventDefault();

    const form: HTMLFormElement = event.target;

    if (form.reportValidity() && !!idea) {
      onSubmit({
        idea: idea,
        description: description,
      });
      onNext(step + 1);
      setError("");
    } else {
      let msg = "";
      if (!!!idea) {
        msg = "Please select type of project.";
      }
      if (!!!description) {
        msg = msg + " Please enter description of your project.";
      }
      setError(msg);
      onSubmit(null);
    }
  }

  return (
    <>
      <form noValidate={true} onSubmit={onclickSubmitForm}>
        <header className="mb-box">
          <h2 className=" text-responsive-2xl">
            What Project Idea do you have in mind?
          </h2>
          <p className="text-error text-responsive-base">{error}</p>
        </header>

        <label className="pl-0.5 text-responsive-base font-body text-subheading block mb-2">
          Project Type
        </label>
        <section className="grid grid-auto-col-200 gap-card mb-card">
          {ideaOptions.map((ideaOption) => {
            return (
              <article key={ideaOption}>
                <input
                  type="radio"
                  name="idea"
                  id={ideaOption}
                  value={ideaOption}
                  onChange={handleOnChangeForIdeas}
                  className="hidden peer"
                />
                <label
                  htmlFor={ideaOption}
                  className="grid place-items-center rounded-md border-2 border-[#adb2c055] card peer-[.hidden]:peer-checked:bg-[#49c2fa1c] peer-[.hidden]:peer-checked:border-accent-2 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105"
                >
                  {ideaOption}
                </label>
              </article>
            );
          })}
        </section>
        <Textarea
          name="description"
          label="Project Description"
          value={description}
          required
          onChange={(event: any) => setDescription(event.target.value)}
        />
        <QuoteStepActions
          isActive={currentStep == step}
          onBack={() => onBack && onBack(step - 1)}
        />
      </form>
    </>
  );
}

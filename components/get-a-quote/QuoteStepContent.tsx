import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isActive: boolean;
}

export interface QuoteStepContentForm {
  currentStep: number;
  step: number;
  onBack?: (step: number) => void;
  onNext: (step: number) => void;
}

export default function QuoteStepContent({ children, isActive }: Props) {
  return (
    <>
      <section className="w-full flex-shrink-0 p-2 pt-card sm:card">
        <article
          className={`card style-card bg-white w-full h-fit  transition-all duration-1000 ease-out ${
            isActive ? "opacity-100 " : "opacity-0 pointer-events-none "
          }`}
        >
          {children}
        </article>
      </section>
    </>
  );
}

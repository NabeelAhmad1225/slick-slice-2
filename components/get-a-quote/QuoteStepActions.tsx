import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

interface Props {
  finalBtnText?: string;
  isActive: boolean;
  noBack?: boolean;
  onBack?: () => void;
}

export default function QuoteStepActions({
  onBack,
  noBack = false,
  isActive = false,
  finalBtnText,
}: Props) {
  return (
    <>
      <article
        className={`flex gap-container   flex-wrap mt-card transition-all duration-300 ease-in-out 
        ${isActive ? "scale-y-100 opacity-100 " : "scale-y-0 opacity-0 "} 
        ${noBack ? "justify-end" : "justify-between"}`}
      >
        {!noBack && (
          <button
            className="btn btn-secondary sm:btn-tertiary btn-icon-only sm:btn-md"
            type="button"
            onClick={onBack}
          >
            <ArrowLongLeftIcon className="btn-icon" />
            <span className="hidden sm:block">Back</span>
          </button>
        )}
        {finalBtnText ? (
          <button className="btn btn-primary" type="submit">
            {finalBtnText}
          </button>
        ) : (
          <button
            className="btn btn-primary btn-icon-only sm:btn-md"
            type="submit"
          >
            <span className="hidden sm:block">Let's talk</span>
            <ArrowLongRightIcon className="btn-icon" />
          </button>
        )}
      </article>
    </>
  );
}

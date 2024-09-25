export default function QuoteStep(props: any) {
  function emitStepNumber() {
    props.onStepChange(props.number);
  }
  return (
    <>
      <button
        onClick={emitStepNumber}
        className="relative z-10 w-28 h-fit grid gap-box justify-items-center"
      >
        <span
          className={`w-10 h-10 sm:w-14 sm:h-14 pb-1 rounded-full flex justify-center items-center font-accent text-center text-base sm:text-responsive-2xl transition-all duration-500 ease-in-out border-2 ${
            props.number <= props.currentStep
              ? "bg-accent-2 text-white border-transparent "
              : "bg-white text-[#adb2c0] border-[#adb2c055]"
          } ${
            props.number == props.currentStep
              ? "border-accent scale-110"
              : "scale-95"
          }`}
        >
          {props.number}
        </span>
        <span
          className={`hidden sm:block text-responsive-sm uppercase tracking-widest font-body ${
            props.number <= props.currentStep
              ? props.number == props.currentStep
                ? "font-black text-body"
                : "text-subheading"
              : "text-[#8c909b]"
          }`}
        >
          {props.label}
        </span>
      </button>
    </>
  );
}

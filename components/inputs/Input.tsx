import { ChangeEventHandler, useEffect, useState } from "react";

interface IInput {
  name: string;
  label: string;
  value: string | number;
  type?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  pattern?: RegExp | null;
  patternInstructions?: string;
  min?: string | number | undefined;
  max?: string | number | undefined;
  minLength?: number | undefined;
  maxLength?: number | undefined;
}

export default function Input({
  name,
  label,
  value,
  type = "text",
  placeholder = "",
  onChange,
  required = false,
  pattern = null,
  patternInstructions = "",
  min,
  max,
  minLength,
  maxLength,
}: IInput) {
  const [errorMsg, setErrorMsg] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    let msg = "";

    if (!isTouched) return;

    if (required && !!!value) msg = `${label} is required`;

    if (!!value) {
      if (min && value < min) msg = `Must be greater than or equal to ${min}`;
      if (max && value > max) msg = `Must be less than or equal to ${max}`;

      if (minLength && value.toString().length > minLength) {
        msg = `Must be ${minLength} characters or more`;
      }

      if (maxLength && value.toString().length > maxLength) {
        msg = `Must be ${maxLength} characters or less`;
      }

      if (pattern && !pattern.test(value.toString())) {
        msg = patternInstructions
          ? patternInstructions
          : `${label} is not valid`;
      }
    }

    setErrorMsg(msg);
  }, [value]);
  return (
    <>
      <article>
        <label
          htmlFor={name}
          className="pl-0.5 text-responsive-base font-body text-subheading block mb-2"
        >
          {label}
        </label>

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          pattern={(pattern?.source ?? "").toString()}
          title={errorMsg}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          className="outline-accent bg-white px-6 py-3 text-base rounded-md w-full border-2 border-[#adb2c055]"
          placeholder={placeholder}
          onChange={(event: any) => {
            onChange(event);
            setIsTouched(true);
          }}
        />

        {errorMsg && (
          <p className="text-responsive-sm text-error pt-1.5 pl-0.5">
            {errorMsg}
          </p>
        )}
      </article>
    </>
  );
}

import { ChangeEventHandler, useEffect, useState } from "react";

interface IInput {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  minLength?: number | undefined;
  maxLength?: number | undefined;
  rows?: number | undefined;
}

export default function Textarea({
  name,
  label,
  value,
  placeholder = "",
  onChange,
  required = false,
  minLength = 0,
  maxLength = 250,
  rows = 10,
}: IInput) {
  const [errorMsg, setErrorMsg] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    let msg = "";

    if (!isTouched) return;

    if (required && !!!value) msg = `${label} is required`;

    if (!!value) {
      if (minLength && value.length > minLength) {
        msg = `Must be ${minLength} characters or more`;
      }

      if (maxLength && value.length > maxLength) {
        msg = `Must be ${maxLength} characters or less`;
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

        <textarea
          id={name}
          name={name}
          value={value}
          required={required}
          title={errorMsg}
          minLength={minLength}
          maxLength={maxLength}
          rows={rows}
          className="outline-accent bg-white resize-none px-6 py-3 text-base rounded-md w-full border-2 border-[#adb2c055]"
          placeholder={placeholder}
          onChange={(event: any) => {
            onChange(event);
            setIsTouched(true);
          }}
        ></textarea>

        <div className="flex justify-between gap-card flex-wrap-reverse pt-1.5 pl-0.5">
          <p className="text-responsive-sm text-error ">{errorMsg}</p>
          <p
            className={`text-responsive-sm ${
              value.length < minLength ? "text-error" : "text-body"
            }`}
          >
            {value.length} / {maxLength}
          </p>
        </div>
      </article>
    </>
  );
}

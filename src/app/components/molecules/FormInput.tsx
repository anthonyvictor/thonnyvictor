import { IFormInput } from "@/app/types/formInput";
import { FunctionComponent, SetStateAction, Dispatch, Fragment } from "react";

export const FormInput: FunctionComponent<IFormInput> = ({
  label,
  maxLength,
  name,
  setValue,
  type,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className="">
        {label}
      </label>

      <div className="rounded-md flex bg-white">
        <input
          id={name}
          name={name}
          type={type}
          className="rounded-md p-1.5 flex-1 h-full outline-none bg-transparent"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          maxLength={maxLength}
        />
      </div>
    </>
  );
};

import { Dispatch, SetStateAction } from "react";
export interface IFormInput {
  name: string;
  label: string;
  maxLength: number;
  type: "tel" | "text" | "email";
  value: string;
  setValue: (newValue: string) => void;
}

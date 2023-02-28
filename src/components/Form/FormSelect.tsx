/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";

const FormSelect = ({
  label,
  name,
  rules,
  defaultValue = "",
  wrapperProps,
  options = [],
  ...rest
}: any) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  return (
    <select name={name} {...rest} onChange={onChange}>
      {options.map((option: any, index: number) => (
        <option
          typeof="submit"
          value={option.label}
          key={index}
          onChange={onChange}
          style={{ display: index === 0 ? "none" : "" }}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;

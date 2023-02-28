import { useController, useFormContext } from "react-hook-form";

const FormSearch = ({
  label,
  type = "text",
  name,
  rules,
  placeholder = "",
  defaultValue = "",
  ...rest
}: any) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default FormSearch;

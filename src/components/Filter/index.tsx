import FormSelect from "../Form/FormSelect";

const option1 = [
  {
    label: "Coats",
  },
  {
    label: "All",
  },
  {
    label: "Short",
  },
  {
    label: "Medium",
  },
  { label: "Long" },
];

const option2 = [
  {
    label: "Color",
  },
  {
    label: "All",
  },
  {
    label: "Black",
  },
  {
    label: "Red",
  },
  { label: "Yellow" },
  {
    label: "Golden",
  },
];

const option3 = [
  {
    label: "Gender",
  },
  {
    label: "All",
  },
  {
    label: "Male",
  },
  { label: "Female" },
];

const Filter = () => {
  return (
    <div className="home-filter">
      <FormSelect name="coat" options={option1} />
      <FormSelect name="color" options={option2} />
      <FormSelect name="gender" options={option3} />
    </div>
  );
};

export default Filter;

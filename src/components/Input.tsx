import { Field } from "formik";

interface InputProps {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  options: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({ error, touched, label, options }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <label className="text-blue-950 font-semibold" htmlFor={options.id}>
          {label}
        </label>
        <p className="font-semibold text-red-500">
          {error && touched ? error : ""}
        </p>
      </div>
      <Field
        {...options}
        className={`w-full border outline-none text-blue-950 py-2 px-4 rounded-lg ${
          error && touched ? "border-red-500" : "border-gray-400"
        }`}
      />
    </div>
  );
};

export default Input;

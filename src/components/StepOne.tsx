import Input from "./Input";

interface StepOneProps {
  errorName: string | undefined;
  errorEmail: string | undefined;
  errorPhone: string | undefined;
  touchedName: boolean | undefined;
  touchedEmail: boolean | undefined;
  touchedPhone: boolean | undefined;
}

const StepOne = ({
  errorName,
  errorEmail,
  errorPhone,
  touchedName,
  touchedPhone,
  touchedEmail,
}: StepOneProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Input
        label="Name"
        error={errorName}
        touched={touchedName}
        options={{ id: "name", name: "name", placeholder: "Name" }}
      />
      <Input
        label="Email Address"
        error={errorEmail}
        touched={touchedEmail}
        options={{ id: "email", name: "email", placeholder: "Email Address" }}
      />
      <Input
        label="Phone Number"
        error={errorPhone}
        touched={touchedPhone}
        options={{
          id: "phone",
          name: "phone",
          placeholder: "e.g. +1 234 567 890",
        }}
      />
    </div>
  );
};

export default StepOne;

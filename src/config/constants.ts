import { StepProps } from "./interfaces";

const stepsArray: StepProps[] = [
  {
    step: 1,
    label: "YOUR INFO",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    isActive: false,
  },
  {
    step: 2,
    label: "SELECT PLAN",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing",
    isActive: false,
  },
  {
    step: 3,
    label: "ADD-ONS",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    isActive: false,
  },
  {
    step: 4,
    label: "SUMMARY",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming",
    isActive: false,
  },
];

export { stepsArray };

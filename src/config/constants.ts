import { Addon, FormFields, Plan, StepSidebarProps } from "./interfaces";
import * as Yup from "yup";

const stepsArray: StepSidebarProps[] = [
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

const plans: Plan[] = [
  {
    id: 0,
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    yearlyFreeMonths: 2,
    imgPath: "icon-arcade.svg",
  },
  {
    id: 1,
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    yearlyFreeMonths: 2,
    imgPath: "icon-advanced.svg",
  },
  {
    id: 2,
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    yearlyFreeMonths: 2,
    imgPath: "icon-pro.svg",
  },
];

const addons: Addon[] = [
  {
    id: 0,
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 1,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 2,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

const formInitialValues: FormFields = {
  name: "",
  email: "",
  phone: "",
  isMonthly: true,
  plan: plans[0],
  addons: [],
};

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  isMonthly: Yup.boolean().required("Billing frequency is required"),
  plan: Yup.object().required("Plan is required"),
  addons: Yup.array()
    .of(Yup.object().required())
    .min(0)
    .required("Add-ons are required"),
});

export { stepsArray, formInitialValues, formSchema, plans, addons };

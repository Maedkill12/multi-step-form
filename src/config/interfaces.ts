interface StepSidebarProps {
  step: number;
  label: string;
  title: string;
  description: string;
  isActive: boolean;
}

interface Plan {
  id: number;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyFreeMonths: number;
  imgPath: string;
}

interface Addon {
  id: number;
  name: string;
  description: string;
  yearlyPrice: number;
  monthlyPrice: number;
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  isMonthly: boolean;
  plan: Plan;
  addons: Addon[];
}

export type { FormFields, Plan, Addon, StepSidebarProps };

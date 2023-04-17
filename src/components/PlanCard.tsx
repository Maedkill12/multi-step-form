import { Plan } from "../config/interfaces";

type PlanCardProps = Plan & {
  isSelected: boolean;
  isMonthly: boolean;
  setSelected: (id: number) => void;
};

const PlanCard = ({
  id,
  name,
  monthlyPrice,
  yearlyPrice,
  yearlyFreeMonths,
  imgPath,
  isSelected,
  isMonthly,
  setSelected,
}: PlanCardProps) => {
  return (
    <div>
      <img src={imgPath} alt="plan-icon" />
      <h3>{name}</h3>
      <p>${isMonthly ? monthlyPrice + "/mo" : yearlyPrice + "/yr"}</p>
      <p>${!isMonthly && yearlyFreeMonths + " months free"}</p>
    </div>
  );
};

export default PlanCard;

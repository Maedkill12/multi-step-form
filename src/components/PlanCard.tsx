import { Plan } from "../config/interfaces";
import "../assets/_3cd50088-83f8-4065-b95e-bec87d7e8889.jpg";
import { useSnapshot } from "valtio";
import state from "../config/store";

type PlanCardProps = Plan & {
  isSelected: boolean;
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
  setSelected,
}: PlanCardProps) => {
  const snap = useSnapshot(state);
  return (
    <div
      onClick={() => setSelected(id)}
      className={`py-4 px-3 flex flex-col justify-between border border-gray-400 hover:border-blue-950 w-[125px] h-[175px] rounded-lg cursor-pointer ${
        isSelected && "bg-slate-100 border-blue-950"
      }`}
    >
      <div className="flex-1">
        <img src={imgPath} alt="plan-icon" />
      </div>
      <div>
        <h3 className="font-semibold text-blue-950">{name}</h3>
        <p className="text-sm text-gray-400">
          ${snap.isMonthly ? monthlyPrice + "/mo" : yearlyPrice + "/yr"}
        </p>
        <p className="text-blue-950">
          {!snap.isMonthly && yearlyFreeMonths + " months free"}
        </p>
      </div>
    </div>
  );
};

export default PlanCard;

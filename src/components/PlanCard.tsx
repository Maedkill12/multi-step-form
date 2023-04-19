import { Plan } from "../config/interfaces";
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
      className={`py-4 px-3 flex flex-row md:flex-col gap-3 md:gap-0 md:justify-between border border-gray-400 hover:border-blue-950 w-full md:w-[125px] h-fit md:h-[175px] rounded-lg cursor-pointer ${
        isSelected && "bg-slate-100 border-blue-950"
      }`}
    >
      <div className="md:flex-1">
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

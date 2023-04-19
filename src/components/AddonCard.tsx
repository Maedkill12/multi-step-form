import { useSnapshot } from "valtio";
import { Addon } from "../config/interfaces";
import state from "../config/store";

type AddonCardProps = Addon & {
  isSelected: boolean;
  setSelected: (id: number) => void;
};

const AddonCard = ({
  id,
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  isSelected,
  setSelected,
}: AddonCardProps) => {
  const snap = useSnapshot(state);
  return (
    <div
      onClick={() => setSelected(id)}
      className={`flex flex-row items-center p-4 border border-blue-950 rounded-lg cursor-pointer ${
        isSelected && "bg-slate-100"
      }`}
    >
      <div className="flex-1 flex flex-row gap-8">
        <input type="checkbox" checked={isSelected} value="" readOnly />
        <div className="flex flex-col">
          <h3 className="font-semibold text-blue-950">{name}</h3>
          <p className="font-semibold text-gray-400">{description}</p>
        </div>
      </div>
      <div>
        <p className="text-blue-500">
          +${snap.isMonthly ? `${monthlyPrice}/mo` : `${yearlyPrice}/yr`}
        </p>
      </div>
    </div>
  );
};

export default AddonCard;

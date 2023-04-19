import { addons } from "../config/constants";
import AddonCard from "./AddonCard";
import { useSnapshot } from "valtio";
import state from "../config/store";

const StepThree = () => {
  const snap = useSnapshot(state);
  return (
    <div className="flex flex-col gap-4">
      {addons.map((addon) => (
        <AddonCard
          key={addon.id}
          id={addon.id}
          name={addon.name}
          description={addon.description}
          monthlyPrice={addon.monthlyPrice}
          yearlyPrice={addon.yearlyPrice}
          isSelected={snap.addonSelected.includes(addon.id)}
          setSelected={(id) => {
            const addons = snap.addonSelected;
            const isAdded = addons.includes(id);
            if (isAdded) {
              state.addonSelected = addons.filter((a) => a !== addon.id);
            } else {
              state.addonSelected.push(id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default StepThree;

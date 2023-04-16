import { stepsArray } from "../config/constants";
import { useSnapshot } from "valtio";
import Step from "./Step";
import state from "../config/store";

const Sibebar = () => {
  const snap = useSnapshot(state);

  return (
    <div className="bg-blue-600 rounded-lg py-8 px-4 flex flex-col gap-8 w-[300px] h-[600px]">
      {stepsArray.map((step) => (
        <Step
          key={step.step}
          isActive={snap.activeStep === step.step}
          step={step.step}
          label={step.label}
        />
      ))}
    </div>
  );
};

export default Sibebar;

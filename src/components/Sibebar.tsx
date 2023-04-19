import { stepsArray } from "../config/constants";
import { useSnapshot } from "valtio";
import StepSidebar from "./StepSidebar";
import state from "../config/store";
import bgDesktop from "../assets/bg-sidebar-desktop.svg";

const Sibebar = () => {
  const snap = useSnapshot(state);

  return (
    <div
      className="bg-blue-600 bg-cover rounded-lg py-8 px-4 flex flex-col gap-8 w-[300px] h-[600px]"
      style={{ backgroundImage: `url(${bgDesktop})` }}
    >
      {stepsArray.map((step) => (
        <StepSidebar
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

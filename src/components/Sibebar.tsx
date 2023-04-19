import { stepsArray } from "../config/constants";
import { useSnapshot } from "valtio";
import StepSidebar from "./StepSidebar";
import state from "../config/store";
import bgDesktop from "../assets/bg-sidebar-desktop.svg";
import bgMobile from "../assets/bg-sidebar-mobile.svg";
import useMobile from "../hooks/useMobile";

const Sibebar = () => {
  const { isMobile } = useMobile();
  const snap = useSnapshot(state);

  return (
    <div
      className="bg-blue-600 absolute z-0 top-0 left-0 md:static bg-cover rounded-none md:rounded-lg py-8 px-4 flex flex-row justify-center items-start md:justify-start md:flex-col gap-4 md:gap-8 w-full md:w-[200px] lg:w-[300px] h-[250px] md:h-[600px]"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
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

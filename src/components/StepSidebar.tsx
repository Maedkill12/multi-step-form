import state from "../config/store";

interface Props {
  step: number;
  label: string;
  isActive: boolean;
}

const StepSidebar = ({ step, label, isActive }: Props) => {
  return (
    <div
      onClick={() => {
        state.activeStep = step;
      }}
      className="flex flex-row items-center gap-4 cursor-pointer"
    >
      <div
        className={`w-[48px] h-[48px] flex items-center justify-center 
        rounded-full bg-none border
        ${
          isActive
            ? "bg-blue-300 border-transparent text-blue-600"
            : "bg-blue-600 border-white text-white"
        }`}
      >
        <p className="text-lg font-bold">{step}</p>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-xs text-slate-300 hidden md:block">STEP {step}</p>
        <p className="text-sm font-bold text-white hidden md:block">{label}</p>
      </div>
    </div>
  );
};

export default StepSidebar;

import { useSnapshot } from "valtio";
import state from "../config/store";
import { stepsArray } from "../config/constants";

const Form = () => {
  const snap = useSnapshot(state);
  const title = stepsArray[snap.activeStep - 1].title;
  const desc = stepsArray[snap.activeStep - 1].description;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-base text-gray-400">{desc}</p>
    </div>
  );
};

export default Form;

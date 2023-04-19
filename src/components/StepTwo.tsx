import { useSnapshot } from "valtio";
import { motion, AnimatePresence } from "framer-motion";
import { plans } from "../config/constants";
import PlanCard from "./PlanCard";
import state from "../config/store";

const StepTwo = () => {
  const snap = useSnapshot(state);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            id={plan.id}
            imgPath={plan.imgPath}
            isSelected={snap.planSelected === plan.id}
            monthlyPrice={plan.monthlyPrice}
            name={plan.name}
            setSelected={(id) => {
              state.planSelected = id;
            }}
            yearlyFreeMonths={plan.yearlyFreeMonths}
            yearlyPrice={plan.yearlyPrice}
          />
        ))}
      </div>

      <div className="bg-slate-50 py-4 w-full flex flex-row items-center justify-center rounded-lg">
        <div className="flex flex-row gap-4">
          <p
            className={`font-semibold ${
              snap.isMonthly ? "text-blue-950" : "text-gray-400"
            }`}
          >
            Monthly
          </p>
          <div
            onClick={() => {
              state.isMonthly = !state.isMonthly;
            }}
            className={`w-[50px] rounded-xl bg-blue-950 flex items-center cursor-pointer p-1 ${
              snap.isMonthly ? "justify-start" : "justify-end"
            }`}
          >
            <AnimatePresence>
              <motion.div
                className="w-[20px] h-[20px] rounded-full bg-white"
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30,
                }}
              />
            </AnimatePresence>
          </div>
          <p
            className={`font-semibold ${
              snap.isMonthly ? "text-gray-400" : "text-blue-950"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;

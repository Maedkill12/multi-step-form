import { useSnapshot } from "valtio";
import state from "../config/store";
import { addons, plans } from "../config/constants";
import { useEffect, useState } from "react";

const StepFour = () => {
  const [total, setTotal] = useState(0);
  const snap = useSnapshot(state);
  const plan = plans[snap.planSelected];

  useEffect(() => {
    let subTotal = 0;
    subTotal += snap.isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
    snap.addonSelected.forEach((id) => {
      const addon = addons[id];
      subTotal += snap.isMonthly ? addon.monthlyPrice : addon.yearlyPrice;
    });
    setTotal(subTotal);
  }, [snap.isMonthly, plan.monthlyPrice, plan.yearlyPrice, snap.addonSelected]);

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-slate-100 px-6 py-8 rounded-lg">
        <div className="flex flex-row items-center pb-4">
          <div className="flex-1">
            <p className="font-bold text-blue-950">
              {plan.name} ({snap.isMonthly ? "Monthly" : "Yearly"})
            </p>
            <p
              onClick={() => {
                state.activeStep = 2;
              }}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Change
            </p>
          </div>
          <div>
            <p className="font-bold text-blue-950">
              $
              {snap.isMonthly
                ? `${plan.monthlyPrice}/mo`
                : `${plan.yearlyPrice}/yr`}
            </p>
          </div>
        </div>
        {snap.addonSelected.length > 0 && (
          <div className="border-t border-gray-400 pt-4 flex flex-col gap-3">
            {snap.addonSelected.map((id) => {
              const addon = addons[id];
              return (
                <div key={id} className="flex flex-row justify-between">
                  <p className="text-gray-400 font-semibold">{addon.name}</p>
                  <p className="font-semibold text-blue-950">
                    +$
                    {snap.isMonthly
                      ? `${addon.monthlyPrice}/mo`
                      : `${addon.yearlyPrice}/yr`}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-around">
        <p className="text-gray-400 font-semibold">
          Total(per {snap.isMonthly ? "month" : "year"})
        </p>
        <p className="font-bold text-blue-500">
          +$
          {snap.isMonthly ? `${total}/mo` : `${total}/yr`}
        </p>
      </div>
    </div>
  );
};

export default StepFour;

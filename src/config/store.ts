import { proxy } from "valtio";

const state = proxy({
  activeStep: 1,
  planSelected: 0,
  isMonthly: true,
  addonSelected: [] as Array<number>,
});

export default state;

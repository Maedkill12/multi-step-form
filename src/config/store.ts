import { proxy } from "valtio";

const state = proxy({
  activeStep: 1,
});

export default state;

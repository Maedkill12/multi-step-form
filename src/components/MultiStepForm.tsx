import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import state from "../config/store";
import { formInitialValues, formSchema, stepsArray } from "../config/constants";
import { Formik, Form } from "formik";
import { FormFields } from "../config/interfaces";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { slideAnimation } from "../config/motion";
import { useState } from "react";
import Confirmation from "./Confirmation";

const MultiStepForm = () => {
  const [confirmed, setConfirmed] = useState(false);
  const snap = useSnapshot(state);
  const title = stepsArray[snap.activeStep - 1].title;
  const desc = stepsArray[snap.activeStep - 1].description;

  const handleSubmit = (values: FormFields) => {
    console.log("submitting");
    setConfirmed(true);
  };

  return (
    <>
      {!confirmed ? (
        <div className="flex flex-col py-8 mt-[100px] md:mt-0 bg-white md:bg-none md:relative z-10 px-4 md:px-0 rounded-lg md:rounded-none">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-2">{title}</h2>
            <p className="text-base text-gray-400">{desc}</p>
          </div>
          <Formik
            initialValues={formInitialValues}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col md:h-[450px] w-full md:w-[450px] lg:w-[550px] md:relative">
                <AnimatePresence>
                  <motion.div
                    className="md:flex-1 w-full md:w-[450px] mt-8"
                    key={snap.activeStep}
                    {...slideAnimation("down")}
                  >
                    {snap.activeStep === 1 && (
                      <StepOne
                        errorName={errors.name}
                        errorEmail={errors.email}
                        errorPhone={errors.phone}
                        touchedName={touched.name}
                        touchedEmail={touched.email}
                        touchedPhone={touched.phone}
                      />
                    )}
                    {snap.activeStep === 2 && <StepTwo />}
                    {snap.activeStep === 3 && <StepThree />}
                    {snap.activeStep === 4 && <StepFour />}
                  </motion.div>
                </AnimatePresence>
                <div className="flex flex-row justify-between w-full left-0 md:w-[450px] absolute bottom-0 bg-white md:bg-none px-2 py-4 md:px-0 md:py-0">
                  {snap.activeStep > 1 ? (
                    <p
                      className="text-gray-400 font-bold hover:text-blue-950 cursor-pointer flex items-center"
                      onClick={() => --state.activeStep}
                    >
                      Go Back
                    </p>
                  ) : (
                    <div />
                  )}
                  {snap.activeStep < 4 ? (
                    <p
                      onClick={() => ++state.activeStep}
                      className="bg-blue-950 hover:bg-blue-900 rounded-lg border-none px-4 py-2 text-white cursor-pointer"
                    >
                      Next Step
                    </p>
                  ) : (
                    <button
                      type="submit"
                      className="bg-blue-950 hover:bg-blue-900 rounded-lg border-none px-4 py-2 text-white"
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <Confirmation />
      )}
    </>
  );
};

export default MultiStepForm;

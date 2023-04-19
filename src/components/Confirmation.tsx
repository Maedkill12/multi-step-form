const Confirmation = () => {
  return (
    <div className="w-full md:relative px-4 py-8 md:px-0 md:py-0 left-0 rounded-lg md:rounded-none z-10 mt-[100px] md:mt-0 bg-white md:w-[450px] lg:w-[550px] flex flex-col justify-center items-center gap-4">
      <img src="icon-thank-you.svg" alt="Thanks icon" />
      <h3 className="text-3xl font-bold text-blue-950">Thank you!</h3>
      <p className="text-center text-gray-400 md:w-[400px] lg:w-[450px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Confirmation;

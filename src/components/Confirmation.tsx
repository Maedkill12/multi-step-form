const Confirmation = () => {
  return (
    <div className="w-[550px] flex flex-col justify-center items-center gap-4">
      <img src="icon-thank-you.svg" alt="Thanks icon" />
      <h3 className="text-3xl font-bold text-blue-950">Thank you!</h3>
      <p className="text-center text-gray-400 w-[450px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Confirmation;

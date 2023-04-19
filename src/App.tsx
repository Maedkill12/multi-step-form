import MultiStepForm from "./components/MultiStepForm";
import Sibebar from "./components/Sibebar";

function App() {
  return (
    <main className="min-h-screen bg-slate-300 flex justify-start md:justify-center items-start md:items-center">
      <div className="p-4 md:bg-white rounded-lg w-full mx-2 md:mx-0 md:w-fit h-fit flex flex-col md:flex-row gap-8 lg:gap-16">
        <Sibebar />
        <MultiStepForm />
      </div>
    </main>
  );
}

export default App;

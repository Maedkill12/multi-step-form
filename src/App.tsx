import MultiStepForm from "./components/MultiStepForm";
import Sibebar from "./components/Sibebar";

function App() {
  return (
    <main className="min-h-screen bg-slate-300 flex justify-center items-center">
      <div className="p-4 bg-white rounded-lg w-fit h-fit flex flex-row gap-16">
        <Sibebar />
        <MultiStepForm />
      </div>
    </main>
  );
}

export default App;

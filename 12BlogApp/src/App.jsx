import "./App.css";

function App() {
  console.log(import.meta.env.VITE_SOME_KEY); // "123"

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Blog App BY Developer Ankit
      </h1>
    </>
  );
}

export default App;

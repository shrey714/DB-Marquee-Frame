import "./App.css";
import MarqueeDemoVertical from "./components/MarqueeDemoVertical";

function App() {
  return (
    <div
      className="h-svh w-svw"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #081C4F 35%, #0B3B7B 70%, #2A7FD0 100%)",
      }}
    >
      <MarqueeDemoVertical />
    </div>
  );
}

export default App;

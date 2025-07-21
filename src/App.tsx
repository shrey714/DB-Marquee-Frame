import "./App.css";
import { lazy, Suspense } from "react";

// Lazy load the MarqueeDemoVertical component
const LazyMarqueeDemo = lazy(() => import("./components/MarqueeDemoVertical"));

function App() {
  return (
    <div
      className="h-svh w-svw"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #081C4F 35%, #0B3B7B 70%, #2A7FD0 100%)",
      }}
    >
      <Suspense fallback={<div></div>}>
        <LazyMarqueeDemo />
      </Suspense>
      <p className="leading-0 text-[1px]">random text</p>
    </div>
  );
}

export default App;

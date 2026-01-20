import Navigation from "./components/Navigation";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen flex flex-column content-center justify-center grow py-16 bg-linear-120 from-primary-500 from-10% to-offwhite-500">
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

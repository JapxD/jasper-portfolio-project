import Navigation from "./components/Navigation";

import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center py-8 bg-linear-120 from-offwhite from-30% to-primary gap-10">
        <BrowserRouter>
          <Navigation />
          <Home />
          <Socials />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode}-mode`}>
      {/* NAVBAR */}
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      <FadeIn transitionDuration={700}>
        {/* 🔒 LANDING PAGE (ALWAYS DARK) */}
        <section className="landing-force-dark">
          <Main />
        </section>

        {/* 🌗 REST OF APP (THEME AWARE) */}
        <section className="theme-aware">
          <Expertise />
          <Timeline />
          <Project />
        </section>
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="info-row">
        <InfoCard
          image={icon1}
          title="Declarative"
          message="React makes it painless to create interactive UIs."
        />

        <InfoCard
          image={icon2}
          title="Components"
          message="Build encapsulated components that manage their state."
        />

        <InfoCard
          image={icon3}
          title="Single-Way"
          message="A set of immutable values are passed to the component's."
        />

        <InfoCard
          image={icon4}
          title="JSX"
          message="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;

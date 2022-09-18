import React from "react";
import Accordion from "./components/Accordion";
import { Data } from "./components/Data";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {Data.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;

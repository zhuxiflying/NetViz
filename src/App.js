import React, { useEffect, useState } from "react";
import { csv } from "d3";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv("./data/tsne_layout.csv").then((data) => {
      setData(data);
    });
  }, []);

  return <div className="App"></div>;
};

export default App;

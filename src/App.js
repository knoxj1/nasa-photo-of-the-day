
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMaker from './components/CardMaker';
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("first render");
    axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=RBP19n0j2dmuIhg11lL2PE5NmPpldMHcjaw3sMPX")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

 

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    {data
     ? <CardMaker title={data.title}
                  url={data.url}
                  explanation={data.explanation}
                  date={data.date} />
       : <div>Loading</div>}

  
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMaker from './components/CardMaker';
import "./App.scss";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=RBP19n0j2dmuIhg11lL2PE5NmPpldMHcjaw3sMPX")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

 

  return (
    <div className="App">

    
     <CardMaker title={data.title}
                  url={data.url}
                  explanation={data.explanation}
                  />

  
    </div>
  );
}

export default App;
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Infos from "./components/Infos";
import Menus from "./components/Menus";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-07022022.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <div className="container">
        <div>Logo</div>
        <Infos data={data} />
        <Menus data={data} />
      </div>
    </div>
  );
};

export default App;

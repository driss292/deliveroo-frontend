import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Category from "./components/Category";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);

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

  const handleClickPanier = () => {
    const newPanier = [...panier];
    newPanier.push("Titre");
    setPanier(newPanier);
  };

  const handlePanierDelete = () => {
    let newPanier = [...panier];
    newPanier = [];
    setPanier(newPanier);
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Hero restaurant={data.restaurant} />
      <div className="panier">
        {panier.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        <button onClick={handlePanierDelete}>Valider mon panier</button>
        <div>
          <span></span>
        </div>
      </div>

      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Category
              key={index}
              handleClickPanier={handleClickPanier}
              category={category}
            />
          )
        );
      })}
    </div>
  );
};

export default App;

const Category = ({ category, handleClickPanier }) => {
  return (
    <div>
      <h2>{category.name}</h2>

      {category.meals.map((meal, index) => {
        return (
          <div key={index} onClick={handleClickPanier} className="card">
            <h3>{meal.title}</h3>
            <p>{meal.description.slice(0, 50)}...</p>
            {meal.picture && (
              <img className="picture" src={meal.picture} alt="" />
            )}
            <span>{meal.price} €</span>
            {meal.popular && <span>★ Populaire</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Category;

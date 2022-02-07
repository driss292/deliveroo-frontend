const Menus = ({ data }) => {
  return (
    <>
      {data.categories.map((item, index) => {
        return (
          <div className="menu-items">
            <h2 key={index}>{item.name}</h2>
            {item.meals.map((item, index) => {
              return (
                <div className="menu-item-card">
                  <h3>{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">{item.price}</p>
                  <div className="menu-item-picture">
                    <img src={item.picture} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default Menus;

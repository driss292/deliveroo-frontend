const Infos = ({ data }) => {
  return (
    <div className="resto">
      <div className="resto-infos">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div>
        <img src={data.restaurant.picture} alt="image" />
      </div>
    </div>
  );
};

export default Infos;

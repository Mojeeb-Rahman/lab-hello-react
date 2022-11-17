const InfoCard = (props) => {
  return (
    <div className="card-info">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default InfoCard;

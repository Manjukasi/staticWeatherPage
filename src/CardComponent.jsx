/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const CardComponent = ({
  id,
  weather,
  icon,
  cardClass,
  value,
  data,
  weatherState
}) => {
  return (
    <div className="analysis-container">
      <div className={`${cardClass} dialog`}>
        <h5>{weather}</h5>
        <span className="material-icons-outlined icons">{icon}</span>
      </div>
      <div className="value">{value}</div>
      <div className="des">
        {weatherState.map(function (obj, index) {
          const { label, values } = obj;
          return label.map((innerValue) => {
            return <span key={`${label} + ${values}`}>{innerValue}</span>;
          });
        })}
      </div>
      <>{data}</>
    </div>
  );
};

export default CardComponent;

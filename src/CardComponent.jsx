const CardComponent = ({id,weather, icon, cardClass, value, data , weatherState}) => {
return (
    <div className="analysis-container">
    <div className={`${cardClass} dialog`}>
       <h5>{weather}</h5>
       <span className="material-icons-outlined icons">{icon}</span>
    </div>
    <div className="value">{value}</div>
    <div className={`des ${ id > weatherState.length - 1 ? 'last-items' : ''}`}>
    {weatherState.map(function (obj,index) {
        const {label}= obj;
    return label.map((innerValue) => {
    return <span key={index}>{innerValue}</span>;
  });
  })}
    </div>
    <>{data}</>
</div>
)
}

export default CardComponent;



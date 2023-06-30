import React from 'react';
import image from './static data.png';

const GraphContent = () => {
  return (
    <div className="graph outline">
      <div className="graph-container">
        <div className="hours">Upcoming hours</div>
        <div className="buttons">
          <button className="btn">
            Rain Precipitation
            <span className="material-icons-outlined">expand_more</span>
          </button>
          <button className="btn">
            Next days
            <span className="material-icons-outlined">navigate_next</span>
          </button>
        </div>
      </div>
      <img className="graph-image" src={image} alt="graph" />
    </div>
  );
};
export default GraphContent;

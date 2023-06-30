import React from 'react';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="half-container">
        <div className="first-part">
          <span className="material-icons-outlined add-icon">add</span>
          <span className="material-icons-outlined horizon">more_horiz</span>
          <div className="celsius">
            <span className="alpha">
              <span className="material-icons-outlined button-left">
                radio_button_unchecked
              </span>
              C
            </span>
            <span className="material-icons-outlined toggle">toggle_on</span>
            <span className="alpha">
              <span className="material-icons-outlined button-right">
                radio_button_unchecked
              </span>
              F
            </span>
          </div>
        </div>
        <div className="middle-part">
          <div className="place">
            <div className="city">
              <span className="material-icons-outlined">near_me</span>New York,
              USA{' '}
            </div>
            <span>
              <span className="material-icons-outlined">wb_twilight</span>
              07:19
            </span>
          </div>
          <div className="current-day">
            Today 28 Sept
            <span>
              <span className="material-icons-outlined">wb_twilight</span>19:32
            </span>
          </div>
        </div>
        <div className="temperature">
          <span className="material-icons-outlined navigate left">
            chevron_left
          </span>
          <div className="degrees">
            27{' '}
            <span className="material-icons-outlined circle">
              radio_button_unchecked
            </span>
          </div>
          <span className="material-icons-outlined navigate right">
            navigate_next
          </span>
        </div>
        <div className="sunny">
          <span className="material-icons-outlined">wb_sunny</span>
          Sunny
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default SideBar;

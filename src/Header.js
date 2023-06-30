import React from 'react'
const Header = () => {
  return (
   <div>
      <div className="header">
        <div className="sub-header">
         <h3>Welcome back Isabella</h3>
         <p>Check out today`s weather information</p>
        </div>
        <div className="profile">
        <span className="material-icons-outlined profile-status">more_horiz</span>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Header

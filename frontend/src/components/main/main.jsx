import React from 'react'
import './main.css';
function Main() {
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className='main_container'>
        <nav className="navbar">
            <h1>Garde-Assu</h1>
            <button className='white_btn' onClick={handleLogout}>
                Logout
            </button>
        </nav>
    </div>
  )
}

export default Main;
import React, { useState, useEffect } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Nav.css";

function Nav() {
  //   const [show, handleShow] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://raw.githubusercontent.com/Swanand-Wagh/Alias-Netflix-Clone/master/public/logo.png"
        alt="NETFLIX LOGO"
      />
      <div className="nav_links">
        <p>Home</p>
        <p>TV Shows</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p>My List</p>
      </div>
      <div className="nav_links profile">
        {/* <SearchIcon style={{ marginRight: "1.25rem" }} />
        <p>CHILDREN</p>
        <NotificationsIcon /> */}
        <img
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg_t3WBJBy4SEC_9uU-gi71PNXXdInw5uRQ&usqp=CAU"
          alt="NETFLIX LOGO"
        />
      </div>
    </div>
  );
}

export default Nav;

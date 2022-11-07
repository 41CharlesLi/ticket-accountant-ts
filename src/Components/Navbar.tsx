import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const showMenu = () => {
        setShowNav(!showNav);
    };

    return (
        <header>
            <div className="wrapper">
                <div className="navContainer">
                    <a href="./">
                        <img
                            // src={logo}
                            alt="ticket accountant logo"
                            className="logo"
                        />
                    </a>
                    <nav className="navContainer">
                        <ul className={showNav ? "navList show" : "navList"}>
                            <li
                                onClick={() => {
                                    showMenu();
                                }}
                            >
                                <Link to="/" className="navLink">
                                    Home
                                </Link>
                            </li>
                            {/* {!isAuth ? ( */}
                            {/* <li
                                    onClick={() => {
                                        showMenu();
                                    }}
                                >
                                    <Link to="/login" className="navLink">
                                        Login
                                    </Link>
                                </li>
                            ) :  */}
                            {/* ( */}
                            <>
                                <li
                                    onClick={() => {
                                        showMenu();
                                    }}
                                >
                                    <Link
                                        to={{
                                            pathname: "/myConcerts",
                                        }}
                                        className="navLink"
                                    >
                                        My Concerts
                                    </Link>
                                </li>
                                <li
                                    onClick={() => {
                                        showMenu();
                                    }}
                                    className="logOutBtnContainer"
                                >
                                    <button>Log Out</button>
                                </li>
                            </>
                            {/* )} */}
                        </ul>
                        <button
                            className="hamburger-menu desktop-hidden"
                            onClick={() => {
                                showMenu();
                            }}
                        >
                            <span className="sr-only">hamburger menu</span>
                            {!showNav ? (
                                <i className="fa fa-bars"></i>
                            ) : (
                                <i className="fa-solid fa-xmark"></i>
                            )}{" "}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Navbar;

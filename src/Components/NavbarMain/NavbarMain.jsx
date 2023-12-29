import "./NavbarMain.css";
import logo from "../../asset/img/logo.svg";
import { useState } from "react";

const NavbarMain = () =>{
    const [showMobileNavList, setShowMobileNavList] = useState(true);

    const handleShowMobileList = () =>{
        setShowMobileNavList(!showMobileNavList);
    }
    return(
        <>
            <main className="navbar-main">
                <section className="navbar-section">
                    <div className="navbar-grid">
                        <div className="container">
                            <div className="row navbar-row">
                                <div className="col-6">
                                    <img className="logo" src={logo} alt="logo" />
                                </div>
                                <div className="col-6">
                                    <ul className="nav-list d-none d-lg-flex">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Projects</li>
                                        <li>Contact</li>
                                    </ul>
                                    <button className={`navbar-toggle-btn d-flex d-lg-none ${!showMobileNavList ? 'rotate-btn' : ''}`} onClick={()=>handleShowMobileList(showMobileNavList)}>
                                        <i className={`fa ${showMobileNavList ? 'fa-bars' : 'fa-close'}`}></i>
                                    </button>
                                </div>
                                <div className="col-12">
                                    <ul className={`mobile-nav-list d-flex d-lg-none ${showMobileNavList ? 'active' : ''}`}
                                        >
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Projects</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default NavbarMain;
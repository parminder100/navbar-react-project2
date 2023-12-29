import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Header = () =>{
    return(
        <>
            <header>
                <div className="navbar-grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="project-name">Navbar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
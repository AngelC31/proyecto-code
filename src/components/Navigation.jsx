import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                <img className="img" src="https://firebasestorage.googleapis.com/v0/b/ghostgym-f8921.appspot.com/o/Gold%20Luxury%20Initial%20Circle%20Logo.png?alt=media&token=cd5fe2a1-d98d-4596-aab2-bbdbb04ac748" alt="" width="60" height="60" />
                <button id="BtnCanva" data-bs-toggle="offcanvas" data-bs-target="#demo">

                </button>
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/" >Ghost Gym</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/user">Usuario</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Buscar</button>
                        </form>

                    </div>

                </div>


            </nav>

            <div className="offcanvas offcanvas-end" id="demo">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Heading</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Some text lorem ipsum.</p>
                    <p>Some text lorem ipsum.</p>
                    <p>Some text lorem ipsum.</p>
                    <button className="btn btn-secondary" type="button">A Button</button>
                </div>
            </div>

        </div>
    )
}
export default Navigation;
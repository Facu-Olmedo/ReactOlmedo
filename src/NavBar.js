import logo from './logo.svg';

function NavBar(){
    return(
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src={logo} alt="logo" width="40" height="32"/> 
                <span className="fs-4">EMarketCommerce</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
        </header>
    )
}

export default NavBar;
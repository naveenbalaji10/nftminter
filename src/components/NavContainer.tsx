import logo from '../assets/head.png'


const NavContainer = () => {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container nav">
        <div className="inner-container">
          <div className='img-container'>
            <img src={logo} alt="" className="logo"></img>
          </div>
          <p className='logotitle'>NFT</p>
        </div>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#connectwallet">Mint Nft</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactus">Contact Us!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>;
};

export default NavContainer;

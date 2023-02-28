const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="grid wide">
          <div className="row">
            <div className="col l-2-4 m-6 c-12">
              <h3 className="footer__heading">Store location</h3>
              <ul className="footer__heading-list">
                <li className="footer__heading-item">
                  <span>LOT 34 Tran Bach Dang Street, Da Nang</span>
                </li>
                <li className="footer__heading-item">
                  <span>contact@example.com</span>
                </li>
                <li className="footer__heading-item">
                  <span>[1800]-33-22-11</span>
                </li>
              </ul>
            </div>

            <div className="col l-2-4 l-o-2-4 m-6 c-12">
              <h3 className="footer__heading">Infomations</h3>
              <ul className="footer__heading-list">
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    About us
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Blog
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Check out
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Contact
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col l-2-4 m-6 c-12">
              <h3 className="footer__heading">My account</h3>
              <ul className="footer__heading-list">
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    My account
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Contact
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Shopping Cart
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            <div className="col l-2-4 m-6 c-12">
              <h3 className="footer__heading">Categories</h3>
              <ul className="footer__heading-list">
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Dog
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Cat
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Bird
                  </a>
                </li>
                <li className="footer__heading-item">
                  <a href="/" className="footer__heading-item-link">
                    Rabbit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer__description">
        <div className="grid wide">
          <h3>Copyright © 2023 Petfinder | Powered by PhamBao</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

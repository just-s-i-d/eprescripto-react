import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <span className="brand">ePrescripto</span>
        <span className="tagline">Simplify,Organise,Thrieve with ePrescripto</span>
        <span className="social-icons-container">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-twitter"></i>
        </span>
      </div>
      <div className="footer-container flex">
        <div className="details-container flex">
          <h3>Address</h3>
          <span>
            <i className="fa fa-map-marker"></i>Location
          </span>
          <span>
            <i className="fa fa-phone"></i>+01 1234567890
          </span>
          <span>
            <i className="fa fa-envelope"></i>Email@email.com
          </span>
        </div>
        <div className="important-links-container">
          <h3>Usefull Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#doctors">Doctors</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="#contact-us">Contact</a>
            </li>
          </ul>
        </div>
        <div className="stay-updated">
          <h3>Stay Updated</h3>
          <span>For latest updates, subscribe to our news letter</span>
          <div className="subscribe flex">
            <input type="email" />
            <button className="styled">subscribe</button>
          </div>
        </div>
      </div>
      <div className="bottom-bar">&copy; 2023 All Rights Reserved</div>
    </footer>
  );
};
export default Footer;

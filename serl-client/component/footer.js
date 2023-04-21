export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="waves">
          <div classNameName="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon_item"><a className="social-icon_link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a></li>
          <li className="social-icon_item"><a className="social-icon_link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a></li>
          <li className="social-icon_item"><a className="social-icon_link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a></li>
          <li className="social-icon_item"><a className="social-icon_link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
        </ul>
        <div className="menu">
          <p>
            © 2023 SERL - Software Engineering Research Lab
            Indian Institute of Information Technology Allahabad | Designed by HPSOAS
          </p>
        </div>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </footer>
    </div>
  );
}


export default function Footer() {
  return (
    <div className='footer-container'>
    <div className="row">
        <div className="col">
          <img src="logo.png" className="logo"></img>
          <p>this is the serl lab!!</p>

      </div>
      <div className="col">
        <h3>Office <div className="underline"><span></span> </div></h3>
        <p>iiita</p>
        <p>jhalwa,prayagraj</p>
        <p>up, pin 211015,india</p>
        <p className="email-id">shivani14306@gmail.com</p>
        <h4>23456789</h4>
      </div>
      <div className="col">
        <h3>LINKS <div className="underline"><span></span> </div></h3>
        <ul>
            <li><a herf="">HOME</a></li>
            <li><a herf="">SERVICES</a></li>
            <li><a herf="">ABOUT US</a></li>
            <li><a herf="">FEATURES</a></li>
            <li><a herf="">CONTACTS</a></li>
        </ul>
      </div>
      <div className="col">
        <h3>Newsletter <div className="underline"><span></span> </div></h3>
        <form>
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="enter your id" required></input>
            <button type="submit"><i className="fas fa-arrow-right"></i></button>
        </form>
        <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-pinterest"></i>
            
        </div>
      </div>
    </div>
    {/* <div>
    <p className="copyright">iiita copyright@2023-redsercved</p>
    </div> */}

    </div>
  );
}


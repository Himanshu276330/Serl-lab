
import Navbar from "../component/navbar";
import Footer from "../component/footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="wrapper">
          <div className="row row-features">
            <div className="block-wrap h50 mob-auto">
              <div className="block">
                <div className="new-feature-slider">
                  <div id="slider-1" className="feature-slide active">
                    <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                      <div className="block">
                        {/* <div className="feature-slide-image">
                          <div className="img1" >
                            <img src=""></img>
                          </div>
                        </div> */}
                        <img className="img2" src="data:image/jpeg;base64,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"></img>
                      </div>
                    </div>
                    <div className="block-wrap w50 center-content mob-auto">
                      <div className="block">
                        <div className="content-centered overview-text">
                          <h2 className="fakeh1"><b>SERL LAB</b></h2>
                          <span className="divider-wave blue-wave"></span>
                          <p></p>
                          <p>The Software Engineering Research Lab (SERL) at IIIT Allahabad is to be established to undertake world-class research in designing of complex, largescale software-intensive systems of scalable solutions, which are steered by business needs. The objective of the establishment of SERL@IIITA is to cover cross-disciplinary research domains and to address real industrial software engineering challenges. Recent developments in data driven industries, cyber physical systems, smart city applications and business intelligence solutions have significant scope for software development industries and finding solutions to underneath challenges in collaboration with industry experts is genuinely needed to make sure that the solutions are evaluated thoroughly and fit in the industrial context. Thus the establishment of Software Engineering Research Lab at IIITA may provide a strong platform to researchers and students to showcase their research potential world-wide.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div id="slider-2" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="">
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/08/325-image3.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">High Performance</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>Turbojets are known for outperforming almost all comparable craft on the water, whether it is pulling a waterskier, cruising along the coast or whipping in and out of tight corners. With top speeds of up to 53 mph/85 kph, jumping aboard
                          a Turbojet and firing up the engine is a thrill you will never tire of.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div id="slider-3" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="">
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/08/445-image2.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">Supreme Stability &amp; Buoyancy</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>The Turbojet design places the helmsman at the stern of the craft in the most secure position for maximum control. By utilising a centrally mounted engine and an inflatable tube, which is positioned close to the water, the Turbojet is
                          supremely stable whether static or running at speed. This makes for easy and comfortable passenger boarding and a safe, enjoyable ride at high speed. What’s more, due to the inherent hull buoyancy, the tender will float even without
                          the inflatable tube.
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div id="slider-4" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="" >
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/10/features32.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">More torque, less maintenance jet pumps</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>Our purpose-made jet pumps are not only more efficient, they are also incredibly safe, as there are no exposed moving parts. With stainless steel impeller and double-coated pumps, they provide excellent protection against corrosion,
                          giving you long life with minimal maintenance.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div id="slider-5" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="" >
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/10/features51.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">Manoeuvrability in all conditions</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>Get pinpoint accuracy at both high and low speeds. The unique Turbojet hull, control system and jet pump make getting in and out of tight spots an easy task. Drive up to a yacht or handle confined spaces with utmost confidence. At the
                          other end of the scale, you can open up the throttle for superior high-speed straightline tracking and precision controlled turns.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div id="slider-6" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="" >
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/08/325-image2.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">Clear Instrumentation</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>Have peace of mind with instrumentation to keep you informed of what’s going on above and below the water. As well as standard instruments, you can specify optional extras such as depth sounder, vhf radio and chartplotter. You can even
                          opt to have a removable steering wheel to make storage easier and as an effective anti-theft device.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div id="slider-7" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="" >
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/10/features61.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">Sitting comfortably</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>The seating on a Turbojet is not only comfortable, it has been designed to keep you drier and more secure. With a commanding helm position from the stern, you can keep an eye on your passengers, and seat between three and seven adults.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* <div id="slider-8" className="feature-slide">
                  <div className="block-wrap w50 new-feature-image-wrap mob-auto">
                    <div className="block">
                      <div className="feature-slide-image">
                        <div className="">
                          <img src="http://www.williamsjettenders.com/wp-content/uploads/2015/07/285-image1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-wrap w50 center-content mob-auto">
                    <div className="block">
                      <div className="content-centered overview-text">
                        <h2 className="fakeh1">Easily replaceable tubes</h2>
                        <span className="divider-wave blue-wave"></span>
                        <p></p>
                        <p>The inflatable tubes on all Williams tenders have been designed to be removed and replaced, quickly and easily. So you can get back on the water with minimal fuss. </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
                {/* <div className="controls new-feature-controls">
                  <span className="control button-prev"></span>
                  <span className="control button-next"></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
      <div><Footer /></div>

    </div>
  );
}


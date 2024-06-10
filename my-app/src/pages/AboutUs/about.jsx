import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './aboutus.css'
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div>
      <section id="about" className="block about-block">
      <Container>
  <Row className="justify-content-center align-items-center h-100">
    <Col sm={12} md={6} >
      <img
        className="logo img-fluid "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOh21KUtucsopTK92Dh3TN_kpgz4ZtJ9_7g&s"
        alt="Steam Logo" 
      />
      <p>
        Steam is the ultimate destination for playing, discussing, and
        creating games.
      </p>
      <Row>
        <Col
          sm={6}
          className="d-flex align-items-center justify-content-center online"
        >
          <FontAwesomeIcon icon={faCircle} />
          <span className="ml-2 text-dark">Online</span>
         
        </Col>
        <Col
          sm={6}
          className="d-flex align-items-center justify-content-center offline"
        >
                  <FontAwesomeIcon icon={faCircle} />

          <span className="ml-2 text-dark">Offline</span>
          
                                          
        </Col>
        <p></p>
      </Row>
    </Col>
    <Col sm={12} md={6}>
      <img
        className="img-fluid mt-5"
        src="https://wegame.gtimg.com/g.2001918-r.ea725/info/6bbed403724dc0d725aa5beb33374688.jpg/1000"
        alt="Responsive Image"
      />
    </Col>
  </Row>
</Container>

      </section>
      <section id="services" className="block about-block">
        <Container fluid>
          <Container>
            <div className="title-holder text-dark">
              <h2>Access Games Instantly</h2>
              <h6>
                With nearly 30,000 games from AAA to indie and everything
                in-between. <br></br>Enjoy exclusive deals, automatic game updates, and
                other great perks.
              </h6>
              <h6 className="browse">Browse the Store -&gt;</h6>
            </div>
            <Row className=" mt-5">
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/810660/header.jpg"
                  alt="Game Image 1"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/941973/header.jpg"
                  alt="Game Image 2"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/387990/header.jpg"
                  alt="Game Image 3"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/251570/header.jpg"
                  alt="Game Image 4"
                  className="img-fluid"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/690640/header.jpg"
                  alt="Game Image 5"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1328660/header.jpg"
                  alt="Game Image 6"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1222700/header.jpg"
                  alt="Game Image 7"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1259420/header.jpg"
                  alt="Game Image 8"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section id="work" className="block about-block">
        <div className="learnAbout">
          <Container>
            <div className="title-holder"></div>
            <Row className="learnabout">
              <Col sm={6}>
                <div className="first">
                  <br />
                  <br />
                  <h2 className="Community  text-dark">
                    Join the Community
                  </h2>
                  <h4 className="comment text-dark">
                    Meet new people, join groups, form 
                    clans, chat in-game and more! With 
                    over 100 million potential friends (or <br />
                    enemies), the fun never stops.
                  </h4>
                  <h6 className="browse">Visit the Community -&gt;</h6>
                </div>
              </Col>
              <Col sm={6}>
                <div className="image-group" >
                  <img
                    className="communityImg2" style={{borderRadius:'10px'}}
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/106713572/original/e523bf38b13d452502a09ab54f3e128d900107f8/post-for-you-on-very-big-and-popular-steam-group.jpg"
                    alt="Community Image 2"
                  />
                </div>
              </Col>

              <Col sm={6}>
                <img
                  className="hardwareImg1" style={{marginLeft:'-80px', marginTop:'50px'}}
                  src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt1.png?v=2"
                  alt="Hardware Image 1"
                />
              </Col>
             
              <Col sm={6}>
                <div className="Experience" style={{marginLeft:'-50px', marginTop:'50px'}}>
                  <h2 className="Community  text-dark">
                    Experience
                    
                    Steam Hardware
                  </h2>
                  <h4 className="comment  text-dark">
                    We created the Steam Deck and the <br />
                    Valve Index headset to make gaming on <br />
                    the PC even better.
                  </h4>
                  <h6 className="browse">Experience Steam Hardware -&gt;</h6>
                </div>
              </Col>

              <Col sm={6}>
                <div className="Release" style={{marginTop:'-180px'}}>
                  <br />
                  <br />
                  <h2 className="Community  text-dark align-items-between">
                  Release your 
                    
                    Game
                  </h2>
                  <h4 className="comment  text-dark">
                  Steamworks is the set of tools and <br></br>services that help game developers and <br></br>publishers get the most out of<br></br> distributing games on Steam.
                  </h4>
                  <h6 className="browse">Learn about Steamworks -&gt;</h6>
                </div>
              </Col>
              <Col sm={6}>
                <div className="image-group ">
                  <img
                    className="communityImg2"
                    src="https://cdn.akamai.steamstatic.com/store/about/cta_hero_steamworks_pt1.png"
                    alt="Community Image 2" style={{marginLeft:'0px', height:'516px', width:'344', marginTop:'-50px'}}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="features" className="block features-block" style={{ marginTop:'-90px'}}>
  <Container fluid>
    <div className="title-holder  text-dark">
      <Container>
        <h2>Features</h2>
        <div className="subtitle">
          We are constantly working to bring new updates and features to Steam, such as
        </div>
      </Container>
    </div>
    <Row>
      <Row xl={12} className="mt-5">
        <Col sm={4}>
          <div className="feature  text-dark">
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
            </center>
            <h3 className="iconh3 ">Steam Chat </h3>
            <p className="iconp">
              Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
            </center>
            <h3 className="iconh3  text-dark">Steam Discussions</h3>
            <p className="iconp text-dark">
              Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img className="icon" src="https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-television-icon-png-image_1871537.jpg" style={{borderRadius:'10px'}}></img>
            </center>
            <h3 className="iconh3  text-dark">Steam Broadcast</h3>
            <p className="iconp  text-dark">
              Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.
            </p>
          </div>
        </Col>
      </Row>
      <Row xl={12}>
        <Col sm={4}>
          <div className="feature">
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
</svg>
            </center>
            <h3 className="iconh3  text-dark">Steam Workshop</h3>
            <p className="iconp  text-dark">
              Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img className="icon" src="https://purepng.com/public/uploads/large/drawing-mobile-afy.png"></img>
            </center>
            <h3 className="iconh3  text-dark">Available on Mobile</h3>
            <p className="iconp  text-dark">
              Access Steam anywhere from your iOS or Android device with the Steam mobile app.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img className="icon" src="https://cdn-icons-png.freepik.com/512/2/2127.png"></img>
            </center>
            <h3 className="iconh3  text-dark">Early Access to Games</h3>
            <p className="iconp  text-dark">
              Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.
            </p>
          </div>
        </Col>
      </Row>
       <Row xl={12}>
        <Col sm={4}>
          <div className="feature">
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-alphabet-uppercase" viewBox="0 0 16 16">
  <path d="M1.226 10.88H0l2.056-6.26h1.42l2.047 6.26h-1.29l-.48-1.61H1.707l-.48 1.61ZM2.76 5.818h-.054l-.75 2.532H3.51zm3.217 5.062V4.62h2.56c1.09 0 1.808.582 1.808 1.54 0 .762-.444 1.22-1.05 1.372v.055c.736.074 1.365.587 1.365 1.528 0 1.119-.89 1.766-2.133 1.766zM7.18 5.55v1.675h.8c.812 0 1.171-.308 1.171-.853 0-.51-.328-.822-.898-.822zm0 2.537V9.95h.903c.951 0 1.342-.312 1.342-.909 0-.591-.382-.954-1.095-.954zm5.089-.711v.775c0 1.156.49 1.803 1.347 1.803.705 0 1.163-.454 1.212-1.096H16v.12C15.942 10.173 14.95 11 13.607 11c-1.648 0-2.573-1.073-2.573-2.849v-.78c0-1.775.934-2.871 2.573-2.871 1.347 0 2.34.849 2.393 2.087v.115h-1.172c-.05-.665-.516-1.156-1.212-1.156-.849 0-1.347.67-1.347 1.83"/>
</svg>
            </center>
            <h3 className="iconh3 text-dark">Multilingual</h3>
            <p className="iconp text-dark">
              Creating a global community is important to us, that's why our client support 28 languages and counting
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
            </center>
            <h3 className="iconh3 text-dark">Purchases Made Easy </h3>
            <p className="iconp text-dark">
             Our storefont support 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature ">
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
  <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
  <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
</svg>
            </center>
            <h3 className="iconh3  text-dark ">Ez to play</h3>
            <p className="iconp  text-dark">
            In this game, you can be anything you want. Literally, anything!
            </p>
          </div>
        </Col>
      </Row>
    </Row>
  </Container>
</section>

    </div>
  );
}

export default About;

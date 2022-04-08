import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Swap from './Swap';
import ReactGA from "react-ga4";
ReactGA.initialize('G-R7YNL6K3BY');


function App() {
  ReactGA.pageview('/');

  useEffect(() => {
    Aos.init({ duration: 2000});
    Aos.init({disable: 'mobile'});
  }, []);

  if (!(typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask)) {
    alert('MetaMask is not installed!');
  }
  
  return (
    <React.Fragment>
      <div id = "stars-bg" className = "head">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> 
      <header id="header" className="fixed-top align-items-center">
        <div className="container first-container d-flex align-items-center justify-content-between flex-wrap">
          <div className="logo ">
            <a href="#logo" style = {{textDecoration: 'none'}}>
              <div className = "d-flex">
              <img src="images/logo.png" alt="" className=" logo-img" style = {{position: 'relative', top:5}}/>
              <div className = "Name" >
                Shiko Inu
              </div>
              </div>
            </a>
          </div>
          <div className = "btn" style = {{ marginLeft: 'auto' }}>
            <a href = "#b" style = {{textDecoration: 'none'}}>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            </a>
          </div>
          <nav id="navbar" className="navbar ">
          
            <ul style ={{ color: 'white'}}>
            <li className = "items hide">
              <a className = "navlink scrollto" href = "#rewards" >
                Features
              </a>
            </li>
            <li className = "items hide">
              <a className = "navlink scrollto" href = "#howtobuy" >
                How to buy?
              </a>
            </li>
            <li className = "items hide">
              <a className = "navlink scrollto" href = "#token" >
                Tokenomics
              </a>
            </li>
            <li className = "items hide">
              <a className = "navlink scrollto" href = "#roadmap" >
                Moon Map
              </a>
            </li>
            <li className = "items hide">
              <a className = "navlink scrollto" href = "#exchanges" >
                Buy Shiko Inu
              </a>
            </li>
            </ul>
          </nav>
        </div>
      </header>         
      <section id = "hero" className = "d-flex align-items-center" style ={{height:'100%', marginTop: 60}} >
        <div className = "container">
          <div className = "row">
            <div className = "col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos = "fade-up" >
                Shiko Inu
              </h2>
              <h1 data-aos = "fade-up" data-aos-delay = "400" >
                The ultimate meme coin has landed
              </h1>
              <p data-aos = "fade-up" data-aos-delay = "800" >
              Shiko Inu ($Shiko) is an innovative crypto currency with true anti-dump features. It is a Binance Smart Chain based token which rewards HODLers of the token and protects them from Whales. Fully decentralized and owned by its community. Just hold onto your Shikos and enjoy passive income lifestyle.
              </p>
              
              <div className="row" >
            <div className = "d-flex main" style = {{position: 'relative', width: '100%', alignItems: 'center'}}>
              <a className = "buy col-lg-4 col-sm-12 col-12" data-aos = "fade-up" data-aos-delay = "1200" href = "#exchanges">
                Buy Shiko Inu
              </a>
              <div className = " col-lg-8 col-sm-12 d-flex flex-gap">
              <div className = " flex-shrink-1">{/* <div> className="col-lg-1 col-md-4 col-6" > */}
              <a href="https://t.me/TeamShikoInu">
                 <img src="images/telegram.png" className="img-fluid socials" alt="" data-aos="fade-up" data-aos-delay="1200" style = {{height: 'inherit'}}/>
               </a>
             </div>
              <div className = "flex-shrink-1">{/* <div>className="col-lg-1 col-md-4 col-6"> */}
              <a href="https://twitter.com/TeamShikoInu">
                 <img src="images/twitter.png" className="img-fluid socials" alt="" data-aos="fade-up" data-aos-delay="1200" style = {{height: 'inherit'}}/>
               </a>
              </div>
             <div className = "flex-shrink-1">{/* <div> className="col-lg-1 col-md-4 col-6"> */}
              <a href="https://dextools.io/">
                 <img src="images/dextools.png" className="img-fluid socials" alt="" data-aos="fade-up" data-aos-delay="1200" style = {{height: 'inherit'}}/>
               </a>
              </div>
              <div className = "flex-shrink-1">{/* <div> className="col-lg-1 col-md-4 col-6"> */}
                <a href="https://etherscan.io/">
                 <img src="images/etherscan.png" className="img-fluid socials" alt="" data-aos="fade-up" data-aos-delay="1200" style = {{height: 'inherit'}}/>
               </a>
             </div>
              </div>
           </div>
            
          </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
              <img src="images/hero.png" className="img-fluid animated" alt="jumpcat" width="500" style={{alignSelf: 'flex-start'}}/>
            </div>
          </div>
        </div>
      </section>
      </div>
      <section id="rewards" className="features" style = {{ marginTop: 100}}>
        <div className="container features" >
        <div className="section-title" data-aos="fade-up">
            {/* <h2 style = {{fontSize: 36}}>Features</h2> */}
            <img img src="images/featuresn.png" className="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div className="row rowg" data-aos="fade-up" data-aos-delay="300" style = {{marginTop: 50}}>
            <div className=" col-lg-4 col-md-12 mt-md-0 btnv1" >
              <div className=" info-box" >
              <div className="icon-box d-flex flex-column" >
              {/* <img img src="images/features1.png" className="img-fluid" alt="" data-aos="zoom-in"/> */}
                <h2 style = {{color: 'inherit'}}> Rewards</h2>
                <h3 className = "feat">For every transaction in Shiko’s network (buy or sell), 7% - 35% of the transaction is distributed to existing holders. </h3>
                </div>
              </div>
            </div>
            <div className="infobox col-lg-4 col-md-12 mt-4 mt-md-0 btnv1">
              <div className="icon-box d-flex flex-column" >
              {/* <img img src="images/oil.png" className="img-fluid" alt="" data-aos="zoom-in"/> */}
                <h2 style = {{color: 'inherit'}}> Auto Liquidity Pool</h2>
                <h3  className = "community">1%-2% of all transactions are added to the liquidity pool.</h3>
              </div>
            </div>
            <div className="infobox col-lg-4 col-md-12 mt-4 mt-md-0 btnv1">
              <div className="icon-box d-flex flex-column" >
              {/* <img img src="images/features4.png" className="img-fluid" alt="" data-aos="zoom-in"/> */}
                <h2 style= {{color: 'inherit'}}> Anti Dump </h2>
                <h3 className = "dump"> We limit sells to 3% and use increasing Fees to discourage dumping strongly</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="antidump" style = {{padding: 0}}>
        <div className = "container-fluid" style = {{padding: 0}}>
        <picture>
          <source 
            media="(min-width: 623px)"
            srcset="images/antidump1.png"/>
          <source 
            media="(max-width: 622px)"
            srcset="images/antidump2.png"/>
          <img src="images/antidump1.png" className="img-fluid" 
          alt=""/>
        </picture>
        </div>
      </section>
      <section id="howtobuy" className="howtobuy">
        <div className="container-fluid">
          <div className="section-title" data-aos="fade-up">
            {/* <h2 style = {{fontSize: 24, fontWeight: 600, textTransform: 'none'}}>How to Buy?</h2> */}
            <img img src="images/howtobuy.png" className="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div className = "row">
            <div className = "col-lg-3">
              <div className = "d-flex flex-column">
                < h2 data-aos="zoom-in">Step 1</h2>
                < h1 data-aos="zoom-in">Create a MetaMask Wallet</h1>
                <img img src="images/step1.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "d-flex flex-column">
                <h2 data-aos="zoom-in">Step 2</h2>
                <h1 data-aos="zoom-in">Send $BNB To MetaMask</h1>
                <img img src="images/step2.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "d-flex flex-column">
                <h2 data-aos="zoom-in">Step 3</h2>
                <h1 data-aos="zoom-in">Visit Pancake Swap</h1>
                <img img src="images/step3.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "d-flex flex-column">
                <h2 data-aos="zoom-in">Step 4</h2>
                <h1 data-aos="zoom-in">Swap $BNB for $SHIKO</h1>
                <img img src="images/step4.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="token" style = {{backgroundImage: 'url(images/tokenbg.png)'}}>
        <div className="container" style = {{marginleft: 150}}>
          <div className="section-title" data-aos="fade-up">
            {/* <h2 style = {{ textTransform: 'none'}}>Tokenomics</h2> */}
            <img src="images/token.png" className="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div className="row rowg" data-aos="fade-up" data-aos-delay="300" >
            <div className="col-xl-3 col-lg-4 col-md-6 mt-md-0 btnv1" >
              <div className="icon-box info-box d-flex flex-column"  style = {{height: 200}}>
                <h1>$SHIKO</h1>
                <h3>TOKEN SYMBOL</h3>
              </div>
            </div>
            <div className="infobox col-xl-3 col-lg-4 col-md-6 mt-4 mt-md-0 btnv1">
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>1 TRILLION</h1>
                <h3>TOTAL  SUPPLY</h3>
              </div>
            </div>
            <div className="infobox col-xl-3 col-lg-4 col-md-6 mt-4 mt-md-0 btnv1">
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>ANTI-WHALE </h1>
                <h3>Sell cooldown and propotional fees</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mt-4 mt-md-0 btnv1" style = {{position: 'relative'}}>
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>SAFE</h1>
                <h3>Liquidity Lock and Ownership rennounced</h3>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 mt-4 mt-md-0 btnv1" style = {{position: 'relative'}}>
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>TEAM FEE</h1>
                <h3>5% -10 %</h3>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 mt-4 mt-md-0 btnv1" style = {{position: 'relative'}}>
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>LIQUIDITY FEE</h1>
                <h3>1% -2 %</h3>
              </div>
            </div>
            <div className="infobox col-lg-4 col-xl-3 col-md-6 mt-4 mt-md-0 btnv1" style = {{position: 'relative'}}>
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>COMMUNITY FEE</h1>
                <h3>7% - 35%</h3>
              </div>
            </div>
            <div className="infobox col-lg-4 col-xl-3 col-md-6 mt-4 mt-md-0 btnv1" style = {{position: 'relative'}}>
              <div className="icon-box d-flex flex-column" style = {{height: 200}}>
                <h1>PRICE IMPACT LIMIT</h1>
                <h3>No sells above 3%</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s-services" id='roadmap'>
      <div id = "stars-bg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> 
        <div className="section-title" data-aos="fade-up" style = {{marginTop: 100, paddingBottom: 50}}>
          <h2 style = {{color: 'white'}}>Moon Map</h2>
        </div>
        <div className="container" data-aos="fade-up">
            <div className="row rowg">
              <div className = "info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className = "icon-box d-flex flex-column">
                <h3 style = {{background: '#344861'}}>
                  PHASE 1
                </h3>
                <div style = {{alignSelf: 'center'}}>
                <img img src="images/rocket.png" className="img-fluid" alt="" data-aos="zoom-in"/>
                </div>
                <h1>LAUNCH</h1>
                <ol>
                  <li>Website Launch</li>
                  <li>Audit</li>
                  <li>Token Creation</li>
                  <li>Initial Liquidity sale and start of Pancake</li>
                </ol>
                </div>
              </div>
              <div className = "info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className = "icon-box d-flex flex-column">
                <h3 style = {{background: '#344861'}}>
                  PHASE 2
                </h3>
                <div style = {{alignSelf: 'center'}}>
                <img img src="images/height.png" className="img-fluid" alt="" data-aos="zoom-in"/>
                </div>
                <h1>GROWTH</h1>
                <ol>
                  <li>1000 Telegram members</li>
                  <li>CoinGecko Listing</li>
                  <li>CoinMarketCap Listing</li>
                </ol>
                </div>
              </div>
              <div className = "info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className = "icon-box d-flex flex-column">
                <h3 style = {{background: '#344861'}}>
                  PHASE 3
                </h3>
                <div style = {{alignSelf: 'center'}}>
                <img img src="images/flash.png" className="img-fluid" alt="" data-aos="zoom-in"/>
                </div>
                <h1>ACCELERATE</h1>
                <ol>
                  <li>Partnerships with other doge tokens and influencers</li>
                  <li>Initil CEX Listings</li>
                  <li>Shiko Inu merch</li>
                  <li>5,000 Telegram Members</li>
                  <li>NFT Charity Fund</li>
                </ol>
                </div>
              </div>
              <div className = "info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className = "icon-box d-flex flex-column">
                <h3 style = {{background: '#344861'}}>
                  PHASE 4
                </h3>
                <div style = {{alignSelf: 'center'}}>
                <img img src="images/moon.png" className="img-fluid" alt="" data-aos="zoom-in"/>
                </div>
                <h1>TO THE MOON</h1>
                <ol>
                  <li>SHIKO Paw Print</li>
                  <li>Shiko inu NFT based Game</li>
                  <li>More CEX Listings</li>
                  <li>20,000 Telegram Members</li>
                  <li>Influencer Marketing Partnerships</li>
                </ol>
                </div>
              </div>
          </div>
        </div> 
        </div>
      </section> 
      <section id = "founding">
        <div className = "container">
          <div className="section-title" data-aos="fade-up">
            {/* <h2 style = {{fontSize: 24, textTransform: 'none'}}>Founding Team</h2> */}
            <img img src="images/foundingteam.png" className="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div className = "section-title" data-aos = "fade-up">
            <p className = "founding-para" style = {{fontSize: 24, textAlign: 'center'}}>Shiko Inu was founded by a 4-person team that has since expanded into 20+ community managers with expertise in marketing and product development. Feel free to say "Hi!" 👋 on Telegram.</p>
          </div>
          <div className="row" style = {{ marginTop: 10,width: "100%"}}>
            <div className="first founding-col col-lg-2 col-md-4 col-sm-4 col-6 align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150" >
              <img src="images/capto.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              <h1>Capto Shiko</h1>
              {/*<a href="https://telegram.org/">*/}
              {/*<img src="images/telegram2.png" className="img-fluid founding-img" alt="" data-aos="zoom-in" style = {{position: 'relative'}}/>*/}
              {/*</a>*/}
            </div>
            <div className="col-md-4 col-lg-2 col-sm-4 col-6 founding-col align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150" >
              <img src="images/hacko.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              <h1>Hacko Shiko</h1>
              {/*<a href="https://telegram.org/">*/}
              {/*<img src="images/telegram2.png" className="img-fluid founding-img" alt="" data-aos="zoom-in" style = {{position: 'relative'}}/>*/}
              {/*</a>*/}
            </div>
            <div className="third founding-col col-lg-2 col-md-4 col-sm-4 col-6 align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-left" data-aos-delay="150" >
              <img src="images/pumpo.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              <h1>Pumpo Shiko</h1>
              {/*<a href="https://telegram.org/">*/}
              {/*<img src="images/telegram2.png" className="img-fluid founding-img" alt="" data-aos="zoom-in" style = {{position: 'relative'}}/>*/}
              {/*</a>*/}
            </div>
            <div className="col-md-4  founding-col col-lg-2 col-sm-4 col-6 align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-left" data-aos-delay="150">
              <img src="images/justo.png" className="img-fluid" alt="" data-aos="zoom-in"/>
              <h1>Justo Shiko</h1>
              {/*<a href="https://telegram.org/">*/}
              {/*<img src="images/telegram2.png" className="img-fluid founding-img" alt="" data-aos="zoom-in" style = {{position: 'relative'}}/>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" style = {{height: 330}}>
        <div className="container">
          <div className="row" >
            <div className = "d-flex flex-gap" style = {{position: 'relative', top: 50, width: '100%', gap:50, justifyContent:'center'}}>
              <div className = " flex-shrink-1">{/* <div> className="col-lg-1 col-md-4 col-6" > */}
              <a href="https://t.me/TeamShikoInu">
                 <img src="images/telegram.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" style = {{height: 50}}/>
               </a>
             </div>
              <div className = "flex-shrink-1">{/* <div>className="col-lg-1 col-md-4 col-6"> */}
              <a href="https://twitter.com/TeamShikoInu">
                 <img src="images/twitter.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" style = {{height: 50}}/>
               </a>
              </div>
             <div className = "flex-shrink-1">{/* <div> className="col-lg-1 col-md-4 col-6"> */}
             <a href="https://dextools.io/">
                 <img src="images/dextools.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" style = {{height: 50}}/>
               </a>
              </div>
              <div className = "flex-shrink-1">{/* <div> className="col-lg-1 col-md-4 col-6"> */}
              <a href="https://etherscan.org/">
                 <img src="images/etherscan.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" style = {{height: 50}}/>
               </a>
             </div>
           </div>
            <div className = "d-flex flex-gap" style = {{ position: 'relative', top: 90, gap: 50 , justifyContent: 'center'}}>
              <div className = "flex-shrink-1">
                <img src="images/logo.png"  alt="" data-aos="zoom-in" style ={{position: 'relative', bottom: 8}}/>
              </div>
              <div className = "flex-shrink-1">
                <h2 data-aos="zoom-in" style = {{ fontSize: 36, fontWeight: 700, color: 'white'}}>Shiko Inu</h2>
              </div>
            </div> 
             <div className="d-flex" style = {{ top: 90, position: 'relative', justifyContent: 'center'}}>
                <div className="copyright" style={{marginLeft: 30, marginTop: 20, fontSize: 24, fontWeight: 400, color: 'white'}}>
                   Copyright &copy; 2ll021, Shiko Inu
                </div>
             </div>
          </div>
        </div>
      </footer>
      <Swap/>
      </React.Fragment>
  );
}

export default App;

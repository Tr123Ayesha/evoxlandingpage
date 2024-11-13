import React from "react";
import './landingPage.css';
import ResponsiveAppBar from '../../components/Navbar'
import BuildingImage from '../../assets/BuildingNew.png';
import Instagram from '../../assets/instagram.svg';
import telegram from '../../assets/telegram.svg';
import cardMain from '../../assets/cardMain.svg';
import twitter from '../../assets/twitter.svg';
import bed from '../../assets/bed.svg';
import washroom from '../../assets/washroom.svg';
import villa from '../../assets/villa.svg';
import div2 from '../../assets/homeinagediv2.png';
import box1 from '../../assets/box1.svg';
import box2 from '../../assets/box2.svg';
import box3 from '../../assets/box3.svg';
import Mobile from '../../assets/Mobile.svg'
import idealExplore from '../../assets/idealExplore.svg';
import Profile1 from '../../assets/Profile1.svg';
import Profile2 from '../../assets/Profile2.svg';
import Profile3 from '../../assets/Profile3.svg';
import demoImage from '../../assets/demoImage.png';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';
import email from '../../assets/email.svg';
import send from '../../assets/send.svg';
const LandingPage = () =>{
    return(
<div className='LandingPage'>
    <div className="TopDiv">
       <ResponsiveAppBar />
       <img className="buildingImage" src={BuildingImage} alt="Building Image" />
<div className="craftTheFuture">
    <div className="mainSubDiv">
        <div className="headingPlusFollow">
            <div className="headingTop">
                <p className="weCraft">We craft the</p>
                <p className="futureDeweling">future dwelling.</p>
            </div>
            <div className="FollowUs">
                <p className="followPara"> FOLLOW US</p>
                <div className="socialMedia">
                <div className="Insta">
                    <img src={Instagram} alt="instagram" />
                </div>
                <div className="Insta">
                <img src={telegram} alt="telegram" />
                </div>
                <div className="Insta">
                <img src={twitter} alt="twitter" />
                </div>

                </div>

            </div>

        </div>
            <p className="maindiv1Para">Crafted for your comfort, to enhance the beauty of 
                your <br className="breakline-class"/> present lifestyle but also paves the way for
                 a more <br className="breakline-class"/> aesthetically pleasing and harmonious future 
                 for both you <br className="breakline-class"/> and your cherished family.
                 </p>
<div className="cardplusheading">
<div className="mainCard">
    <div>
<img  style={{width:'100%'}}src={ cardMain} alt="card Main"/>
    </div>
    <div className="seaside-div">
                    <div className="TopCardTwoDiv">
                      <p className="SeasideSerenity">
                        Seaside Serenity Villa
                      </p>
                      <p className="paraCardDetailTop">
                        A stunning 4-bedroom, 3-bathroom villa in a
                        <br className="breakline-class"/> peaceful suburban
                        neighborhood... Read More
                      </p>
                    </div>
                    <div className="threeRooms">
                      <div className="bed">
                        <img style={{    width:' 14.6px', height: '14.6px'}} src={bed} alt="bedroom" />
                        <p className="bedroomtext">4-Bedroom</p>
                      </div>
                      <div className="bed">
                      <img style={{    width:' 14.6px', height: '14.6px'}} src={washroom} alt="bedroom" />
                        <p className="bedroomtext">3-Bathroom</p>
                      </div>
                      <div className="bed">
                      <img style={{    width:' 14.6px', height: '14.6px'}} src={villa} alt="bedroom" />
                        <p className="bedroomtext">Villa</p>
                      </div>
                    </div>
                    <button className="propertybutton">
                      View Property Details
                    </button>
                  </div>

</div>
<div className="Exploringdiv">
<p className="Intro">Introduction</p>
<p className="vision">A vision for <br className="breakline-class"/> liveable,<br className="breakline-class"/> sustainable &  <br className="breakline-class"/>affordable.</p>
<button className="startExploring">Start Exploring</button>
</div>
</div>
        
    </div>

</div>

</div>
<div className="secondmain_div">
<div className="Calc">
<div className="divleft">
<div className='subdiv2'>
    <p className="subDivpara1">Expected net annual ROI</p>
    <p className="subDivpara2">7.5%-12% </p>
</div>
<div className='subdiv2'>
    <p className="subDivpara1">Invest from as little as</p>
    <p className="subDivpara2">500 $ </p>
</div>
<div className='subdiv2'>
    <p className="subDivpara1">Nationalities eligible</p>
    <p className="subDivpara2">200+ </p>
</div>
</div>
<div className="divLeft">
    <img  src={div2} alt="Divleft"/> 
</div>
</div>
<div className="WorkMethod">
    <div className="underWorkMethod">
        <p className="HowItWorks">How it works?</p>
        <p className="just4steps">In just 4 steps build your wealth, Block by Block with our crowdfunding fractional ownership platform. </p>
<div className="div2Work">
<div className='Method1'>
      <p className="feature-card-number">01</p>
      <p className="feature-card-title">Browse</p>
      <p className="feature-card-description">View a curated list of properties handpicked by leading experts.</p>
    </div>
    <div className='Method1'>
      <p className="feature-card-number">02</p>
      <p className="feature-card-title">Invest</p>
      <p className="feature-card-description">Build your investment portfolio with Blocks of properties, from only AED 2,000 on our crowdfunding fractional ownership platform</p>
    </div>
    <div className='Method1'>
      <p className="feature-card-number">03</p>
      <p className="feature-card-title">Earn</p>
      <p className="feature-card-description">Sit back and start earning monthly income. Also, watch your investment grow with capital appreciation.</p>
    </div>

    </div>

    </div>
</div>
<div className="featuredProperties">
    <p className="Featured">Featured Properties</p>
   <div className="secondDiv">
    <p className="explorehandpicked">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional
        <br className="breaklineProperty-class" /> homes and investments available through Estatein. Click "View Details" for more information.</p>
   <button className="viewProp">View All Properties</button>
   </div>
   <div className="featuredBoxesdiv">
   <div className="card">
      <img
        src={box1} 
        alt="Seaside Serenity Villa"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">Seaside Serenity Villa</h3>
        <p className="card-description">
          A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
        </p>
        <div className="card-features">
          <div className="bed"><img src={bed} alt="bed"/> 4-Bedroom</div>
          <div className="bed"><img src={washroom} alt="bathroom"/> 3-Bathroom</div>
          <div className="bed"><img src={villa} alt="villa"/> Villa</div>
        </div>
        <div className="footer">
          <div className="card-price">
            <p className="price">Price</p>
            <p className="priceamount">$550,000</p>
            </div>
          <button className="ViewPropDetails">View Property Details</button>
        </div>
      </div>
    </div>
    <div className="card">
      <img
        src={box2} 
        alt="Seaside Serenity Villa"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">Metropolitan Haven</h3>
        <p className="card-description">
        A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More
        </p>
        <div className="card-features">
          <div className="bed"><img src={bed} alt="bed"/> 2-Bedroom</div>
          <div className="bed"><img src={washroom} alt="bathroom"/> 2-Bathroom</div>
          <div className="bed"><img src={villa} alt="villa"/> Villa</div>
        </div>
        <div className="footer">
          <div className="card-price">
            <p className="price">Price</p>
            <p className="priceamount">$550,000</p>
            </div>
          <button className="ViewPropDetails">View Property Details</button>
        </div>
      </div>
    </div>
    <div className="card">
      <img
        src={box3} 
        alt="Seaside Serenity Villa"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">Rustic Retreat Cottage</h3>
        <p className="card-description">
        An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More
        </p>
        <div className="card-features">
          <div className="bed"><img src={bed} alt="bed"/> 3-Bedroom</div>
          <div className="bed"><img src={washroom} alt="bathroom"/> 3-Bathroom</div>
          <div className="bed"><img src={villa} alt="villa"/> Villa</div>
        </div>
        <div className="footer">
          <div className="card-price">
            <p className="price">Price</p>
            <p className="priceamount">$550,000</p>
            </div>
          <button className="ViewPropDetails">View Property Details</button>
        </div>
      </div>
    </div>
   </div>

</div>
<div className="DreamIdeal">
<div className="dreamidealLeft">
<img  className="ideal" src={idealExplore} alt="Image" />
<img className="demo" src={demoImage} alt="Demo"/>
</div>
<div className="dreamIdealRight">
  <p className="topHeading">We can bring to life everything you've
     ever envisioned and dreamed of – your ideals and desires are our creations.</p>
     <p className="bottomheading">Our purpose is to transform your wildest dreams into reality. 
      Regardless of how unconventional your vision may be, we possess the 
      capability to craft your dream home, fulfilling your every desire. </p>
      <button className="IdealSeeMore"> See More</button>
</div>
</div>
<div className="MobileDiv">
<img className="mobile" src={Mobile} alt="Mobile" />

<div className="MobileRight">
  <p className="mobiledivp1">Features</p>
  <p className="mobiledivp2">A vision for liveable, sustainable & affordable.</p>
  <p className="mobiledivp3">A fraction of a property, making it affordable for everyone
     to invest in real estate using crypto. We take the whole
      property and split it between the investors, enabling r
       investments from only $500.</p>
       <button className="mobileButton">Start Exploring</button>
</div>
</div>
<div className="ClientSay">
<p className="clientSay1">What Our Clients Say</p>
<p className="clientSay2">Read the success stories and heartfelt testimonials from our 
  valued clients. Discover why they chose Estatein for their real estate needs.</p>
  <div className="clientboxDivs">
    <div className="ClientBox">
<p className="clientp1">Exceptional Service!</p>
<p className="clientp2">Our experience with Estatein was outstanding. Their team's dedication
   and professionalism made finding our dream home a breeze. Highly recommended!</p>
   <div className="profileClientdiv">
    <img src={Profile1} alt="Profile" />
<div className="subprofileclient">
<p className="name">Wade Warren</p>
<p className="area">USA, California</p>
</div>
   </div>
    </div>

    <div className="ClientBox">
<p className="clientp1">Efficient and Reliable</p>
<p className="clientp2">Estatein provided us with top-notch service. They helped us sell our property quickly 
  and at a great price. We couldn't be happier with the results.</p>
   <div className="profileClientdiv">
    <img src={Profile2} alt="Profile" />
<div className="subprofileclient">
<p className="name">Emelie Thomson</p>
<p className="area">USA, Florida</p>
</div>
   </div>
    </div>

    <div className="ClientBox">
<p className="clientp1">Trusted Advisors</p>
<p className="clientp2">The Estatein team guided us through the entire buying process. 
  Their knowledge and commitment to our needs were impressive. Thank you for your support!</p>
   <div className="profileClientdiv">
    <img src={Profile3} alt="Profile" />
<div className="subprofileclient">
<p className="name">John Mans</p>
<p className="area">USA, Nevada</p>
</div>
   </div>
    </div>


  </div>
  <div className="Aroow">
    <img src={left} alt="Right" />

<img src={right} alt="Left" />
  </div>
</div>
</div>
<div className="blackDiv">
<div className="secondLastDiv">
  <div className="lastparadiv">
<p className="realEstateJournery">Start Your Real Estate Journey Today</p>
<p className="Propertypara">Your dream property is just a click away. Whether you're looking
   for a new home, a strategic investment, or expert real estate advice,
    Estatein is here to assist you every step of the way. Take the first 
    step towards your real estate goals and explore our available properties
     or get in touch with our team for personalized assistance.</p>
     
</div>
<button className="whitebutton">Explore more </button>
</div>
<div className="FinalFooter">
  <div className="email"> 
    <img src={email} alt="email"/>
    <input  className="footerInput" placeholder="Enter Your Email"/>
    <img src={send} alt="send"/>
  </div>
  <div className="footerLinks">
<div className="HomeLink1">
<p className="headingfooter">Home</p>
<p className="subheading">Hero Section</p>
<p className="subheading">Features</p>
<p className="subheading">Properties</p>
<p className="subheading">Testimonials</p>
<p className="subheading">FAQ’s</p>
</div>
<div className="HomeLink1">
<p className="headingfooter">About Us</p>
<p className="subheading">Our Story</p>
<p className="subheading">Our Works</p>
<p className="subheading">How It Works</p>
<p className="subheading">Our Team</p>
<p className="subheading">Our Clients</p>
</div>
<div className="HomeLink1">
<p className="headingfooter">Properties</p>
<p className="subheading">Portfolio</p>
<p className="subheading">Categories</p>
</div>
<div className="HomeLink1">
<p className="headingfooter">Services</p>
<p className="subheading">Valuation Mastery</p>
<p className="subheading">Strategic Marketing</p>
<p className="subheading">Negotiation Wizardry</p>
<p className="subheading">Closing Success</p>
<p className="subheading">Property Management</p>
</div>
<div className="HomeLink1">
<p className="headingfooter">Contact Us</p>
<p className="subheading">Contact Form</p>
<p className="subheading">Our Offices</p>

</div>
  </div>
</div>
</div>

</div>
    );
};
export default LandingPage;
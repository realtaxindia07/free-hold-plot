
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import PriceCard from './components/PriceCard';

function App() {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <main className="main">
      <Navbar />
      {popupActive && (
                      <section className="popup" id="popup">
                      <Form />
                      <button className="cross" onClick={() => setPopupActive(false)}>X</button>
                      </section>
)}


      <section id="home" className="home">
        <article id="home-a" className="home-a">
          <h3><i>Prime Real Estate in Noida</i></h3>
          <h1>Premium Properties for Sale in Noida</h1>
          <ul>
            <li>High Return on Investment</li>
            <li>Secure Investment in Noida</li>
            <li>Wide Range of Properties</li>
            <li>Vibrant & Growing Locality</li>
            <li>Exclusive Amenities</li>
          </ul>
        </article>
        <article id="home-b" className="home-b">
          <Form />
        </article>
      </section>

      <section id="overview" className="overview">
        <article>
          <h3><i>About the Project</i></h3>
          <h2>Explore Prime Plots in Knowledge Park, Noida</h2>
          <p>Discover a rare opportunity to own premium residential plots located in the heart of Noida's fast-developing Knowledge Park. Our real estate offerings are strategically located with close proximity to commercial hubs, top universities, and upcoming infrastructure developments. Secure your plot today for a promising future!</p>
          <button onClick={() => setPopupActive(true)}>Download Brochure</button>
        </article>
        <aside>
          <img src="/home2.png" alt="Premium Real Estate in Noida" />
        </aside>
      </section>

      <section id="amenities" className="amenities">
        <h3><i>Amenities</i></h3>
        <h2>Amenities for a Luxurious Living</h2>
        <div className="amenities-a">
          <img src="/div3image1.png" alt="24/7 Security" />
          <img src="/div3image2.png" alt="Swimming Pool" />
          <img src="/div3image3.png" alt="Gym & Spa" />
          <img src="/div3image4.png" alt="Kids Play Area" />
        </div>
      </section>

      <section id="price" className="price">
        <h3><i>Price & Offers</i></h3>
        <h2>Exclusive Pricing for Prime Locations</h2>
        <div>
          <PriceCard price={100} area={100} func={setPopupActive}/>
          <PriceCard price={150} area={150} func={setPopupActive}/>
          <PriceCard price={200} area={200} func={setPopupActive}/>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <aside>
          <img src="/home2.png" alt="Residential Plots in Noida" />
        </aside>
        <article>
          <h3><i>Location Benefits</i></h3>
          <h2>Why Choose Noida for Your Dream Property</h2>
          <ul>
            <li>Proximity to Major IT Hubs and Corporate Offices</li>
            <li>Excellent Connectivity via Metro and Highways</li>
            <li>Close to Leading Educational Institutions and Hospitals</li>
            <li>Upcoming Infrastructure Projects Promising High Returns</li>
            <li>Vibrant Neighborhood with a Strong Community</li>
          </ul>
        </article>
      </section>

      <section className="floor-plans" id="floor-plans">
        <h3><i>Floor Plans</i></h3>
        <h2>Customize Your Dream Property</h2>
        <div>
          <article>
            <h3><i>Plot Plan 1</i></h3>
            <h3><i>Standard Layout</i></h3>
          </article>
          <article>
            <h3><i>Plot Plan 2</i></h3>
            <h3><i>Premium Layout</i></h3>
          </article>
        </div>
      </section>

      <section className="location" id="location">
        <article>
          <h3><i>Location Highlights</i></h3>
          <h2>Discover the Ideal Location for Your Property</h2>
          <ul>
            <li>1 min from Noida-Greater Noida Expressway</li>
            <li>5 mins to Sector 18 Commercial Hub</li>
            <li>10 mins to DND Flyover</li>
            <li>15 mins to Sector 32 Metro Station</li>
          </ul>
        </article>
        <aside>
          <img src="/location.png" alt="Noida Location Map" />
        </aside>
      </section>

      <section className="contact" id="contact">
        <h3 className="contact-head"><i>Contact Us</i></h3>
        <h2 className="contact-head">Your Dream Property is Just a Call Away</h2>
        <div>
          <article className="contact-a">
            <h3><i>Get in Touch</i></h3>
            <h2>Our Expert Team is Ready to Assist You</h2>
            <ul>
              <li><b>Instant Property Booking:</b> Reserve your plot with a simple call.</li>
              <li><b>Financing Options:</b> Easy EMI schemes and loan facilities available.</li>
              <li><b>On-Site Visits:</b> Book a free site visit and explore our plots.</li>
              <li><b>Legal Assistance:</b> Full legal support for documentation and registration.</li>
            </ul>
          </article>
          <aside className="contact-b" id="contact-b">
            <Form />
          </aside>
        </div>
      </section>

      <footer className="footer">
        <p>Disclaimer - Authorized marketing partner with Smartbrickz. The content provided on this website is for informational purposes only and does not constitute an offer to avail any service...</p>
        <p>Disclaimer & Privacy Policy | Digital Media Planned By Digital Growth Experts</p>
      </footer>
    </main>
  );
}

export default App;

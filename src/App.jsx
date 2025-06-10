
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import PriceCard from './components/PriceCard';

function App() {
  const lat = 28.583196;
  const lng = 77.315036;
  const [popupActive, setPopupActive] = useState(false);
  const [isdownload, setIsdownload] = useState(false);
  const Download_Brochure = () => {
    setPopupActive(false);
    isdownload && window.open("https://drive.usercontent.google.com/u/0/uc?id=1TwR5p7VteCVRzfjF0m6JT2C9f39Ao5Qi&export=download");
    setIsdownload(false)
  };
  return (
    <main className="main">
      <Navbar />
      {popupActive && (
        <section className="popup" id="popup">
          <div className='popup-div'>
          <Form Download_Brochure={Download_Brochure}/>
          <button className="cross" 
          onClick={() => {setPopupActive(false)}}>X</button>
          </div>
        </section>
      )}


      <section id="home" className="home">
        <article id="home-a" className="home-a">
          <h3><i>Pari Chowk || Chi Phi</i></h3>
          <h1>Freehold plot</h1>
          <ul>
            <li>Loan Approved</li>
            <li>Gated Society</li>
            <li>Prime Location</li>
            <li>Free Flood zone Plot</li>
            <li>Premium Amenities</li>
          </ul>
        </article>
        <article id="home-b" className="home-b">
          <Form />
        </article>
      </section>

      <section id="overview" className="overview">
        <article>
          <h3><i>About us</i></h3>
          <h2>Freehold plot</h2>
          <p>Pari Chowk || Greater Noida <br /> Discover Surya Homes – a remarkable opportunity to own premium freehold residential plots, strategically located just behind Galgotias University on the Yamuna Expressway. Positioned directly across from the iconic F-1 race track, these plots lie in the heart of Greater Noida’s rapidly growing residential and commercial corridor. With major developments such as the upcoming Film City and Jewar International Airport nearby, Surya Homes is poised to benefit from the region’s transformation, making it a prime choice for both living and investment in the evolving Delhi-NCR landscape.</p>
          <button onClick={() => {setPopupActive(true);setIsdownload(true)}}>Download Brochure</button>
        </article>
        <aside className="overview-img">
          <img loading="lazy" src="home2.webp" alt="Premium Real Estate in Noida" className='img1' />
          <img loading="lazy" src="home.webp" alt="Premium Real Estate in Noida" className='img2' />
        </aside>
      </section>

      <section className='amenities' id='amenities'>
        <h3><i>Amenities</i></h3>
        <h2>Amenities that Define Excellence</h2>
        <div className="amenities-a">
          <picture>
            <img loading="lazy" src="/Amenities/3+.webp" alt="24/7 Security" />
            <p>Four-lane Road from the ORR</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/80feet.webp" alt="Swimming Pool" />
            <p>Bordering an 80-Feet Road</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/arch.webp" alt="Gym & Spa" />
            <p>Entry Arch</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/asphalt.webp" alt="Kids Play Area" />
            <p>Asphalt Roads</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/filmcity.webp" alt="Kids Play Area" />
            <p>Film City</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/sewer.webp" alt="Swimming Pool" />
            <p>Sewer System</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/street.webp" alt="24/7 Security" />
            <p>Street Lamps</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/underground.webp" alt="24/7 Security" />
            <p>Underground Electrical Cabling</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/vasu.webp" alt="24/7 Security" />
            <p>Fully Vaasthu Compliant</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/water-supply.webp" alt="24/7 Security" />
            <p>Water Supply Hookup</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/water.webp" alt="24/7 Security" />
            <p>Elevated Water Tank</p>
          </picture>
          <picture>
            <img loading="lazy" src="/Amenities/garden.webp" alt="Gym & Spa" />
            <p>Landscaped Gardens</p>
          </picture>
        </div>
      </section>

      <section id="price" className="price">
        <h3><i>Price Section</i></h3>
        <h2>Unlock the Gateway to Business Excellence</h2>
        <div>
          <PriceCard price={25} area={100} h3={"Lacs* Onwards"} func={setPopupActive} />
          <PriceCard area={150} h3={"on request"} func={setPopupActive} />
          <PriceCard area={200} h3={"on request"} func={setPopupActive} />
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h3><i>Gallery</i></h3>
        <h2>Gallery for a Luxurious Living</h2>
        <div className="gallery-a">
          <div>
            <img loading="lazy" src="gallery/yamuna.webp" alt="yamuna" />
            <p>Yamuna Expressway 2 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/metro.webp" alt="metro" />
            <p>Metro Station 2 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/airport.webp" alt="airport" />
            <p>Jewar Aiport

              30 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/TECH.webp" alt="TECH" />
            <p>Tech Zone

              15 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/mall.webp" alt="mall" />
            <p>Grand Venice

              Mall- 5 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/sharda.webp" alt="sharda" />
            <p>Sharda University

              8 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/bajaj.webp" alt="bajaj" />
            <p>GL Bajaj Institude

              10 min</p>
          </div>
          <div>
            <img loading="lazy" src="gallery/gal.webp" alt="galgotias" />
            <p>Galgotias College

              8 min</p>
          </div>
        </div>
      </section>

      <section className='project' id='project'>
        <h3><i>Our Amenities</i></h3>
        <h2>Project Highlights</h2>
        <div className="project-a">
          <picture>
            <img loading="lazy" src="/project/cctv.webp" alt="24/7 Security" />
            <p>Four-lane Road from the ORR</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/grated.webp" alt="Swimming Pool" />
            <p>Bordering an 80-Feet Road</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/land.webp" alt="Gym & Spa" />
            <p>Entry Arch</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/loan.webp" alt="Kids Play Area" />
            <p>Asphalt Roads</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/paid.webp" alt="Kids Play Area" />
            <p>Film City</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/park.webp" alt="Swimming Pool" />
            <p>Sewer System</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/plan.webp" alt="24/7 Security" />
            <p>Street Lamps</p>
          </picture>
          <picture>
            <img loading="lazy" src="/project/water-supply.webp" alt="24/7 Security" />
            <p>Underground Electrical Cabling</p>
          </picture>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <aside>
          <img loading="lazy" src="map.webp" alt="Residential Plots in Noida" />
        </aside>
        <article>
          <h3><i>Location Advantages</i></h3>
          <h2>Discover Your Perfect Place in the Perfect Location</h2>
          <ul>
            <li>Yamuna Expressway – 3 mins</li>
            <li>Knowledge Park 2 Metro Station – 10 mins</li>
            <li>Express Park View Apartments – 2 mins</li>
            <li>Nimbus Residential Apartment – 10 mins</li>
            <li>Hospitals – 5 mins</li>
            <li>Venice Mall – 10 mins</li>
            <li>Jewar Airport – 35 mins</li>
            <li>Pari Chowk – 10 mins</li>
          </ul>
        </article>
      </section>

      <section className="floor-plans" id="floor-plans">
        <h3><i>Floor Plans</i></h3>
        <h2>Customize Your Dream Property</h2>
        <div>
          <article>
            <div>
            <h3><i>Plot Plan 1</i></h3>
            <button onClick={() => setPopupActive(true)}>Standard Layout</button>
            </div>
          </article>
          <article>
            <div>
            <h3><i>Plot Plan 2</i></h3>
            <button onClick={() => setPopupActive(true)}>Premium Layout</button>
            </div>
          </article>
        </div>
      </section>
<section className="location" id="location">
<iframe 
// width="560" height="315" 
src="https://www.youtube.com/embed/ZkcLjZjZpsA?si=MvcLyiOxFBlqeJOD" title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<iframe src="https://www.g0!3f0!3m2!1i1024!2i768!4f13.oogle.com/maps/embed?pb=!1m17!1m12!1m3!1d2769.083853753041!2d77.31503599999999!3d28.583195999999997!2m3!1f0!2f1!3m2!1m1!2zMjjCsDM0JzU5LjUiTiA3N8KwMTgnNTQuMSJF!5e1!3m2!1sen!2sin!4v1749557930913!5m2!1sen!2sin" 
// width="600" height="450" style="border:0;" 
allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

      {/* <footer className="footer">
        <p>Disclaimer - Authorized marketing partner with Smartbrickz. The content provided on this website is for informational purposes only and does not constitute an offer to avail any service...</p>
        <p>Disclaimer & Privacy Policy | Digital Media Planned By Digital Growth Experts</p>
      </footer> */}
      <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h3>About Smartbrickz</h3>
          <p>
            Authorized marketing partner with Smartbrickz. We provide the latest updates, insights, and offers to help you make informed decisions.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/disclaimer">Disclaimer & Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:info@smartbrickz.com">info@smartbrickz.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/smartbrickz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://twitter.com/smartbrickz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://instagram.com/smartbrickz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://linkedin.com/company/smartbrickz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Disclaimer - Authorized marketing partner with Smartbrickz. The content provided on this website is for informational purposes only and does not constitute an offer to avail any service.
        </p>
        <p>
          Disclaimer & Privacy Policy | Digital Media Planned By <a href="https://digitalgrowthexperts.com" target="_blank" rel="noopener noreferrer">Digital Growth Experts</a>
        </p>
      </div>
    </footer>
    </main>
  );
}

export default App;

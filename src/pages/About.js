import "./assets/css/about.css"
import sidePic from "./assets/images/room.jpg";
import about from "./assets/images/Icon.jpg";


export default function About() {
    return (
        <div className = "about-wrapper">
        <div className = "about-left">
              <img src={sidePic} alt="sidePic" width={860} />
        <div className = "about-left-content">
            <div>
              <div className = "shadow">
                <div className = "about-img">
                <img src={about} alt="about" width={70} />
                </div>
              </div>
  
              <h2></h2>
              <h3>EQUAL HOUSING</h3>
            </div>
            <ul class = "icons">
              <li><i class = "fab fa-facebook-f"></i></li>
              <li><i class = "fab fa-twitter"></i></li>
              <li><i class = "fab fa-linkedin"></i></li>
              <li><i class = "fab fa-instagram"></i></li>
            </ul>
          </div>
          </div>
          <div class = "about-right">
          <h1>About Page</h1> 
          <h2>Who we are & what we do</h2>
          <div class = "about-paragraph">
            <p>Since its establishment, it primes itself on the development of affordable house and lot packages and easy-on-the-pocket condominium units that caters to ordinary Filipino families who aspire to acquire their own homes. It had become the perfect choice for average Filipino workers who wanted to invest in a home that is both high quality and affordable.</p>
            <br></br><br></br>
            <h4>Equal Housing's main goal is to address the housing problem in the country.</h4>
            <p>This is the goal that drives every single employee in the company. It is a real estate company that does not aim to earn but aims to aid its public in their pursuit of a home that they can call their own. For EH, as a whole, the ultimate fulfillment is seeing a client happily moving-in EH's homes.</p>
          </div>
        </div>
      </div>
  
  
    )
}
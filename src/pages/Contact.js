import "./assets/css/contact.css";
import logo from "./assets/images/eh-logo.png";
import dots from "./assets/images/shape.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
    return (
      <>
       <body>
    <div class="container-contact">
      <span class="big-circle"></span>
      <img src={dots} class="square" width={200}/>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">LET'S GET IN TOUCH</h3>
          <p class="text">
          One of the leading housing developer in the Philippines, Equal Housing is primed to bring affordable house-and-lot packages and condominium units closer to ordinary Filipino families.
          </p>

          <div class="info">
            <div class="information">
            <MapIcon style={{ color: "green" }} /> 
              <p> &nbsp; 4th/F, Starmall EDSA-Shaw, EDSA cor. Shaw Blvd., Mandaluyong City</p>
            </div>
            <div class="information">
            <MailIcon style={{ color: "green" }} />
              <p> &nbsp; &nbsp; &nbsp; equalhousingph@gmail.com</p>
            </div>
            <div class="information">
            <PhoneIcon style={{ color: "green" }}/>
              <p> &nbsp; &nbsp; &nbsp; (0917) 8091249</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons center">
              <a href="#">
              <FacebookIcon fontSize="40"/> 
              </a>
              <a href="#">
              <TwitterIcon fontSize="40"/> 
              </a>
              <a href="#">
              <InstagramIcon fontSize="40"/> 
              </a>
              <a href="#">
              <LinkedInIcon fontSize="40"/> 
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form" >
          <form action="index.html" autocomplete="off">
            <h3 class="UpperTitle">Contact us</h3>
           
            <div class="content">
              <div class="image-box">
                <img src={logo} alt="location" width={30}/>
            </div>
            </div>
            <h3 class="ButtomTitle">Send Us A Message</h3>
          </form>
        </div>
      </div>
    </div>
  </body>
      </>
  
  
    )
}
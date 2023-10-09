import { Link } from "react-router-dom";
import mainLogo from "../assets/logoWithName-removebg-preview.png"


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img src={mainLogo} alt="" className="h-50 w-64" />
    <p>SaSi International.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <Link className="link link-hover">Classes</Link> 
    <Link className="link link-hover">Courses</Link> 
    <Link className="link link-hover">Pages</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
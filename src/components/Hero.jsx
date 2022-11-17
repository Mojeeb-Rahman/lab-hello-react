import logo from "../images/ironhack-logo-xs.png";
import menu_img from "../images/menu-top-xs.png";

function Hero() {
  return (
    <div className="hero">
      <nav>
        <img src={logo} alt="Ironhack Logo" />
        <img src={menu_img} alt="Menu" />
      </nav>
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>

        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Hero;

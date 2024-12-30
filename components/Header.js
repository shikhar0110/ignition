//import FoodFireLogo from "../Images/Food Fire Logo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysDVgoFdJYa288hDFXu-BF14F2k8ooHQkiw&s"
      alt="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

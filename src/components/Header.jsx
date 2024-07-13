import sunsetPic from '../assets/header/header.jpg';

function Header({children}) {

  return (
    <header className="top">
      <h1>Jenna Flynn</h1>
      <img className= "image" src={sunsetPic} alt="sunset background"></img>
      {children}
    </header>
  );
}

export default Header;

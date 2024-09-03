import sunsetPic from '../assets/header/header(2).jpg';

function Header({children}) {

  return (
    <header>
      <h1 className="top">Jenna Flynn</h1>
      <img className= "image" src={sunsetPic} alt="sunset background"></img>
      {children}
    </header>
  );
}

export default Header;

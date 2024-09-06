import techPic from '../assets/header/header(2).jpg';

function Header({children}) {

  return (
    <header>
      <h1 className="top">Jenna Flynn</h1>
      <img className= "image" src={techPic} alt="tech background"></img>
      {children}
    </header>
  );
}

export default Header;

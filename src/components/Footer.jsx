function Footer() {

    const contactLinks = [
      {
        name: "fa-brands fa-github",
        link: "https://github.com/jeflynn135"
      },
      {
        name: "fa-brands fa-linkedin",
        link: "www.linkedin.com/in/jenna-flynn-282181319"
      },
      {
        name: "fa-regular fa-envelope",
        link: "mailto:jenna.flynn135@gmail.com"
      }
    ]
  
    return (
      <footer className="bottom">
        {contactLinks.map(contactLinks =>
        (
          <a href={contactLinks.link} key={contactLinks.name} target="_blank" rel="noopener noreferrer"><i className={contactLinks.name}></i></a>
        )
          )}
      </footer>
    );
  }
  
  export default Footer;
  
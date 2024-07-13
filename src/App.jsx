import Header from "./components/Header.jsx";
import Nav from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Page from "./components/Page.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;

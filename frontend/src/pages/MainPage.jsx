import "../App.css";
import Header from "../components/Header/Header.jsx";
import Card from "../components/Card/Card.jsx";

function MainPage() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Card/>
        </div>
      </main>
    </>
  );
}

export default MainPage;

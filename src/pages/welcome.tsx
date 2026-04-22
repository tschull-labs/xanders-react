import Navbar from "../components/ui/navbar/navbar.tsx";
import "../index.css";

function WelcomePage() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="big-center-title">
          Welcome to <span className="highlighted-title">Xanders</span>
        </h1>
        <h4 className="small-center-title">
          A place where <span className="highlighted-title">coding</span> meets
          <span className="highlighted-title"> creativity</span>
        </h4>
      </div>
    </>
  );
}

export default WelcomePage;

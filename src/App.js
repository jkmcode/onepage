import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Projects from "./components/Projects";
import ProjectEcommerce from "./components/ProjectEcommerce";
import ScrollToTop from "./components/ScrollToTop";
import InvalidUrl from "./components/InvalidUrl";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/private_policy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route
          exact
          path="/projects/e-commerce"
          element={<ProjectEcommerce />}
        ></Route>
        <Route path="*" element={<InvalidUrl />}></Route>
      </Routes>
      <Footer />
      <Link to="/private_policy" className="private-policy-link">
        Private policy
      </Link>
    </Router>
  );
}

export default App;

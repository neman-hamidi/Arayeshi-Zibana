import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Benefit from "./components/benefit/benefit";
import Product from "./components/product/product";
import Comments from "./components/comments/comments";
import Cta from "./components/cta/cta";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
const Home = () => (
  <div className="w-3/4 mr-40 mx-auto">
    <Nav />
    <Header />
    <Benefit />
    <Product />
    <Comments />
    <Cta />
    <Faq />
    <Footer />
  </div>
);
export default Home;

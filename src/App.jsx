import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
import Section from "./routes/section/Section";
import "antd/dist/reset.css";
import PopularCar from "./routes/popularcar/PopularCar";
import CarRecommendations from "./routes/CarRecommendations/CarRecommendations";

function App() {
  return (
    <>
      <Header />
      <Section />
      <PopularCar />
      <CarRecommendations />
      <Footer />
    </>
  );
}

export default App;

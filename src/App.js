import "./App.css";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import TitleProductCard from "./components/TitleProductCard/TitleProductCard";
import dessertImage from "./assets/dessert.png";
import drinkImage from "./assets/drink.png";
import mainImage from "./assets/main_dish.png";
import sideImage from "./assets/side_dish.png";

const productCard = [
  {
    photo: dessertImage,
    title: "Dessert",
    description: "there is so many dessert recipes",
    link: "https://github.com/",
  },
  {
    photo: drinkImage,
    title: "Drinks",
    description: "there is so many drinks recipes",
    link: "http://www.instagram.com/",
  },
  {
    photo: mainImage,
    title: "Main Dishs",
    description: "there is so many main dishes recipes",
    link: "http://www.facebook.com/",
  },
  {
    photo: sideImage,
    title: "Side Dishs",
    description: "there is so many side dishes recipes",
    link: "http://www.twitter.com/",
  },
];

function App() {
  return (
    <div className="App">
      <Menu menuItems={["Home", "List", "Search"]} />
      <Header />
      <TitleProductCard />
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {productCard.map((value) => (
          <ProductCard key={value.title} obj={value} />
        ))}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Typography from "./components/Typography/Typography";
import desertImage from './assets/dessert.png';
import drinkImage from "./assets/drink.png";
import mainDishImage from "./assets/main_dish.png";
import sideDishImage from "./assets/side_dish.png";

const recipes = [
  {
    imgUrl: desertImage,
    name: "Desert",
    description: "Трвравр варв варврв вп рав",
  },
  {
    imgUrl: drinkImage,
    name: "Drink",
    description: "Трвравр варв варврв вп рав",
  },
  {
    imgUrl: mainDishImage,
    name: "Main-Dish",
    description: "Трвравр варв варврв вп рав",
  },
  {
    imgUrl: sideDishImage,
    name: "Side-Dish",
    description: "Трвравр варв варврв вп рав",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Banner />
        <div className={"App-content--container"}>
          <Typography className={"App-content-title--container"} type={"title"}>
            Recipe
          </Typography>
          <div className={"App-content-item--container"}>
            {recipes.map((value) => (
              <RecipeCard item={value} key={value.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Typography from "./components/Typography/Typography";
import desertImage from "./assets/dessert.png";
import drinkImage from "./assets/drink.png";
import mainDishImage from "./assets/main_dish.png";
import sideDishImage from "./assets/side_dish.png";
import PageOne from "./components/PageOne/PageOne";
import burgerImage from "./assets/List/burger.png";
import delishImage from "./assets/List/delish.png";
import fishImage from "./assets/List/fish.png";
import seafoodImage from "./assets/List/seafood.png";
import List from "./components/List/List";
import Details from "./components/Details/Details";

const cardList = [
  {
    imgUrl: burgerImage,
    nameOne: "Main",
    nameTwo: "Burger",
    nameThree: "Meet",
    showDetails: "Show Details",
  },
  {
    imgUrl: delishImage,
    nameOne: "Main",
    nameTwo: "Delish",
    nameThree: "Meet",
    showDetails: "Show Details",
  },
  {
    imgUrl: fishImage,
    nameOne: "Main",
    nameTwo: "Fish",
    nameThree: "Fish",
    showDetails: "Show Details",
  },
  {
    imgUrl: seafoodImage,
    nameOne: "Main",
    nameTwo: "Seafood",
    nameThree: "Fish",
    showDetails: "Show Details",
  },
  {
    imgUrl: burgerImage,
    nameOne: "Main",
    nameTwo: "Burger",
    nameThree: "Meet",
    showDetails: "Show Details",
  },
  {
    imgUrl: delishImage,
    nameOne: "Main",
    nameTwo: "Delish",
    nameThree: "Meet",
    showDetails: "Show Details",
  },
  {
    imgUrl: fishImage,
    nameOne: "Main",
    nameTwo: "Fish",
    nameThree: "Fish",
    showDetails: "Show Details",
  },
  {
    imgUrl: seafoodImage,
    nameOne: "Main",
    nameTwo: "Seafood",
    nameThree: "Fish",
    showDetails: "Show Details",
  },
];

const recipeGroups = [
  {
    imgUrl: delishImage,
    name: "Салати",
    description: "Різноманітні свіжі та смачні салати для будь-якого випадку.",
    items: [
      {
        imgUrl: delishImage,
        name: "Рецепт Салат Цезар",
        category: "Категорія : Салати",
        timeForDone: "Приготування : 30 хвилин",
        description:
          "Опис : Класичний салат з куркою, сухариками та пармезаном.",
        ingredients: [
          "Куряче філе - 200 г \n",
          "Салатні листя - 100 г\n",
          "Сухарики - 50 г\n",
          "Соус Цезар - 50 мл\n",
          "Пармезан - 30 г\n",
          "Майонез - 50 мл\n",
          "Лимонний сік - 1 ст. л.\n",
          "Часник - 1 зубчик\n",
          "Анчоуси - 2 шт.\n",
        ],
        plan: "1. Підсмажте куряче філе на грилі до готовності. Mix tomato paste, beer, and brown \n2. Поріжте салатні листя на великі шматки та викладіть їх у салатницю. \n3. Додайте нарізану курку та сухарики. \n4. Для соусу змішайте майонез, лимонний сік, часник та анчоуси. \n5. Заправте салат соусом та посипте тертим пармезаном. \n6. Подайте салат одразу після приготування.",
      },
      {
        imgUrl: "https://example.com/greek_salad.jpg",
        name: "Грецький салат",
        category: "Салати",
        timeForDone: "20 хвилин",
        description: "Салат з овочів, фети та оливок.",
        plan: "1. Наріжте помідори, огірки, перець та цибулю крупними кубиками. \n2. Додайте кубики сиру фета та оливки. \n3. Для заправки змішайте оливкову олію з лимонним соком та спеціями. \n4. Заправте салат і ретельно перемішайте. \n5. Подайте одразу після приготування.",
        ingredients: [
          "Помідори - 3 шт.",
          "Огірки - 2 шт.",
          "Перець - 1 шт.",
          "Цибуля - 1 шт.",
          "Фета - 150 г",
          "Оливки - 100 г",
          "Оливкова олія - 3 ст. л.",
          "Лимонний сік - 1 ст. л.",
          "Сіль, перець - за смаком",
        ],
      },
    ],
  },
  {
    imgUrl: "https://example.com/main_courses.jpg",
    name: "Основні страви",
    description: "Ситні та смачні основні страви для будь-якого смаку.",
    items: [
      {
        imgUrl: "https://example.com/borshch.jpg",
        name: "Борщ",
        category: "Основні страви",
        timeForDone: "1 год 30 хвилин",
        description: "Традиційний український борщ з буряком та капустою.",
        ingredients: [
          "М'ясо (свинина або яловичина) - 300 г",
          "Картопля - 3 шт.",
          "Капуста - 200 г",
          "Буряк - 1 шт.",
          "Морква - 1 шт.",
          "Цибуля - 1 шт.",
          "Часник - 2 зубчики",
          "Лавровий лист - 1 шт.",
          "Сіль, перець - за смаком",
        ],
        plan: "1. Зваріть м'ясний бульйон на свинині або яловичині. \n2. Очистіть та наріжте картоплю кубиками, додайте до бульйону. \n3. Додайте нарізану капусту. \n4. Натерті буряк та моркву обсмажте з нарізаною цибулею на сковороді, потім додайте до бульйону. \n5. Варіть на середньому вогні до готовності овочів. \n6. Додайте часник, лавровий лист, сіль та перець за смаком. \n7. Дайте борщу настоятись 15 хвилин перед подачею.",
      },
      {
        imgUrl: "https://example.com/carbonara.jpg",
        name: "Паста Карбонара",
        category: "Основні страви",
        timeForDone: "25 хвилин",
        description: "Італійська паста з беконом, яйцями та пармезаном.",
        plan: "1. Відваріть пасту до стану аль денте згідно з інструкцією на упаковці. \n2. На сковороді підсмажте нарізаний бекон до золотистого кольору. \n3. Збийте яйця з тертим пармезаном та додайте чорний перець. \n4. Злийте воду з пасти, залишивши трохи води для соусу. \n5. Додайте пасту до бекону на сковороді, зніміть з вогню та додайте яєчну суміш, швидко перемішуючи. \n6. При необхідності додайте трохи води від пасти для створення кремового соусу. \n7. Подайте пасту одразу після приготування.",
        ingredients: [
          "Паста - 200 г",
          "Бекон - 100 г",
          "Яйця - 2 шт.",
          "Пармезан - 50 г",
          "Чорний перець - за смаком",
        ],
      },
    ],
  },
  {
    imgUrl: "https://example.com/desserts.jpg",
    name: "Десерти",
    description:
      "Солодкі та смачні десерти, які стануть чудовим завершенням трапези.",
    items: [
      {
        imgUrl: "https://example.com/tiramisu.jpg",
        name: "Тірамісу",
        category: "Десерти",
        timeForDone: "4 години",
        description: "Італійський десерт з маскарпоне, кавою та какао.",
        ingredients: [
          "Жовтки - 4 шт.",
          "Цукор - 100 г",
          "Маскарпоне - 500 г",
          "Савоярді - 200 г",
          "Кава - 200 мл",
          "Какао - 2 ст. л.",
        ],
        plan: "1. Збийте жовтки з цукром до кремоподібного стану. \n2. Додайте маскарпоне та перемішайте до однорідної маси. \n3. Приготуйте міцну каву та залиште охолоджуватися. \n4. Вмочуйте савоярді в каву та викладайте на дно форми. \n5. Викладіть шар крему з маскарпоне на савоярді. \n6. Повторюйте шари до закінчення інгредієнтів, закінчуючи кремом. \n7. Посипте зверху какао та поставте в холодильник на 4 години для просочення.",
      },
      {
        imgUrl: "https://example.com/apple_pie.jpg",
        name: "Яблучний пиріг",
        category: "Десерти",
        timeForDone: "1 год 15 хвилин",
        description: "Домашній яблучний пиріг з корицею.",
        plan: "1. Приготуйте тісто за улюбленим рецептом або використовуйте готове. \n2. Очистіть яблука від шкірки та насіння, наріжте часточками. \n3. Змішайте яблука з цукром та корицею. \n4. Розкатайте тісто та викладіть у форму для випікання, зробіть бортики. \n5. Викладіть начинку з яблук на тісто. \n6. Випікайте у розігрітій до 180°C духовці близько 45 хвилин до золотистої скоринки. \n7. Дайте пирогу охолонути перед нарізанням.",
        ingredients: [
          "Тісто - 1 порція",
          "Яблука - 4 шт.",
          "Цукор - 100 г",
          "Кориця - 1 ч. л.",
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      {/* <PageOne /> */}
      {/* <div className={"list-container"}>
        {cardList.map((value) => (
          <List item={value} key={value.nameOne}/>
        ))}
      </div> */}
      <Details item={recipeGroups[0].items[0]} />
    </div>
  );
}

export default App;

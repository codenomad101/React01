import logo from "./logo.svg";
import "./App.css";
const HeaderComponent = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
};
const DescriptionComponent = (props) => {
  return (
    <div className="description">
      <h1>{props.title}</h1>
    </div>
  );
};
const FruitComponent = (props) => {
  return (
    <div className="fruits">
      <h1>{props.title}</h1>
      <div>
        <Card>
          <FoodItem items={props.fruits} />
        </Card>
      </div>
    </div>
  );
};
const FoodItem = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};
const Card = (props) => {
  return <div>{props.children}</div>;
};
const VegatableComponent = (props) => {
  return (
    <div className="vegatable">
      <h1>{props.title}</h1>
      <div>
        <Card>
          <FoodItem items={props.vegatables} />
        </Card>
      </div>
    </div>
  );
};
function App() {
  const headerTitle = "This is header Component";
  const descriptionTitle = "This is a description component";
  const fruitsTitle = "This is a fruits component";
  const vegatableTitle = "This is a Vegatable Component";
  const fruits = ["Mango", "Orange", "Banana", "Apple"];
  const vegatables = ["Onion", "Tomato", "Potato", "Garlic"];
  return (
    <div className="App">
      <HeaderComponent title={headerTitle} />
      <DescriptionComponent title={descriptionTitle} />
      <FruitComponent title={fruitsTitle} fruits={fruits} />
      <VegatableComponent title={vegatableTitle} vegatables={vegatables} />
    </div>
  );
}

export default App;

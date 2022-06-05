import Review from "./Review";
import reviews from "./data";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Review reviews={reviews} className="container" />
    </div>
  );
}

export default App;

import Days from "./components/Days";
import CurrentDay from "./components/CurrentDay";
import Details from "./components/Details";

function App() {
  return (
    <div className="container">
      <CurrentDay />
      <Days />
      <Details />
    </div>
  );
}

export default App;

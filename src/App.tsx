import './App.css'
import useHabitStore from "./store/store";

function App() {
  const store = useHabitStore();
  console.log(store);

  return <div>Temporary</div>;
}

export default App

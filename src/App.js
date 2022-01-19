import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("store", store);

  return (
    <div className="App">
      Redux saga tutorial
      <button onClick={() => dispatch({ type: "LOAD_DATA" })}>Click</button>
    </div>
  );
}

export default App;

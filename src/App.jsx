import Field from "./components/Field";
import User from "./components/User";
import { Provider } from "./data";
function App() {
  return (
    <Provider>
      <div className="App">
        <Field />
        <User />
      </div>
    </Provider>
  );
}

export default App;

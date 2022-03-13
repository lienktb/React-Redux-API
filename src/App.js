import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>

      {routes.map((item, index) => (
        <Route path={item.path} element={item.element} exact={item.exact} key={index}/>
      ))}
      </Routes>
    </div>
  );
}

export default App;

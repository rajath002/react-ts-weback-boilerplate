import "./styles.css";
import IMAGE from "./map.png";
import LOGO from "./logo.svg";
import { ClickCounter } from "./components/ClickCounter";
export const App = () => {
  return (
    <>
      <h1>
        React Typescript webpack starter template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="map" width="300" height="300" />
      <img src={LOGO} alt="React logo" width="300" height="300" />
      <ClickCounter />
    </>
  );
};

import { useContext } from "react";
import context from "../data";

const UserInfo = () => {
  const {
    gemeente,
    hobbies,
    counter: { value, change },
  } = useContext(context);
  return (
    <div>
      <p>info over hobbies : {hobbies.join(", ")}</p>
      <p>gemeente : {gemeente}</p>
      <h1>{value}</h1>
      <button
        onClick={() => {
          change(10);
        }}>
        +
      </button>
    </div>
  );
};

export default UserInfo;

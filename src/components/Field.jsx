import useLocalStorage from "../hooks/useLocalStorage";

const Field = () => {
  const [name, setName] = useLocalStorage("name", "David");
  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  return <input type="text" value={name} onChange={changeNameHandler} />;
};

export default Field;

const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: "005" }, props.name),
    React.createElement("p", { key: "006" }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "app" }, [
    React.createElement(
      "h1",
      { className: "title", key: "001" },
      "React has rendered!"
    ),
    React.createElement(
      Person,
      { key: "002", name: "Connor", occupation: "Cat Boy" },
      null
    ),
    React.createElement(
      Person,
      { key: "003", name: "Amaya", occupation: "Owlette" },
      null
    ),
    React.createElement(
      Person,
      { key: "004", name: "Greg", occupation: "Gekko" },
      null
    ),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

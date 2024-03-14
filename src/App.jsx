import axios from "axios";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";

const App = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
    // fetch("http://localhost:3000/todos")
    //   .then((res) => res.json())

    //   .then((data) => {
    //     setTodos(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="text-center ">
        Server <span className="text-warning">CRUD</span>
      </h1>
      <Form setTodos={setTodos}/>

      <ul className="container list-group mt-5">
        {!todos && <Loader />}
        {todos?.map((todo) => (
          <ListItem key={todo.id} todo={todo} setTodos={setTodos} allTodos={todos}/>
        ))}
      </ul>
    </div>
  );
};

export default App;

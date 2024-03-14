import formatDate from "../utils/formatDate";
import axios from "axios";
import EditMode from "./EditMode";
import ContentMode from "./ContentMode";
import { useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const ListItem = ({ todo, setTodos, allTodos }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        const filteredTodos = allTodos.filter((item) => item.id !== todo.id);
        setTodos(filteredTodos);
        toast.info("To do kaldırıldı");
      })
      .catch((err) => toast.warning("Başarısız İşlem", err));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const status = e.target[0].value;
    const title = e.target[1].value;

    // const updatedTodo = {
    //   title,
    //   status,
    //   // date: new Date(),
    // };
    // console.log(updatedTodo, "updated");

    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, {title,status})
      .then(() => {
       
       const updated = {...todo,title,status}
       const updatedAllTodo = allTodos.map((item)=>(item.id === updated.id ? updated : item));

       setTodos(updatedAllTodo);
       setIsEdit(false);
       toast.success("Güncelleme başarılı.")
      });
  };

  return (
    <li className="container relative  p-3 list-group-item d-flex justify-content-between gap-3 align-items-center">
      {isEdit ? (
        <EditMode
          todo={todo}
          handleUpdate={handleUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <ContentMode
          todo={todo}
          handleDelete={handleDelete}
          setIsEdit={setIsEdit}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;

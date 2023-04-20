import TodoList from "./components/TodoList";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import EditForm from "./components/EditForm";
import AppBar from '../src/components/AppBar'

const Todo = [
  { id: "1", title: "Shopping", created: "Go to mall at 5p.m." },
  { id: "2", title: "Study", created: "Go to Library at 5p.m." },
  { id: "3", title: "Badminton", created: "Go to Court at 5p.m." },
  { id: "4", title: "Tea", created: "Go to Kitchen at 5p.m." },
];
function App() {
  const [list, setList] = useState(Todo);
  const [updateTodo, setUpdateTodo] = useState(null);

  const addNewTodo = (todo) => {
    // const xyz = [...list];
    // console.log(todo);
    // xyz.push(todo);
    setList([...list, todo]);
  };

  const deleteTodo = (id) => {
    const xyz = [...list];
    const updatedList = xyz.filter((todo) => todo.id !== id);
    setList(updatedList);
  };
  const editTodo = (item) => {
    setUpdateTodo(item);
    console.log(item)
  };
  const editTodoHandler = (newObj) => {
    console.log(newObj)
    const copyList = [...list];
    const index = copyList.findIndex((todo) => todo.id === newObj.id);
    // copyList[index]=newObj;
    copyList[index].title = newObj.title;
    copyList[index].created = newObj.created;
    setList(copyList);
    setUpdateTodo(null);
    // console.log(copyList);

    console.log(newObj);
  };

  return (
    <div className="App">
      <AppBar />
      <TodoForm addNewTodo={addNewTodo} />
      {updateTodo != null && (
        <EditForm item={updateTodo} onEdit={editTodoHandler} />
      )}
      <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo} />
     
    </div>
  );
}
// const arr = [123, 456, 789];
// const App = () => {
//   const [value, setValue] = useState(arr);
//   const rev = (item, index) => {
//     const newArr = [...value];
//     newArr[index] = item;
//     setValue(newArr);
//     console.log(item);
//   };
//   return (
//     <div>
//       <TodoList item={value} rev={rev} />
//     </div>
//   );
// };

export default App;

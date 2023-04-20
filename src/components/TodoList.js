import Button from "@mui/material/Button";

const TodoList = (props) => {
  const deleteButtonClickedHandler = (id) => {
    props.deleteTodo(id);
  };
  const editButtonClickHandler = (item) => {
    props.editTodo(item);
  };

  return (
    <div>
      {props.list.map((item) => (
        <li key={item.id}>
          {item.id}&nbsp;
          {item.title}&nbsp;
          {item.created}&nbsp;
          <Button variant="outlined"
          onClick={() => editButtonClickHandler(item)}
          sx={{p:1,color:"white",backgroundColor:"black"}}>
          Edit
      </Button>&nbsp;
      <Button variant="outlined" 
        onClick={() => deleteButtonClickedHandler(item.id)}
        sx={{p:1,color:"white",backgroundColor:"red"}}>
        Delete
      </Button>
        </li>
      ))}
    </div>
  );
};
export default TodoList;



// import React, { useState } from "react";
// import "./ToDoList.css";
// const TodoList = (props) => {
//   // const [itemColor, setItemColor] = useState(true);
//   const [color, setColor] = useState("blue");

//   const clickButtonHandler = (item, index) => {
//     let rev = 0;
//     let d;
//     while (item > 0) {
//       d = item % 10;
//       rev = rev * 10 + d;
//       item = Math.floor(item / 10);
//     }
//     console.log(rev);
//     // setItemColor(!itemColor);
//     setColor("red");
//     props.rev(rev, index);
//   };
//   return (
//     <div>
//       {props.item.map((item, index) => (
//         <li
//           key={item}
//           style={{ backgroundColor: color }}
//           // className={itemColor === true ? "red" : "blue"}
//           onClick={() => clickButtonHandler(item, index)}
//         >
//           {item}
//         </li>
//       ))}
//     </div>
//   );
// };

// export default TodoList;

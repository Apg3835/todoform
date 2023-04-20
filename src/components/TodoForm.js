// import React, { useState } from "react";

// const TodoForm = (props) => {
//   const [name, setname] = useState("");
//   const [description, setdescription] = useState("");

//   const nameChangeHandler = (event) => {
//     setname(event.target.value);
//   };

//   const descriptionChangeHandler = (event) => {
//     setdescription(event.target.value);
//   };

//   const submitFormhandler = (event) => {
//     event.preventDefault();
//     const newTodoObj = {
//       id: Math.random(),
//       title: name,
//       created: description,
//     };
//     props.addNewTodo(newTodoObj);
//     setname('')
//     setdescription('')
//   };

//   return (
//     <div>
//       <form onSubmit={submitFormhandler}>
//         <label htmlFor="Name">Name </label>
//         <input
//           type="text"
//           id="Name"
//           onChange={nameChangeHandler}
//           value={name}
//         ></input>
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           id="description"
//           onChange={descriptionChangeHandler}
//           value={description}
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default TodoForm;
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function TodoForm(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const nameChangeHandler = (event) => {
    setname(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setdescription(event.target.value);
  };

  const submitFormhandler = (event) => {
    event.preventDefault();
    const newTodoObj = {
      id: Math.random(),
      title: name,
      created: description,
    };
    props.addNewTodo(newTodoObj);
    console.log(newTodoObj);
    setname("");
    setdescription("");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{p:2, marginTop:5,marginBottom:5,color:"white",backgroundColor:'blue'}}>
        New Todo
      </Button>
      <Dialog  open={open} onClose={handleClose} >
        <DialogTitle>Add New Todo</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Add a new Todo By Entering Title and Description
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={nameChangeHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            onChange={descriptionChangeHandler}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions onSubmit={submitFormhandler}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitFormhandler} type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default TodoForm;

// import { useState } from "react";
// const EditForm = (props) => {
//   const id = props.item.id;
//   const title = props.item.title;
//   const description = props.item.created;
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);
//   //   console.log(description);
//   //   console.log(title);

//   const editSubmitFormhandler = (event) => {
//     event.preventDefault();
//     const newObj = {
//       id: id,
//       title: newTitle,
//       created: newDescription,
//     };
//     props.onEdit(newObj);
//     setNewTitle("");
//     setNewDescription("");
//   };

//   const editDescriptionChangeHandler = (event) => {
//     setNewDescription(event.target.value);
//   };
//   const editNameChangeHandler = (event) => {
//     setNewTitle(event.target.value);
//   };
//   const cancelChangeHandler = () => {
//     console.log("hello");
//     props.onEdit(props.item);
//     setNewTitle("");
//     setNewDescription("");
//   };

//   return (
//     <div>
//       {/* <form onSubmit={editSubmitFormhandler}> */}
//       <label htmlFor="editName">EditedName </label>
//       <input
//         type="text"
//         id="editName"
//         onChange={editNameChangeHandler}
//         value={newTitle}
//       ></input>
//       <label htmlFor="editDescription">EditedDescription</label>
//       <input
//         type="text"
//         id="editDescription"
//         onChange={editDescriptionChangeHandler}
//         value={newDescription}
//       ></input>
//       <button type="submit" onClick={editSubmitFormhandler}>
//         Update
//       </button>
//       <button onClick={cancelChangeHandler}>Cancel</button>
//       {/* </form> */}
//     </div>
//   );
// };
// export default EditForm;
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditForm(props) {
  const [open, setOpen] = React.useState(false);
  const id = props.item.id;
  const title = props.item.title;
  const description = props.item.created;
  const [newTitle, setNewTitle] = React.useState(title);
  const [newDescription, setNewDescription] = React.useState(description);

  const editSubmitFormhandler = (event) => {
    event.preventDefault();
    const newObj = {
      id: id,
      title: newTitle,
      created: newDescription,
    };
    props.onEdit(newObj);
    setNewTitle("");
    setNewDescription("");
    setOpen(false);
  };

  const editDescriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };
  const editNameChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const cancelChangeHandler = () => {
    console.log("hello");
    props.onEdit(props.item);
    setNewTitle("");
    setNewDescription("");
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit form
      </Button>
      <Dialog open={open}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the data you want to update.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            type="text"
            id="editName"
            onChange={editNameChangeHandler}
            value={newTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            fullWidth
            variant="standard"
            type="text"
            id="editDescription"
            onChange={editDescriptionChangeHandler}
            value={newDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelChangeHandler}>Cancel</Button>
          <Button onClick={editSubmitFormhandler}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

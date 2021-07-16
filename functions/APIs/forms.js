//todos.js

const { db } = require("../util/admin");

exports.getAllForms = (request, response) => {
  db.collection("forms")
    .where("username", "==", request.user.username)
    .get()
    .then((data) => {
      let todos = [];
      data.forEach((doc) => {
        todos.push({
          formId: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          json: doc.data().json,
        });
      });
      return response.json(todos);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postOneForm = (request, response) => {
  if (request.body.id.trim() === "") {
    return response.status(400).json({ id: "Must not be empty" });
  }

  if (request.body.name.trim() === "") {
    return response.status(400).json({ name: "Must not be empty" });
  }
  if (request.body.description.trim() === "") {
    return response.status(400).json({ description: "Must not be empty" });
  }

  if (request.body.json.trim() === "") {
    return response.status(400).json({ json: "Must not be empty" });
  }

  const newTodoItem = {
    id: request.body.id,
    name: request.body.name,
    description: request.body.description,
    json: request.body.json,
    username: request.user.username,
  };
  db.collection("forms")
    .add(newTodoItem)
    .then((doc) => {
      const responseTodoItem = newTodoItem;
      responseTodoItem.id = doc.id;
      return response.json(responseTodoItem);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};

exports.deleteForm = (request, response) => {
  const document = db.doc(`/forms/${request.params.todoId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: "Form not found" });
      }
      if (doc.data().username !== request.user.username) {
        return response.status(403).json({ error: "UnAuthorized" });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: "Delete successfull" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editForm = (request, response) => {
  if (request.body.formId || request.body.createdAt) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db.collection("forms").doc(`${request.params.formId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated successfully" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code,
      });
    });
};

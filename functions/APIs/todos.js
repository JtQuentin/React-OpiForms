//todos.js

const { db } = require("../util/admin");

exports.getAllTodos = (request, response) => {
  db.collection("SurveyJS")
    .where("username", "==", request.user.username)
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let todos = [];
      data.forEach((doc) => {
        todos.push({
          todoId: doc.id,
          name: doc.data().name,
          color: doc.data().color,
          date: doc.data().date,
          email: data().email,
          createdAt: doc.data().createdAt,
        });
      });
      return response.json(todos);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postOneTodo = (request, response) => {
  if (request.body.name.trim() === "") {
    return response.status(400).json({ body: "Must not be empty" });
  }

  if (request.body.color.trim() === "") {
    return response.status(400).json({ color: "Must not be empty" });
  }
  if (request.body.date.trim() === "") {
    return response.status(400).json({ date: "Must not be empty" });
  }

  if (request.body.email.trim() === "") {
    return response.status(400).json({ email: "Must not be empty" });
  }

  const newTodoItem = {
    name: request.body.name,
    color: request.body.color,
    date: request.body.date,
    email: request.body.email,
    username: request.user.username,
    createdAt: new Date().toISOString(),
  };
  db.collection("SurveyJS")
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

exports.deleteTodo = (request, response) => {
  const document = db.doc(`/todos/${request.params.todoId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: "Todo not found" });
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

exports.editTodo = (request, response) => {
  if (request.body.todoId || request.body.createdAt) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db.collection("todos").doc(`${request.params.todoId}`);
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

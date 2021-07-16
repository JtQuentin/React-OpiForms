import firebase from "../util/config";

const db = firebase.collection("/forms");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const Forms = {
  getAll,
  create,
  update,
  remove,
};

export default forms;

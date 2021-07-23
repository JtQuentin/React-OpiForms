//index.js

const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

const {
  loginUser,
  signUpUser,
  uploadProfilePhoto,
  getUserDetail,
  updateUserDetails,
} = require("./APIs/users");

const { getAllForms } = require("./APIs/forms");

app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);
app.get("/user", auth, getUserDetail);
app.post("/user", auth, updateUserDetails);

app.get("/forms", getAllForms);
exports.api = functions.https.onRequest(app);

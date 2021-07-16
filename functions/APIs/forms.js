const { db } = require("../util/admin");

exports.getAllForms = (request, response) => {
  db.collection("forms")
    .get()
    .then((data) => {
      let forms = [];
      data.forEach((doc) => {
        forms.push({
          id: doc.data().id,
          name: doc.data().name,
          description: doc.data().description,
          json: doc.data().json,
        });
      });
      return response.json(forms);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

const express = require("express");
const app = express();
const myUsers = require("../db.json");

app.get("/api/users", (req, res, next) => {
  res.status(200).send(myUsers);
});

app.get("/api/users/:id", (req, res, next) => {
  // filter over all users and test user id against the param id being sent
  const foundUser = myUsers.filter(element => {
    return element.id === parseInt(req.params.id);
  });
  // send the found user to the front
  res.status(200).send(foundUser);
});

// {
//     "id": 1,
//     "first_name": "Raul",
//     "last_name": "Wynter",
//     "email": "rwynter0@gmail.com",
//     "school": "uofa"
//   }
// pretend the get is a post

// http://localhost:4000/api/new_user/devmountain/100?email=joshborup@gmail.com&first_name=josh&last_name=borup

app.get("/api/new_user/:school/:id", (req, res, next) => {
  const { first_name, last_name, email } = req.query;
  const { school, id } = req.params;

  const newUser = {
    id,
    first_name,
    last_name,
    school,
    email
  };

  myUsers.push(newUser);
  res.status(200).send(myUsers);
});

const port = 4000;
app.listen(port, () => console.log(`server running on port ${port}`));

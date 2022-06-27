/*let user = [
  {
    name: "Khomsan",
    lastname: "Chooon",
    email: "khomsanc63@nu.ac.th",
    from: "Chainat",
  },
  {
    name: "Ariana",
    lastname: "Grande",
    email: "arianag63@nu.ac.th",
    from: "The United state of the United States of America",
  },
];

console.log("Name : " + user[0].name + " " + user[0].lastname);
console.log("Name : " + user[1].name + " " + user[1].lastname);

for (let i = 0; i < user.length; i++) {
  console.log("Name : " + user[i].name + " " + user[i].lastname);
}*/

let users = [
  {
    name: "Khomsan",
    lastname: "Chooon",
    email: "khomsanc63@nu.ac.th",
    from: "Chainat",
  },
  {
    name: "Ariana",
    lastname: "Grande",
    email: "arianag63@nu.ac.th",
    from: "The United state of the United States of America",
  },
];

let userA = {
  name: "AAA",
  lastname: "AAAAA",
  email: "AAA@gmail.com",
  from: "Aland",
};

let userB = {
  name: "BBB",
  lastname: "BBBBB",
  email: "BBB@gmail.com",
  from: "Bland",
};

users.push(userA);
users.push(userB);

//delete users.splice(2,2)
let userSelect = users.splice(2, 2);

for (let i = 0; i < users.length; i++) {
  console.log("Name : " + users[i].name + " " + users[i].lastname);
}

console.log("---------------------------");

for (let i = 0; i < userSelect.length; i++) {
  console.log("Name : " + userSelect[i].name + " " + userSelect[i].lastname);
}

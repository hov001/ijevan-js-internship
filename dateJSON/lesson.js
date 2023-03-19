const person = {
  name: "Hovhannes",
  age: 26,
  isMarried: true,
  stomach: ["apple"],
  some: null,
};

const serialized = JSON.stringify(person, ["name", "age"]);

console.log(serialized);

const name = JSON.parse(serialized);

// console.log(serialized);

// console.log(newObj);

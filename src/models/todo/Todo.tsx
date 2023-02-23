import { types, getSnapshot } from "mobx-state-tree";

// Entities and Their Many Names
//   1. entity / type / interface / class / object / | set theory discrete mathematics
//   2. They are all pretty similar in theory and concept

// MobX Tree (Living Tree - Mutable State)
//   1. Mutable state
//   2. Protected strictly typed objects (run-time type information)
//   3. The tree has:
//      3.1: Shape (model, type information, views, actions) {}
//      3.2: Instance state (data) || (Instantiated)

// MobX Tree snapshots
//   1. Generated automatically
//   2. Immutable and structurally shared snapshots are generated automaticallys

// MobX: treeNode = types.model({}).views({}).actions({});
//   1. interface / type  / class / datatype
//   2. How MST defines its interfaces / classes
//   3. Main Methods:
//   3.1: .model({}) = Member variable type definitions
//   3.2: .views({}) = Derivation processes | get getter computed variable / value as a derivative of state
//   3.3:

// Summary:
//   1. MST is MobX with type saftey and the use of interfaces for entities instead of classes
//   2. Manage state outside of the view (Conmponent) and without the need of a class entity
//   3. Has a strange syntaxs at first forsure

// Create two entities:
//   1. Todo
//   2. Author

// Tree Model
const Author = types.model({
  id: types.identifier,
  fname: types.string,
  lname: types.string,
});

// Tree Model
const Todo = types.model({
  id: types.identifier,
  task: types.string,
  author: Author,
  completed: types.boolean,
});

// Author Object: Passed to Author.create()
const authorObject = {
  id: "1101",
  fname: "Kweayon",
  lname: "Clark",
};

const auth1 = Author.create(authorObject);

const todo1 = Todo.create({
  id: "1101",
  task: "Finish first MobX State Tree tutorial!",
  author: auth1,
  completed: false,
});

console.log(getSnapshot(todo1));

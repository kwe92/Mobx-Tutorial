import { types, getSnapshot } from "mobx-state-tree";

// Entities and Their Many Names

//   1. entity / type / interface / class / object / | set theory discrete mathematics
//   2. They are all pretty similar in theory and concept

// MobX Tree (Living Tree - Mutable State)

//   1. Mutable state
//   2. Protected strictly typed objects (run-time type information)
//   3. Tree Model (The Abstraction):
//      3.1: Shape (model, type information, views, actions) {}
//      3.2: Instance state (data) / (Instantiation of the Model)

// MobX Tree snapshots

//   1. Generated automatically
//   2. Immutable and structurally shared snapshots are generated automaticallys

// MobX: treeNode = types.model({}).views({}).actions({});

//   1. The instantiation of a Tree Model
//   2. How MST defines its interfaces / classes
//   3. Main Methods:
//   3.1: .model({}) = Member variable type definitions
//   3.2: .views({}) = Derivation processes | get getter computed variable / value as a derivative of state that typically returns a value
//   3.3: .actions({}) = Set state actions Methods / Functions | Ussually does not return a value

// types Namespace
//   - A namespace of types for MobX and Typescript

// Null saftey (types.optional)
//   - types.optional(types.typeDeclaration, defaultValue);

// Summary:
//   1. MST is MobX with type saftey and the use of interfaces for entities instead of classes
//   2. Manage state outside of the view (Conmponent) and without the need of a class entity
//   3. Has a strange syntaxs at first forsure

// Create two entities:
//   1. Todo
//   2. Author

// Tree Model | The Abstraction / Mix of Interface and Implementation
const Author = types.model({
  id: types.identifier,
  fname: types.string,
  lname: types.optional(types.string, ""),
});

// Tree Model| The Abstraction / Mix of Interface and Implementation
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
};

// Tree Node | The Instantiation
const auth1 = Author.create(authorObject);

// Tree Node | The Instantiation
const todo1 = Todo.create({
  id: "1101",
  task: "Finish first MobX State Tree tutorial!",
  author: auth1,
  completed: false,
});

console.log(getSnapshot(todo1));

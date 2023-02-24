import {
  types,
  getSnapshot,
  unprotect,
  protect,
  applySnapshot,
} from "mobx-state-tree";

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
//      3.1: .model({}) = Member variable type definitions
//      3.2: .views({self => ({})})
//          3.2a: Derivation processes get function (getter computed variable / value )
//                A derivative of state that typically returns a value
//      3.3: .actions({self => ({})})
//          3.3a: Set state actions Methods / Functions
//                Ussually does not return a value]
//          3.3b: accepts a callback  parameter is self keyword

// types Namespace
//   - A namespace of types for MobX and Typescript

// Null saftey (types.optional)
//   - types.optional(types.typeDeclaration, defaultValue);

// snapshots
//   - Should be applied at the store level
//   - applySnapshot

// Summary:
//   1. MST is MobX with type saftey and the use of interfaces for entities instead of classes
//   2. Manage state outside of the view (Conmponent) and without the need of a class entity
//   3. Has a strange syntaxs at first forsure

// Create two entities:
//   1. Todo
//   2. Author

interface AuthorInterface {
  id: string;
  fname: string;
  lname?: string;
}

interface TodoInterface {
  id: number;
  task: string;
  author: AuthorInterface;
  completed: boolean;
}
// Tree Models

// Tree Model | The Abstraction / Mix of Interface and Implementation
const Author = types.model({
  id: types.identifier,
  fname: types.string,
  lname: types.optional(types.string, ""),
});

// Tree Model| The Abstraction / Mix of Interface and Implementation
const Todo = types
  .model({
    id: types.identifierNumber,
    task: types.string,
    author: Author,
    completed: types.boolean,
  })
  .actions((self) => ({
    toggleComplete() {
      self.completed = !self.completed;
    },
    edit(newTask: string) {
      if (newTask) {
        self.task = newTask;
      }
    },
  }));

// Root Model Store
const RootStore = types
  .model({
    authors: types.map(Author),
    todos: types.optional(types.map(Todo), {}),
  })
  .actions((self) => ({
    addAuthor(author: AuthorInterface, id?: string) {
      if (id) {
        self.authors.set(id, author);
      } else {
        self.authors.put(author);
      }
    },
    addTodo(todo: TodoInterface, id?: string) {
      if (id) {
        self.todos.set(id, todo);
      } else {
        self.todos.put(todo);
      }
    },
  }));

// Apply Snapshot Before store is used
applySnapshot(RootStore);

//  Objects

// Author Object: Passed to Author.create() creating an instance of the Tree Model (Tree Node)
const authorObject: AuthorInterface = {
  id: "1101",
  fname: "Kweayon",
};

const todoObject = {
  id: 1101,
  task: "Finish first MobX State Tree tutorial!",
  author: authorObject,
  completed: false,
};

// Tree Nodes

// Tree Node | The Instantiation
const todo1 = Todo.create({
  id: 1101,
  task: "Finish first MobX State Tree tutorial!",
  author: authorObject,
  completed: false,
});

// Print Snapshot

console.log(getSnapshot(todo1));

// Tree Node store
const store = RootStore.create({});

// Update state via .actions function

store.addAuthor(authorObject);

store.addTodo(todoObject);

console.log(store.authors.get("1101"));

// I dont think this is recommended in typescript
// unprotect(store);

// store.authors.put(authorObject);
// store.todos.put(todoObject);

// protect(store);

// console.log(store.todos.get("1101")?.task);

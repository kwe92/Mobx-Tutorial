"use strict";
var _a;
exports.__esModule = true;
var mobx_state_tree_1 = require("mobx-state-tree");
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
// Summary:
//   1. MST is MobX with type saftey and the use of interfaces for entities instead of classes
//   2. Manage state outside of the view (Conmponent) and without the need of a class entity
//   3. Has a strange syntaxs at first forsure
// Create two entities:
//   1. Todo
//   2. Author
// Tree Models
// Tree Model | The Abstraction / Mix of Interface and Implementation
var Author = mobx_state_tree_1.types.model({
    id: mobx_state_tree_1.types.identifier,
    fname: mobx_state_tree_1.types.string,
    lname: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, "")
});
// Tree Model| The Abstraction / Mix of Interface and Implementation
var Todo = mobx_state_tree_1.types
    .model({
    id: mobx_state_tree_1.types.identifierNumber,
    task: mobx_state_tree_1.types.string,
    author: Author,
    completed: mobx_state_tree_1.types.boolean
})
    .actions(function (self) { return ({
    toggleComplete: function () {
        self.completed = !self.completed;
    },
    edit: function (newTask) {
        if (newTask) {
            self.task = newTask;
        }
    }
}); });
// Root Model Store
var RootStore = mobx_state_tree_1.types.model({
    authors: mobx_state_tree_1.types.map(Author),
    todos: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.map(Todo), {})
});
//  Objects
// Author Object: Passed to Author.create() creating an instance of the Tree Model (Tree Node)
var authorObject = {
    id: "1101",
    fname: "Kweayon"
};
var todoObject = {
    id: 1101,
    task: "Finish first MobX State Tree tutorial!",
    author: authorObject,
    completed: false
};
// Tree Nodes
// Tree Node | The Instantiation
var todo1 = Todo.create({
    id: 1101,
    task: "Finish first MobX State Tree tutorial!",
    author: authorObject,
    completed: false
});
// Print Snapshot
console.log((0, mobx_state_tree_1.getSnapshot)(todo1));
// Tree Node store
var store = RootStore.create({});
(0, mobx_state_tree_1.unprotect)(store);
store.authors.put(authorObject);
store.todos.put(todoObject);
// protect(store);
console.log((_a = store.todos.get("1101")) === null || _a === void 0 ? void 0 : _a.task);

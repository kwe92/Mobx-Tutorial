"use strict";
exports.__esModule = true;
var mobx_state_tree_1 = require("mobx-state-tree");
// Entities and Their Many Names
//   1. entity / type / interface / class / object / | set theory discrete mathematics
//   2. They are all pretty similar in theory and concept
// MobX Tree (Living Tree - Mutable State)
//   1. Mutable state
//   2. Protected strictly typed objects (run-time type information)
//   3. The tree has:
//      3.1: shape (type information)
//      3.2: state (data)
// MobX Tree snapshots
//   1. Generated automatically
//   2. Immutable and structurally shared snapshots are generated automaticallys
// Summary:
//   1. MST is MobX with type saftey and the use of interfaces for entities instead of classes
//   2. Manage state outside of the view (Conmponent) and without the need of a class entity
//   3. Has a strange syntaxs at first forsure
// MobX: entity = types.model({})
//   1. interface / type  / class / datatype
//   2. How MST defines its interfaces
//   3. member variable type definitions
// Create two entities:
//   1. Todo
//   2. Author
// Tree Model
var Author = mobx_state_tree_1.types.model({
    id: mobx_state_tree_1.types.identifier,
    fname: mobx_state_tree_1.types.string,
    lname: mobx_state_tree_1.types.string
});
// Tree Model
var Todo = mobx_state_tree_1.types.model({
    id: mobx_state_tree_1.types.identifier,
    task: mobx_state_tree_1.types.string,
    author: Author,
    completed: mobx_state_tree_1.types.boolean
});
// Author Object: Passed to Author.create()
var authorObject = {
    id: "1101",
    fname: "Kweayon",
    lname: "Clark"
};
var auth1 = Author.create(authorObject);
var todo1 = Todo.create({
    id: "1101",
    task: "Finish first MobX State Tree tutorial!",
    author: auth1,
    completed: false
});
console.log((0, mobx_state_tree_1.getSnapshot)(todo1));

"use strict";
exports.__esModule = true;
var mobx_state_tree_1 = require("mobx-state-tree");
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
var RootStore = mobx_state_tree_1.types
    .model({
    authors: mobx_state_tree_1.types.map(Author),
    todos: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.map(Todo), {})
})
    .actions(function (self) { return ({
    addAuthor: function (author, id) {
        if (id) {
            self.authors.set(id, author);
        }
        else {
            self.authors.put(author);
        }
    },
    addTodo: function (todo, id) {
        if (id) {
            self.todos.set(id, todo);
        }
        else {
            self.todos.put(todo);
        }
    }
}); });
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

import { applySnapshot, types } from "mobx-state-tree";

// function getRandomArbitrary(min: number, max: number) {
//   return Math.random() * (max - min) + min;
// }

interface Count {
  id: number;
  count: number;
}

const CountModel = types
  .model({
    id: types.identifierNumber,
    count: types.number,
  })
  .actions((self) => ({
    increment() {
      self.count = self.count + 1;
    },
    decrement() {
      if (self.count === 0) {
        return;
      }
      self.count = self.count - 1;
    },
  }));

const CountStore = types
  .model({
    count: types.map(CountModel),
  })
  .actions((self) => ({
    addCount(countObj: Count) {
      self.count.put(countObj);
    },
  }));

// const store = CountStore.create({});

// applySnapshot(store, {});

// store.addCount({ id: 1001, count: 0 });

export default CountStore;
// console.log(store.count.get("1001"));

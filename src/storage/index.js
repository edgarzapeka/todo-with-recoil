const todo_key = "todo";

const getNextId = (todosState) => {
  let id = 0;
  todosState.forEach((t) => {
    if (t.id > id) {
      id = t.id;
    }
  });
  return id + 1;
};

export const Storage = {
  get: () => {
    const vals = JSON.parse(localStorage.getItem(todo_key));
    return vals;
  },
  set: (item) => {
    const vals = JSON.parse(localStorage.getItem(todo_key));
    const updatedVals = [...vals, { id: getNextId(vals), text: item.text }];
    localStorage.setItem(todo_key, JSON.stringify(updatedVals));
    return updatedVals;
  },
  clear: () => {
    localStorage.setItem(todo_key, JSON.stringify([]));
  },
};

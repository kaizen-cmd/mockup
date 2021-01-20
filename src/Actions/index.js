var id = 0;

export const addNote = (title, note) => {
  return {
    type: "ADD",
    payload: {
      id: ++id,
      title: title,
      note: note,
    },
  };
};

export const removeNote = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

export const updateNote = (id, title, body) => {
  return {
    type: "UPDATE",
    payload: {
      id: id,
      title: title,
      body: body,
    },
  };
};

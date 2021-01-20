const NotesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE": {
      return state.filter((note) => note.id !== action.payload);
    }
    case "UPDATE": {
      return state.map((note) => {
        if (note.id === action.payload.id) {
          note.title = action.payload.title;
          note.note = action.payload.body;
        }
        return note;
      });
    }
    default:
      return state;
  }
};

export default NotesReducer;

// State argument is not application state, on the state this reducer is responsible for
// when state is undefined set it to null
// redux doesn't allow reducers to return undefined it will throw an error
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}

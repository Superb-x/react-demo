let initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text
          }
        ]
      case 'DECREMENT':
        return state
      default:
        return state
    }
}
const initialState = 10;

const changeTheNumber = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;
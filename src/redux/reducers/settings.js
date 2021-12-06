const initialState = ""; //changeNationatity to setNationality

const Nationality = (state = initialState, action) => { //settings
    switch (action.type) {
        case "SET_NATIONALITY": return action.payload;
        default: return state;
    }
}

export default Nationality;
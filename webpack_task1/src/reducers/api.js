const initialState = "";

const getAPI = (state = initialState, action) => {
    switch (action.type) {
        case "API": return action.id;
        default: return state;
    }
}

export default getAPI;
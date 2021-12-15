const initialState =
{
    nationality: "",
}

const Settings = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NATIONALITY":
            return {
                nationality: action.payload
            }
        default: return state;
    }
}

export default Settings;
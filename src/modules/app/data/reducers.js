export const themeReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            return action.payload;
        default:
            return state;
    }
}
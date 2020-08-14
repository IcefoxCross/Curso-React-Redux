// Constantes
const initialData = {
    loggedIn: false
};
const LOGIN = "LOGIN";

// Reducer
const reducer = (state=initialData, action) => {
    switch(action.type) {
        case LOGIN:
        default:
            return state;
    }
};

// Acciones (action creator)


export default reducer;
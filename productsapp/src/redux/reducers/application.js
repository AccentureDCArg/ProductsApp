const initialState = {
    name : "aplicación mercadolibre",
    version : "2.3"
};

export function application(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_VERSION':
            return Object.assign(
                {},
                state,
                { version : '2.5' }
            ); 
        break;
        case 'ERASE_VERSION':
            return {
                ...state,
                version : 0
            };
        break;
        default:
            return state;
    }
}

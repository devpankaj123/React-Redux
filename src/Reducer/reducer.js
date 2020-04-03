const initialState = {
    name:"Pankaj",
    code: 5767,
    contact: 7014581716
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'CHANGE_STATE':
            return{
                name: action.payload.name,
                code: action.payload.code,
                contact: action.payload.contact
            }
        }

    return state;
}

export default reducer;
export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // console.log(action)
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let updateBasket = [...state.basket];
            let index = updateBasket.findIndex(item => item.id === action.id);
            if (index !== -1) {
                updateBasket.splice(index, 1)
            }
            state.basket = updateBasket;
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;

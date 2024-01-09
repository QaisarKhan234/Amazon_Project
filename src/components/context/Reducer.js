export const initialState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
            
        case 'Remove_From_Basket':

            // we copy the basket
            let newBasket = [...state.basket];
            console.log(newBasket , "---new Basket")

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0){
                newBasket.splice(index, 1)
                console.log(newBasket, "-------updated basket")
            }else{
                console.warn(`Cannot fine the item with the (id: ${action.id}) because it is not found.`);
            }
            return {...state, basket: newBasket}
            
        default:
            return state;
    }
}

export default reducer;
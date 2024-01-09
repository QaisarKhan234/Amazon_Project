export const initialState = {
    basket: [{
        id:"12",
          title:"title here",
          price:100,
          rating:4,
          image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
        
    },
    {
        id:"12",
          title:"title here",
          price:100,
          rating:4,
          image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
        
    }],
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
            break;
        case 'Remove_From_Basket':
            return {
                
            }
            break;
        default:
            return state;
    }
}

export default reducer;
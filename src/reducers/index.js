

export const getProduct = (state = {}, action) => {
    switch (action.type){
        case 'GET_PRODUCT' : {
            return {
                products : [...action.payload]
            }
        }
        default : {
            return state;
        }
    }
};
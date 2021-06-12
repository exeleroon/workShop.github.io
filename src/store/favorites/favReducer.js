import { SET_FAVORITES, INITIAL_FAVORITES } from './types';

const initialState = [];

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_FAVORITES:
            return action.payload;
        case SET_FAVORITES:
            console.log('SET_FAVORITES', action.payload);
        const currentFavId = action.payload;
        console.log(currentFavId);
        if (state.length === 0) {
            return [currentFavId];
        } else {
            const existFavorite = state.find(
                (favItems) => favItems === currentFavId
            );
            if (existFavorite) {
                const newFavArr = state.filter(
                    (item) => item !== currentFavId
                );
                return newFavArr;
            } else {
                return [currentFavId, ...state];
            }
        }
        default: return state;
    }
};

export default favReducer;
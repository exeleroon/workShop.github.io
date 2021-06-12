import * as type from './types';

export const initialFavorites = (favFromLocal) => ({
    type: type.INITIAL_FAVORITES,
    payload: favFromLocal
});

export const handleFavorite = (id) => ({
    type: type.SET_FAVORITES,
    payload: id
});
import {
    FETCH_FILM_START,
    FETCH_FILM_SUCCESS,
    FETCH_FILM_FAILURE
} from "../actions/";

export const initialState = {
    search: "",
    film: {
        error: "",
        isFetching: false,
        data: {
            id: "",
            title: "",
            year: "",
            rating: "",
            poster: "",
            cast: [],
            technical_specs: []
        }
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILM_START:
            return {
                ...state,
                film: {
                    ...state.film,
                    isFetching: true
                }
            }

        case FETCH_FILM_SUCCESS:
            return {
                ...state,
                film: {
                    ...state.film,
                    isFetching: false,
                    data: action.payload
                }
            }

        case FETCH_FILM_FAILURE:
            return {
                ...state,
                film: {
                    ...state.film,
                    error: action.payload,
                    isFetching: false
                }
            }

        default:
            return state;
    }
};

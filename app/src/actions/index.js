import axios from "axios";

//  Define reducer labels
export const FETCH_FILM_START = "FETCH_FILM_START";
export const FETCH_FILM_SUCCESS = "FETCH_FILM_SUCCESS";
export const FETCH_FILM_FAILURE = "FETCH_FILM_FAILURE";

//  Get film data
export const getFilm = () => dispatch => {
    dispatch({ type: FETCH_FILM_START });
    axios
        .get("https://merritt.es/api/imdb/v2/film/tt0816692")
        .then(res => {
            dispatch({ type: FETCH_FILM_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FILM_FAILURE, payload: err });
        });
};

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFilm } from "../actions";
import { Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Search = props => {

    //  Input state
    const [search, setSearch] = useState("The Shawshank");

    //  Fetch film data
    useEffect(() => {
        props.getFilm(search);
    }, [search]);

    //  Handle search input
    const handleSearch = (evt) => {
        evt.preventDefault();
        if (search !== evt.target.value) {
            setSearch(evt.target.value);
        }
    }

    const styles = makeStyles(theme => ({
        input: {
            height: "80px",
            width: "500px",
            margin: "0 auto",
            color: "white"
        },
    }))();

    return (
        <div className="search-container">
            <Container>
                <TextField
                    className={styles.input}
                    id="search"
                    name="film"
                    label="Search for a film..."
                    variant="filled"
                    value={search}
                    onChange={handleSearch}
                />
            </Container>
        </div>
    );
};

export default connect(
    state => ({
        search: state.film.search
    }),
    { getFilm }
)(Search);

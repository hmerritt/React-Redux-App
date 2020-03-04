import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getFilm } from "../actions";

const FilmData = (props) => {

    //  Get film object from redux store
    const film = props.film;

    useEffect(() => {
        //  Fetch film data
        props.getFilm()
    }, []);

    const styles = makeStyles(theme => ({
        paper: {
            display: "block",
            padding: "40px"
        }
    }))();

    return (
        <div className="film-card">
            <Container>
                <Paper className={styles.paper} elevation={2}>
                    <Typography variant="h2">
                        {
                            !film.isFetching ? film.title : "Loading film..."
                        }
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
};

export default connect(
    state => ({
      film: state.film.data
  }),
  { getFilm }
)(FilmData);
